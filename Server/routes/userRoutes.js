const express = require('express');
const {
  getMe,
  getUser,
  signup,
  login,
  deleteUser,
  editProfile,
  protect,
  signout,
  getAllusers,
  uploadUserPhoto,
  resizeUserCoverImage,
  resizeUserProfileImage,
} = require('../controllers/userController');

const router = express.Router();

router.route('/getAllusers').get(getAllusers);
router.route('/getMe').get(protect, getMe);
router.route('/getUser/:userName').get(protect, getUser);
router
  .route('/editProfile')
  .post(
    protect,
    uploadUserPhoto,
    resizeUserProfileImage,
    resizeUserCoverImage,
    editProfile
  );
router.route('/deleteMe').delete(protect, deleteUser);

router.route('/signout').get(protect, signout);
router.route('/signup').post(signup);
router.route('/login').post(login);

module.exports = router;
