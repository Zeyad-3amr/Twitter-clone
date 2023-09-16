import React, { useState } from 'react';
import { NavDiv } from '../NavStyledComponents/NavDiv';
import { FaTwitter } from 'react-icons/fa';
import {
  BiBookmark,
  BiEnvelope,
  BiBell,
  BiListUl,
  BiHash,
  BiDotsHorizontalRounded,
  BiHome,
  BiUser,
} from 'react-icons/bi';
import { ListDiv } from '../NavStyledComponents/ListDiv';
import { Ul } from '../NavStyledComponents/Ul';
import { Li } from '../NavStyledComponents/Li';
import { H3 } from '../../../styledComponentsTest.js/components.js/H/H3';
import { NAVLINK } from '../NavStyledComponents/LINK';
import { MoreButton } from '../NavStyledComponents/MoreButton';
import DisplayNav from '../DisplayNav/Nav/DisplayNav';
import { useUserIdStore } from '../../../../store/userStorage';
import { useNavigate } from 'react-router-dom';

const LeftNav = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const userProfile = useUserIdStore((state) => state.userProfile);
  const username = userProfile.userName;
  if (!username) {
    navigate('/sign-in', { replace: true });
  }
  const showDisplayOptions = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <NavDiv>
        <ListDiv>
          {!clicked && (
            <Ul>
              <Li style={{ padding: '1rem 2rem 0rem 2rem' }}>
                <FaTwitter color="white" size={30} />
              </Li>
              <Li key="home">
                <NAVLINK to="/">
                  <BiHome size={30} />
                  <H3 leftnav="true">Home</H3>
                </NAVLINK>
              </Li>

              <Li key="explore">
                <NAVLINK to="/explore">
                  <BiHash size={30} />
                  <H3 leftnav="true">Explore</H3>
                </NAVLINK>
              </Li>

              <Li key="notification">
                <NAVLINK to="/Notification">
                  <BiBell size={30} />
                  <H3 leftnav="true">Notifications</H3>
                </NAVLINK>
              </Li>

              <Li key="messages">
                <NAVLINK to="/messages">
                  <BiEnvelope size={30} />
                  <H3 leftnav="true">Messages</H3>
                </NAVLINK>
              </Li>

              <Li key="bookmarks">
                <NAVLINK to="/bookmarks">
                  <BiBookmark size={30} />
                  <H3 leftnav="true">Bookmarks</H3>
                </NAVLINK>
              </Li>
              <Li key="lists">
                <NAVLINK to="/lists">
                  <BiListUl size={30} />
                  <H3 leftnav="true">Lists</H3>
                </NAVLINK>
              </Li>
              <Li key="profile">
                <NAVLINK to={`/Profile/${username}`}>
                  <BiUser size={30} />
                  <H3 leftnav="true">Profile</H3>
                </NAVLINK>
              </Li>
              <Li key="more">
                <MoreButton onClick={showDisplayOptions}>
                  <BiDotsHorizontalRounded size={30} />
                  <H3 leftnav="true">More</H3>
                </MoreButton>
              </Li>
            </Ul>
          )}
        </ListDiv>
        {clicked && <DisplayNav showDisplayOptions={showDisplayOptions} />}
      </NavDiv>
    </>
  );
};

export default LeftNav;
