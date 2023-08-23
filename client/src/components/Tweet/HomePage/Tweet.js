import React from 'react';
import { TweetCard } from '../TweetCard/TweetCard';
import { IMG } from '../../styledComponentsTest.js/components.js/Img/IMG';
import { TweetDiv } from '../TweetCard/TweetDiv';
import { UserDiv } from '../TweetCard/UserDiv';
import { UserEmailDiv } from '../TweetCard/UserEmailDiv';
import { P } from '../../styledComponentsTest.js/components.js/P/P';
import { FiHeart, FiRepeat, FiShare, FiMessageSquare } from 'react-icons/fi';
import profileImg from '../../../img/default.jpg';
import { FiDiv } from '../TweetCard/FiDiv';
import { UserTweet } from '../TweetCard/UserTweet';

const Tweet = ({ email, userName, tweet, pImage }) => {
  return (
    <TweetCard>
      <IMG src={pImage} />
      <TweetDiv>
        <UserDiv>
          <UserEmailDiv>
            <P bold>{userName} </P>
            <P username>{email} </P>
          </UserEmailDiv>
          <UserTweet>{tweet}</UserTweet>
        </UserDiv>

        <FiDiv>
          <FiMessageSquare size={30} />
          <FiRepeat size={30} />
          <FiHeart size={30} />
          <FiShare size={30} />
        </FiDiv>
      </TweetDiv>
    </TweetCard>
  );
};

export default Tweet;
