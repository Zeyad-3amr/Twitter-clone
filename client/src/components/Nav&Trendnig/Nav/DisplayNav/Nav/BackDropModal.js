import React from 'react';
import { ModalDiv } from '../NavStyledComponents/ModalDiv';

const BackDropModal = ({ showDisplayOptions }) => {
  return <ModalDiv onClick={showDisplayOptions}></ModalDiv>;
};

export default BackDropModal;
