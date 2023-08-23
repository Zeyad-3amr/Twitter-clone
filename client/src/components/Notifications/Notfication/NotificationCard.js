import React from 'react';
import { NotificationsCard } from '../Notification Styled Components/NotificationsCard';
import salahImg from '../../../img/salah.jpg';
import jimHalpertImg from '../../../img/jim_halpert.jpeg';
import dwightImg from '../../../img/dwight.31c0e5a1.jpg';
import michaelScott from '../../../img/micahel scott.png';
import { NotificationIMG } from '../Notification Styled Components/NotifcationIMG';
import { BiSolidBell } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { NotificationMessageDiv } from '../Notification Styled Components/NotificationMessageDiv';
import { NotificationP } from '../Notification Styled Components/P';
import IndividualNotification from './IndividualNotification';

const NotificationCard = () => {
  return (
    <>
      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />

        <IndividualNotification
          pImg={michaelScott}
          text="  Recent Tweet from"
          name="michael Scott"
          tweet="i would like to be afraid of how much they love me"
        />
      </NotificationsCard>
      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />

        <IndividualNotification
          pImg={salahImg}
          text="  Recent Tweet from"
          name="mohamed salah"
          tweet='finally the ballon d"or it was a dream came true '
        />
      </NotificationsCard>
      <NotificationsCard>
        <BsHeartFill size={25} color="#E0144C" />

        <IndividualNotification
          pImg={jimHalpertImg}
          text=" your tweet is liked from "
          name="Jim Halpert"
        />
      </NotificationsCard>
      <NotificationsCard>
        <BsHeartFill size={25} color="#E0144C" />

        <IndividualNotification
          pImg={salahImg}
          text="your tweet is liked from"
          name="mohamed salah"
        />
      </NotificationsCard>
      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />

        <IndividualNotification
          pImg={dwightImg}
          text="  Recent Tweet from"
          name="Dwight"
          tweet="Bears Beets BattleStar Galacitca"
        />
      </NotificationsCard>

      <NotificationsCard>
        <BsHeartFill size={25} color="#E0144C" />

        <IndividualNotification
          pImg={michaelScott}
          text="your tweet is liked from"
          name="michael Scott"
        />
      </NotificationsCard>

      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />
        <IndividualNotification
          pImg={dwightImg}
          text="  Recent Tweet from"
          name="Dwight"
          tweet="I have shelter for 14 days after that we are gonna have difficult conversation"
        />
      </NotificationsCard>

      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />
        <IndividualNotification
          pImg={jimHalpertImg}
          text="  Recent Tweet from "
          name="Jim Halpert"
          tweet="not a bad day at all"
        />
      </NotificationsCard>

      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />

        <IndividualNotification
          pImg={dwightImg}
          text="  Recent Tweet from"
          name="Dwight"
          tweet="Bears Beets BattleStar Galacitca"
        />
      </NotificationsCard>
    </>
  );
};

export default NotificationCard;
