import React from 'react';
import { TweetCard } from '../../Tweet/TweetCard/TweetCard';
import { DetailsDiv } from '../ProfileStyledComponents/DetailsDiv';
import { EmailP, UserBioP, UserNameP } from '../ProfileStyledComponents/UserH';

const UserDetails = ({ userName, Name, bio }) => {
  return (
    <TweetCard tweet="true">
      <DetailsDiv>
        <UserNameP>{Name}</UserNameP>
        <EmailP>{userName}</EmailP>
        <UserBioP>{bio}</UserBioP>
      </DetailsDiv>
    </TweetCard>
  );
};

export default UserDetails;
