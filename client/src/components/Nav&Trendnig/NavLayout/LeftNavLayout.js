import { Outlet } from 'react-router-dom';

import React from 'react';
import { LayoutDiv } from '../Nav/NavStyledComponents/LayoutDiv';
import LeftNav from '../Nav/leftNav/LeftNav';
import TrendingColoumn from '../Trending/Trends/TrendingColoumn';

const LeftNavLayout = () => {
  return (
    <LayoutDiv>
      <LeftNav />
      <Outlet />
      <TrendingColoumn />
    </LayoutDiv>
  );
};

export default LeftNavLayout;
