import React from 'react';
import { CoverDiv } from '../ProfileStyledComponents/CoverDiv';
import { CoverImg, DivPhoto, Img } from '../ProfileStyledComponents/CoverImg';

const Cover = ({ profileImage, coverImage }) => {
  return (
    <>
      <CoverDiv>
        <CoverImg alt="CoverImg" src={coverImage} />
        <DivPhoto>
          <Img src={profileImage} alt="user" />
        </DivPhoto>
      </CoverDiv>
    </>
  );
};

export default Cover;
