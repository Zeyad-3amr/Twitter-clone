const express = require('express');
const {
  getUser,
  signup,
  login,
  deleteUser,
  editProfile,
  protect,
  signout,
  getAllusers,
} = require('../controllers/userController');
const router = express.Router();
// const tweetRouter = require('./tweetRoutes');

router.route('/getAllusers').get(getAllusers);
router.route('/getUser').get(protect, getUser);
router.route('/editProfile').patch(protect, editProfile);
router.route('/deleteMe').delete(protect, deleteUser);

router.route('/signout').get(protect, signout);
router.route('/signup').post(signup);
router.route('/login').post(login);

// Tweets

const {
  createTweet,
  getUserTweets,
  getAllTweets,
} = require('../controllers/tweetController');

router.route('/createTweet').post(protect, createTweet);
router.route('/getTweets').get(protect, getUserTweets);
router.route('/getAllTweets').get(protect, getAllTweets);

module.exports = router;
