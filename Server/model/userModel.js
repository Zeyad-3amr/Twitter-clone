const mongoose = require('mongoose');
const valdidator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: [25, 'username must be less Than 40 characters'],
    minlength: [3, 'username must be less Than 40 characters'],
    required: [true, 'user must have a name'],
  },
  userName: {
    type: String,
    trim: true,
    maxlength: [25, 'username must be less Than 40 characters'],
    minlength: [3, 'username must be less Than 40 characters'],
    unique: true,
    required: [true, 'user must have a username'],
  },
  email: {
    type: String,
    required: [true, 'user must have email !'],
    unique: true,
    lowercase: true,
    validate: [valdidator.isEmail, 'Please provide a valid email!'],
  },
  // userName: String,
  password: {
    type: String,
    required: [true, 'user must have Password !'],
    minlength: [8],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  bio: { type: String, default: '' },
  profileImage: {
    type: String,
    default:
      'https://res.cloudinary.com/df6gs6m1e/image/upload/v1694552868/default_zzzv3q.jpg',
  },
  coverImage: {
    type: String,
    default:
      'https://res.cloudinary.com/df6gs6m1e/image/upload/v1694554226/wallpaperflare.com_wallpaper_3_tjpvzd.jpg',
  },
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

userSchema.pre('save', function (next) {
  if (!this.userName.startsWith('@')) {
    this.userName = '@' + this.userName;
  }
  next();
});

userSchema.methods.correctPassword = async (enteredPass, storedPass) => {
  return await bcrypt.compare(enteredPass, storedPass);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestmap) {
  if (this.passwordChangedAt) {
    const changeTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return JWTTimestmap < changeTimeStamp;
  }
  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
