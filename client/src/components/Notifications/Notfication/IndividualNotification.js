import React from 'react';

import { NotificationIMG } from '../Notification Styled Components/NotifcationIMG';

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
        <NotificationP tweet="true">{tweet}</NotificationP>
      </NotificationMessageDiv>
    </>
  );
};

export default IndividualNotification;
