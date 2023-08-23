import React from 'react';
import { NotificationsCard } from '../Notification Styled Components/NotificationsCard';
import salahImg from '../../../img/salah.jpg';
import jimHalpertImg from '../../../img/jim_halpert.jpeg';
import dwightImg from '../../../img/dwight.31c0e5a1.jpg';
import { NotificationIMG } from '../Notification Styled Components/NotifcationIMG';
import { BiSolidBell } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { NotificationMessageDiv } from '../Notification Styled Components/NotificationMessageDiv';
import { NotificationP } from '../Notification Styled Components/P';

const IndividualNotification = ({ text, pImg, name, tweet }) => {
  return (
    <>
      <NotificationMessageDiv>
        <NotificationIMG src={pImg} />
        <NotificationP>
          {text} <strong>{name}</strong>
        </NotificationP>
        <NotificationP tweet>{tweet}</NotificationP>
      </NotificationMessageDiv>
    </>
  );
};

export default IndividualNotification;
