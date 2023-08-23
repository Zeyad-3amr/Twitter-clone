import React from 'react';
import { TweetCard } from '../TweetCard/TweetCard';
import { IMG } from '../../styledComponentsTest.js/components.js/Img/IMG';
import { TweetDiv } from '../TweetCard/TweetDiv';
import profileImg from '../../../img/default.jpg';
import { HeaderDiv } from '../TweetCard/HeaderDiv';
import { WiStars } from 'react-icons/wi';
import { MdOutlineGifBox } from 'react-icons/md';
import { H3 } from '../../styledComponentsTest.js/components.js/H/H3';
import { FiTweetDiv } from '../TweetCard/FiTweetDIv';
import { FiSmile, FiImage, FiCalendar, FiList } from 'react-icons/fi';
import { styled } from 'styled-components';
import { Button } from '../../styledComponentsTest.js/components.js/Button/Button';
import { FiTweetDiv2 } from '../TweetCard/TweetButtonDiv';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const Header = (props) => {
  const Textarea = styled(TextareaAutosize)`
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.8rem;
    padding: 0rem 0rem 0rem 1rem;
    margin-top: 2rem;
    font-family: inherit;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.theme.textColor};
    &::placeholder {
      color: ${({ theme }) => theme.theme.grey};
    }
  `;

  return (
    <>
      <TweetCard tweet>
        <HeaderDiv>
          <H3>Home</H3>
          <WiStars size={40} />
        </HeaderDiv>
      </TweetCard>

      <TweetCard tweet>
        <IMG src={profileImg} />
        <TweetDiv>
          <Textarea placeholder="What's Happening..." minRows={1} variant="plain" />
          <FiTweetDiv>
            <FiTweetDiv2>
              <FiImage size={32} />
              <MdOutlineGifBox size={32} />
              <FiCalendar size={32} />
              <FiList size={32} />
              <FiSmile size={32} />
            </FiTweetDiv2>
            <Button tweet>Tweet</Button>
          </FiTweetDiv>
        </TweetDiv>
      </TweetCard>
    </>
  );
};

export default Header;
