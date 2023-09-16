import React, { useState } from 'react';
import { TweetCard } from '../TweetCard/TweetCard';
import { IMG } from '../../styledComponentsTest.js/components.js/Img/IMG';
import { TweetDiv } from '../TweetCard/TweetDiv';
import { UserDiv } from '../TweetCard/UserDiv';
import { UserEmailDiv } from '../TweetCard/UserEmailDiv';
import { P } from '../../styledComponentsTest.js/components.js/P/P';
import { FiHeart, FiRepeat, FiShare, FiMessageSquare } from 'react-icons/fi';
import { FiDiv } from '../TweetCard/FiDiv';
import { UserTweet } from '../TweetCard/UserTweet';
import { UserLink } from '../TweetCard/UserNameLINK';
import { ImageTweet } from '../TweetCard/ImageTweet';
import TweetPhotoModal from './TweetPhotoModal';

const Tweet = ({ name, userName, tweet, pImage, tweetPhoto }) => {
  const [openPhoto, setOpenPhoto] = useState(false);

  const handleOpenTweetPhoto = () => {
    setOpenPhoto(true);
  };
  const handleCloseTweetPhoto = () => {
    setOpenPhoto(false);
  };
  return (
    <TweetCard>
      <IMG src={pImage} />
      <TweetDiv>
        <UserDiv>
          <UserEmailDiv>
            <UserLink to={`/Profile/${userName}`} bold="true">
              {name}{' '}
            </UserLink>
            <P username="true">{userName} </P>
          </UserEmailDiv>
          <UserTweet>{tweet}</UserTweet>
          {tweetPhoto ? (
            <>
              <ImageTweet src={tweetPhoto} onClick={handleOpenTweetPhoto} />

              <TweetPhotoModal
                open={openPhoto}
                photo={tweetPhoto}
                close={handleCloseTweetPhoto}
              />
            </>
          ) : null}
        </UserDiv>

        <FiDiv>
          <FiMessageSquare />
          <FiRepeat />
          <FiHeart />
          <FiShare />
        </FiDiv>
      </TweetDiv>
    </TweetCard>
  );
};

export default Tweet;
