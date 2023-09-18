const multer = require('multer');
const sharp = require('sharp');
const User = require('../model/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res, req) => {
  const token = signToken(user._id);
  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    SameSite: 'None',
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

// IMAGE UPLOADS
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else cb(new AppError('Please upload only images.', 400), false);
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const processImage = async (file, outputFilename, width, height) => {
  if (!file) return;

  file.filename = outputFilename;

  await sharp(file.buffer)
    .resize(width, height)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`img/${outputFilename}`);
};

exports.resizeUserProfileImage = catchAsync(async (req, res, next) => {
  await processImage(
    req.files.profileImage && req.files.profileImage[0],
    `user-${req.user.id}-${Date.now()}.jpeg`,
    500,
    500
  );

  next();
});

exports.resizeUserCoverImage = catchAsync(async (req, res, next) => {
  await processImage(
    req.files.coverImage && req.files.coverImage[0],
    `user-${req.user.id}-${Date.now()}.jpeg`,
    500,
    300
  );

  next();
});

exports.uploadUserPhoto = upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'coverImage', maxCount: 1 },
]);

//USER FUNCTIONS
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.editProfile = catchAsync(async (req, res, next) => {
  if (req.body.password) {
    return next(new AppError('this route is not for password change!', 400));
  }

  const filterBody = filterObj(req.body, 'name', 'bio');

  if (req.files) {
    if (req.files.profileImage) {
      const profileImage = await cloudinary.uploader.upload(
        `img/${req.files.profileImage[0].filename}`
      );

      filterBody.profileImage = profileImage.secure_url;
    }
    if (req.files.coverImage) {
      const coverImage = await cloudinary.uploader.upload(
        `img/${req.files.coverImage[0].filename}`
      );
      filterBody.coverImage = coverImage.secure_url;
    }
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
    new: true,
    runValidators: true,
  });

  if (!updatedUser) {
    return next(new AppError('user not found!', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.getMe = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  let filter = {};
  filter = { userName: req.params.userName };

  const user = await User.findOne(filter);
  if (!user) return next(new AppError('User not Found!', 404));

  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    bio: req.body.bio,
  });

  createSendToken(newUser, 201, res, req);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email or password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('incorrect email or password', 404));
  }

  createSendToken(user, 200, res, req);
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.user.id);

  if (!user) {
    return next(new AppError('no user found with this id', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) check if token is there and if it exists
  let token;
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError('Please login to access this route!', 401));
  }

  // 2) Verify Token
  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) check if user still exist
  const currentUser = await User.findById(decode.id);

  if (!currentUser) {
    return next(new AppError('user does not no longer exist !', 401));
  }

  req.user = currentUser;

  next();
});

exports.signout = catchAsync(async (req, res, next) => {
  res.cookie('jwt', '', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: 'success',
    message: 'logged out successfully!',
  });
});

exports.getAllusers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    data: users,
  });
});
