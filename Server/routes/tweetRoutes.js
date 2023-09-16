const express = require('express');
const router = express.Router();

const { protect } = require('../controllers/userController');
const {
  createTweet,
  getMyTweets,
  getUserTweets,
  getAllTweets,
  uploadTweetPhoto,
  resizeTweetImage,
} = require('../controllers/tweetController');

router
  .route('/createTweet')
  .post(protect, uploadTweetPhoto, resizeTweetImage, createTweet);
router.route('/getMyTweets').get(protect, getMyTweets);
router.route('/getUserTweets/:userName').get(protect, getUserTweets);
router.route('/getAllTweets').get(protect, getAllTweets);

module.exports = router;
