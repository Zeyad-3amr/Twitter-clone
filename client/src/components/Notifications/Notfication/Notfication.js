import React from 'react';
import { HomeDiv } from '../../Tweet/TweetCard/HomeDiv';
import { TweetCard } from '../../Tweet/TweetCard/TweetCard';
import { HeaderDiv } from '../../Tweet/TweetCard/HeaderDiv';
import { H3 } from '../../styledComponentsTest.js/components.js/H/H3';
import { BiSolidBell } from 'react-icons/bi';
import NotificationCard from './NotificationCard';

const Notfication = () => {
  return (
    <>
      <HomeDiv>
        <TweetCard tweet="true">
          <HeaderDiv>
            <H3>Notifications</H3>
            <BiSolidBell size={25} />
          </HeaderDiv>
        </TweetCard>

        <NotificationCard />
      </HomeDiv>
    </>
  );
};

export default Notfication;
