import React from 'react';
import profileImg from '../../../img/default.jpg';

import { HomeDiv } from '../TweetCard/HomeDiv';
import Tweet from './Tweet';
import Header from './Header';

const HomePage = () => {
  return (
    <HomeDiv>
      <Header />

      <Tweet
        email={'@zeyadd_'}
        userName={'zeyad'}
        tweet={'the office is better than friends'}
        pImage={profileImg}
      />
      <Tweet
        email={'@zeyadd_'}
        userName={'zeyad'}
        tweet={'oppenhimer by cristopher nolan '}
        pImage={profileImg}
      />
      <Tweet
        email={'@zeyadd_'}
        userName={'zeyad'}
        tweet={'i guess life is not like i expected'}
        pImage={profileImg}
      />
      <Tweet
        email={'@zeyadd_'}
        userName={'zeyad'}
        tweet={'iam depressed'}
        pImage={profileImg}
      />
      <Tweet
        email={'@zeyadd_'}
        userName={'zeyad'}
        tweet={'oppenhimer said : Now i become death destroyer of worlds'}
        pImage={profileImg}
      />
      <Tweet
        email={'@zeyadd_'}
        userName={'zeyad'}
        tweet={'oppenhimer said : Now i become death destroyer of worlds'}
        pImage={profileImg}
      />
      <Tweet
        email={'@zeyadd_'}
        userName={'zeyad'}
        tweet={'oppenhimer said : Now i become death destroyer of worlds'}
        pImage={profileImg}
      />
      <Tweet
        email={'@zeyadd_'}
        userName={'zeyad'}
        tweet={'oppenhimer said : Now i become death destroyer of worlds'}
        pImage={profileImg}
      />
    </HomeDiv>
  );
};

export default HomePage;
