const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  tweet: String,
  photo: String,
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

// tweetSchema.post('save', function (doc, next) {
//   // console.log(doc);
//   nnn = .find({}).sort({ createdAt: -1 });
//   console.log(nnn);
//   next();
// });

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
