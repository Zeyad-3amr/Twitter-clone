import React from 'react';
import { TweetCard } from '../../Tweet/TweetCard/TweetCard';
import { BiArrowBack } from 'react-icons/bi';
import { LINK } from '../ProfileStyledComponents/LINK';
import { DetailsDiv } from '../ProfileStyledComponents/DetailsDiv';
import { CountP, UserNameP } from '../ProfileStyledComponents/UserH';
import { ProfileHeaderDiv } from '../ProfileStyledComponents/ProfileHeaderDiv';

const ProfileHeader = ({ Name, count }) => {
  return (
    <TweetCard tweet="true">
      <ProfileHeaderDiv>
        <LINK to="/">
          <BiArrowBack size={35} />
        </LINK>
        <DetailsDiv>
          <UserNameP>{Name}</UserNameP>
          <CountP>{count} tweets</CountP>
        </DetailsDiv>
      </ProfileHeaderDiv>
    </TweetCard>
  );
};

export default ProfileHeader;
