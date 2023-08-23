const Tweet = require('../model/tweetModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createTweet = catchAsync(async (req, res, next) => {
  const obj = { ...req.body, user: req.user._id };

  if (!req.body.tweet && !req.body.photo) {
    return next(new AppError('Tweet content cannot be empty', 401));
  }
  const tweet = await Tweet.create(obj);
  res.status(201).json({
    status: 'success',
    data: tweet,
  });
});

exports.getUserTweets = catchAsync(async (req, res, next) => {
  filter = { user: req.user.id };
  const usertweets = await Tweet.find(filter).sort({ createdAt: -1 });

  res.status(200).json({
    status: 'success',
    data: usertweets,
  });
});

exports.getAllTweets = catchAsync(async (req, res, next) => {
  const tweets = await Tweet.find().sort({ createdAt: -1 });

  res.status(200).json({
    status: 'success',
    data: tweets,
  });
});
