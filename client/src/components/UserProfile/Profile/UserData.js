import React, { useState } from 'react';
import { UserDataDiv } from '../ProfileStyledComponents/UserDataDiv';
import { UserInput } from '../ProfileStyledComponents/DataInput';
import instance from '../../../axios';
import { SaveCancelDiv } from '../ProfileStyledComponents/SaveCancelDiv';
import { CancelButton, SaveButton } from '../ProfileStyledComponents/Save-CancelButtons';
//////
import { CoverDiv } from '../ProfileStyledComponents/CoverDiv';
import { CoverImg, DivPhoto, Img } from '../ProfileStyledComponents/CoverImg';
import { FiCamera } from 'react-icons/fi';

import {
  CoverCameraIconDiv,
  ProfileCameraIconDiv,
} from '../ProfileStyledComponents/CameraIconDiv';
import {
  UpdateCoverDiv,
  UpdateProfileDiv,
} from '../ProfileStyledComponents/UpdateCoverDiv';
import { useUserIdStore } from '../../../store/userStorage';

const UserData = ({
  Name,
  bio,
  setEdit,
  cancelHandler,
  setShouldRefetch,
  profileImage,
  coverImage,
  setIsLoading,
}) => {
  const [name, setName] = useState(Name);
  const [userBio, setUserBio] = useState(bio);
  const [selectedCoverImage, setSelectedCoverImage] = useState(coverImage);
  const [selectedProfileImage, setSelectedProfileImage] = useState(profileImage);
  const [imageProfile, setImageProfile] = useState(null);
  const [imageCover, setImageCover] = useState(null);
  const setUser = useUserIdStore((state) => state.setUser);

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };
  const changeUserBioHandler = (e) => {
    setUserBio(e.target.value);
  };

  const handleProfilePhotoChange = (e) => {
    setSelectedProfileImage(e.target.files[0]);
    setImageProfile(URL.createObjectURL(e.target.files[0]));
  };
  const handleCoverPhotoChange = (e) => {
    setSelectedCoverImage(e.target.files[0]);
    setImageCover(URL.createObjectURL(e.target.files[0]));
  };
  const saveHandler = async () => {
    try {
      setIsLoading(true);

      let bodyFormData = new FormData();

      if (name !== '' && name.length > 1) {
        bodyFormData.append('name', name);
        bodyFormData.append('bio', userBio);
        bodyFormData.append('profileImage', selectedProfileImage);
        bodyFormData.append('coverImage', selectedCoverImage);

        const res = await instance.post('user/editProfile', bodyFormData);
        const data = res.data.data.user;
        setUser(data);
      }
      setShouldRefetch((prev) => !prev);
      setEdit(false);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <CoverDiv>
        <input type="file" id="coverPhoto" hidden onChange={handleCoverPhotoChange} />
        <UpdateCoverDiv htmlFor="coverPhoto">
          <CoverCameraIconDiv>
            <FiCamera size={30} />
          </CoverCameraIconDiv>
          <CoverImg alt="CoverImg" src={imageCover ? imageCover : coverImage} />
        </UpdateCoverDiv>

        <DivPhoto>
          <UpdateProfileDiv htmlFor="profilePhoto">
            <input
              type="file"
              id="profilePhoto"
              hidden
              onChange={handleProfilePhotoChange}
            />
            <ProfileCameraIconDiv>
              <FiCamera size={30} />
            </ProfileCameraIconDiv>
            <Img src={imageProfile ? imageProfile : profileImage} alt="user" />
          </UpdateProfileDiv>
        </DivPhoto>
      </CoverDiv>
      <SaveCancelDiv>
        <CancelButton onClick={cancelHandler}>cancel</CancelButton>
        <SaveButton onClick={saveHandler}>save</SaveButton>
      </SaveCancelDiv>
      <UserDataDiv>
        <UserInput
          type="text"
          placeholder="Your Name"
          defaultValue={Name}
          onChange={changeNameHandler}
          minLength={3}
        />
        <UserInput
          type="text"
          placeholder="Your Bio"
          defaultValue={bio}
          onChange={changeUserBioHandler}
        />
      </UserDataDiv>
    </>
  );
};

export default UserData;
