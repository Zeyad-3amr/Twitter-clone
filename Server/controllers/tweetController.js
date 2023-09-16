const Tweet = require('../model/tweetModel');
const multer = require('multer');
const sharp = require('sharp');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User = require('../model/userModel');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

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

exports.resizeTweetImage = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .toFormat('jpeg')
    .jpeg({ quality: 100 })
    .toFile(`img/${req.file.filename}`);

  next();
});

exports.uploadTweetPhoto = upload.single('photo');

exports.createTweet = catchAsync(async (req, res, next) => {
  const obj = { ...req.body, user: req.user._id };

  if (req.file) {
    const photo = await cloudinary.uploader.upload(`img/${req.file.filename}`);

    obj.photo = photo.secure_url;
  }

  if (!obj.tweet && !obj.photo) {
    return next(new AppError('Tweet content cannot be empty', 401));
  }
  console.log(obj);
  await Tweet.create(obj);

  const createdTweet = await Tweet.findOne().sort({ createdAt: -1 }).populate({
    path: 'user',
    select: '-_id -__v -bio  -coverImage ',
  });

  res.status(200).json({
    status: 'success',
    data: createdTweet,
  });
});

exports.getMyTweets = catchAsync(async (req, res, next) => {
  let filter = { user: req.user.id };

  const usertweets = await Tweet.find(filter).sort({ createdAt: -1 }).populate({
    path: 'user',
    select: '-_id -__v -bio',
  });

  res.status(200).json({
    status: 'success',
    data: usertweets,
  });
});

exports.getUserTweets = catchAsync(async (req, res, next) => {
  let filter = { userName: req.params.userName };
  const user = await User.findOne(filter);

  const userId = user._id;

  let tweetFilter = { user: userId };

  const usertweets = await Tweet.find(tweetFilter).sort({ createdAt: -1 }).populate({
    path: 'user',
    select: '-__v -bio',
  });

  res.status(200).json({
    status: 'success',
    data: usertweets,
  });
});

exports.getAllTweets = catchAsync(async (req, res, next) => {
  const tweets = await Tweet.find().sort({ createdAt: -1 }).populate({
    path: 'user',
    select: '-__v -bio',
  });

  res.status(200).json({
    status: 'success',
    data: tweets,
  });
});
