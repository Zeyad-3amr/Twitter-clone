import React from 'react';
import ThemesButton from '../../../../ThemeButtons/BackGroundTheme/Buttons/ThemeButton';
import Modal from '@mui/material/Modal';
import { Box } from '../NavStyledComponents/Box';
import { H2 } from '../NavStyledComponents/H2';
import { H4 } from '../NavStyledComponents/H4';
import ColoredButtons from '../../../../ThemeButtons/ButtonsThemes/Buttons/ColoredButtons';
import { DoneButtons } from '../../NavStyledComponents/DoneButton';

const ModalBox = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <H2>Customize your view</H2>
          <H4>
            Display settings affect all of your Twitter accounts on this browser. These
            settings are only visible to you.
          </H4>
          <ColoredButtons />
          <ThemesButton />
          <DoneButtons onClick={handleClose}>Done</DoneButtons>
        </Box>
      </Modal>
    </>
  );
};

export default ModalBox;
