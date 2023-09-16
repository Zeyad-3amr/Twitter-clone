const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  tweet: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'tweet must belong to user'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
