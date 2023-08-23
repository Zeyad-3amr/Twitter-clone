import React, { useState } from 'react';
import { NavDiv } from '../NavStyledComponents/NavDiv';
import { FaTwitter } from 'react-icons/fa';
import {
  BiBookmark,
  BiEnvelope,
  BiSearch,
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
import { NavTweetButton } from '../NavStyledComponents/NavTweetButton';
import { LINK } from '../NavStyledComponents/LINK';
import { MoreButton } from '../NavStyledComponents/MoreButton';
import DisplayNav from '../DisplayNav/Nav/DisplayNav';

const LeftNav = () => {
  const [clicked, setClicked] = useState(false);

  const showDisplayOptions = () => {
    setClicked((prev) => !prev);
  };

  return (
    <NavDiv>
      <ListDiv>
        {!clicked && (
          <Ul>
            <Li style={{ padding: '1rem 2rem 0rem 2rem' }}>
              <FaTwitter color="white" size={30} />
            </Li>
            <Li>
              <LINK to="/Home">
                <BiHome size={30} />
                <H3>Home</H3>
              </LINK>
            </Li>
            <Li>
              <LINK>
                <BiUser size={30} />
                <H3>Profile</H3>
              </LINK>
            </Li>
            <Li>
              <LINK to="/Home">
                <BiHash size={30} />
                <H3>Explore</H3>
              </LINK>
            </Li>
            <Li>
              <LINK to="/Notification">
                <BiBell size={30} />
                <H3>Notifications</H3>
              </LINK>
            </Li>
            <Li>
              <LINK to="/Home">
                <BiEnvelope size={30} />
                <H3>Messages</H3>
              </LINK>
            </Li>
            <Li>
              <LINK to="/Home">
                <BiSearch size={30} />
                <H3>Search</H3>
              </LINK>
            </Li>
            <Li>
              <LINK to="/Home">
                <BiBookmark size={30} />
                <H3>Bookmarks</H3>
              </LINK>
            </Li>
            <Li>
              <LINK to="/Home">
                <BiListUl size={30} />
                <H3>Lists</H3>
              </LINK>
            </Li>
            <Li>
              <MoreButton onClick={showDisplayOptions}>
                <BiDotsHorizontalRounded size={30} />
                <H3>More</H3>
              </MoreButton>
            </Li>
            <Li>
              <NavTweetButton>Tweet</NavTweetButton>
            </Li>
          </Ul>
        )}
      </ListDiv>
      {clicked && <DisplayNav showDisplayOptions={showDisplayOptions} />}
    </NavDiv>
  );
};

export default LeftNav;
