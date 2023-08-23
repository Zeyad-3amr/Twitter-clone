const User = require('../model/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    // secure: true,
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.getUser = catchAsync(async (req, res) => {
  const users = await User.findById(req.user.id);

  res.status(200).json({
    status: 'success',
    data: users,
  });
});

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    bio: req.body.bio,
  });

  createSendToken(newUser, 201, res);
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

  createSendToken(user, 200, res);
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

exports.editProfile = catchAsync(async (req, res, next) => {
  console.log(req.user);
  if (req.body.password) {
    return next(new AppError('this route is not for password change!', 400));
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
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
  console.log(req.user);

  res.cookie('jwt', '', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: 'success',
    message: 'logged out successfully!',
  });
});

// exports.isLoggedIn = catchAsync(async (req, res, next) => {
//   if (req.cookies.jwt) {
//     const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

//     const currentUser = await User.findById(decoded.id);
//     if (!currentUser) {
//       return next();
//     }
//   }
//   next();
// });

exports.getAllusers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    data: users,
  });
});
