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
import { DisplayButton } from '../NavStyledComponents/DisplayButton';
import ModalBox from './ModalBox';
import instance from '../../../../../axios';
import { useNavigate } from 'react-router-dom';
import { useUserIdStore } from '../../../../../store/userStorage';

const DisplayNav = ({ showDisplayOptions }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const setUser = useUserIdStore((state) => state.setUser);
  const logOutHandler = async () => {
    try {
      const res = await instance.get('user/signout');
      if (res.data.status === 'success') {
        setUser('');
        navigate('/sign-in', { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainDiv>
      <BackDropModal showDisplayOptions={showDisplayOptions}></BackDropModal>
      <DivDisplay>
        <NavDisplayUL>
          <li>
            <DisplayButton>
              <BsFolder2 size={20} />
              <p>Topics</p>
            </DisplayButton>
          </li>
          <li>
            <DisplayButton>
              <BsQuestionCircle size={20} />
              <p>Help Center</p>
            </DisplayButton>
          </li>
          <li>
            <DisplayButton>
              <BsBoxArrowUpRight size={20} />
              <p>Twitter Ads</p>
            </DisplayButton>
          </li>
          <li>
            <DisplayButton>
              <FiSettings size={20} />
              <p>Settings & Privacy</p>
            </DisplayButton>
          </li>
          <li>
            <DisplayButton onClick={handleOpen}>
              <BsPencilSquare size={20} />
              <p>Display</p>
            </DisplayButton>
            <ModalBox open={open} handleClose={handleClose} />
          </li>
          <li>
            <DisplayButton onClick={logOutHandler}>
              <RiLogoutBoxLine size={22} />
              <p>Log out</p>
            </DisplayButton>
          </li>
        </NavDisplayUL>
      </DivDisplay>
    </MainDiv>
  );
};

export default DisplayNav;
