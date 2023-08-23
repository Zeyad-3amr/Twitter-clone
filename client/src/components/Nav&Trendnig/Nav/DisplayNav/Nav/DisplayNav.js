import React, { useState } from 'react';
import BackDropModal from './BackDropModal';
import { MainDiv } from '../NavStyledComponents/MainContainer';
import { DivDisplay } from '../NavStyledComponents/DivDisplay';
import { NavDisplayUL } from '../NavStyledComponents/NavDIsplayDiv';
import { FiSettings } from 'react-icons/fi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import {
  BsPencilSquare,
  BsBoxArrowUpRight,
  BsFolder2,
  BsQuestionCircle,
} from 'react-icons/bs';
import { NavOptionsLINK } from '../NavStyledComponents/NavOptionsDiv';
import { DisplayButton } from '../NavStyledComponents/DisplayButton';
import Button from '../../../../ThemeButtons/BackGroundTheme/Buttons/ThemeButton';
import ModalBox from './Modal';

const DisplayNav = ({ showDisplayOptions }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <MainDiv>
      <BackDropModal showDisplayOptions={showDisplayOptions}></BackDropModal>
      <DivDisplay>
        <NavDisplayUL>
          <li>
            <NavOptionsLINK>
              <BsFolder2 size={20} />
              <h4>Topics</h4>
            </NavOptionsLINK>
          </li>
          <li>
            <NavOptionsLINK>
              <BsQuestionCircle size={20} />
              <h4>Help Center</h4>
            </NavOptionsLINK>
          </li>
          <li>
            <NavOptionsLINK>
              <BsBoxArrowUpRight size={20} />
              <h4>Twitter Ads</h4>
            </NavOptionsLINK>
          </li>
          <li>
            <NavOptionsLINK>
              <FiSettings size={20} />
              <h4>Settings & Privacy</h4>
            </NavOptionsLINK>
          </li>
          <li>
            <DisplayButton onClick={handleOpen}>
              <BsPencilSquare size={20} />
              <p>Display</p>
            </DisplayButton>
            <ModalBox open={open} handleClose={handleClose} />
          </li>
          <li>
            <NavOptionsLINK>
              <RiLogoutBoxLine size={22} />
              <h4>Log out</h4>
            </NavOptionsLINK>
          </li>
        </NavDisplayUL>
      </DivDisplay>
    </MainDiv>
  );
};

export default DisplayNav;
