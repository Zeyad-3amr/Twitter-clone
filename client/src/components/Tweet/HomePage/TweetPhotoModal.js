import Modal from '@mui/material/Modal';

import React from 'react';
import { TweetImg } from '../TweetCard/TweetImg';

const TweetPhotoModal = ({ open, photo, close }) => {
  return (
    <>
      <Modal open={open} onClose={close}>
        <TweetImg src={photo} />
      </Modal>
    </>
  );
};

export default TweetPhotoModal;
