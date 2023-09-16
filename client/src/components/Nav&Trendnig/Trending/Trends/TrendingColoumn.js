import React from 'react';
import { ColumnDiv } from '../TrendingStyledComponents/ColumnDiv';
import { InputSearch } from '../TrendingStyledComponents/InputSearch';
import { SearchBarDiv } from '../TrendingStyledComponents/SearchBarDiv';
import { BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { FixedDiv } from '../TrendingStyledComponents/FixedDiv';
import { TrendsDiv } from '../TrendingStyledComponents/TrendsDiv';
import { TrendingDiv } from '../TrendingStyledComponents/TrendingDiv';
import { TrendDiv } from '../TrendingStyledComponents/TrendDiv';
import { TitleDiv } from '../TrendingStyledComponents/TitleDiv';
import { H3, H6, H5, H4 } from '../TrendingStyledComponents/H';
import salahImg from '../../../../img/salah.jpg';
import jimHalpertImg from '../../../../img/jim_halpert.jpeg';
import dwightImg from '../../../../img/dwight.31c0e5a1.jpg';
import { ImgToFollow } from '../TrendingStyledComponents/ImgToFollow';
import { WhoToFollowDiv } from '../TrendingStyledComponents/WhoToFollowDiv';
import { FollowButton } from '../TrendingStyledComponents/FollowButton';
import { UserToFollowDiv } from '../TrendingStyledComponents/UserFollowDiv';
const TrendingColoumn = () => {
  return (
    <ColumnDiv>
      <FixedDiv>
        <TrendsDiv>
          <SearchBarDiv>
            <BiSearch size={20} />
            <InputSearch placeholder="Search" />
          </SearchBarDiv>

          <TrendingDiv>
            <TitleDiv>
              <H3>Trends for you</H3>
              <FiSettings size={25} />
            </TitleDiv>

            <TrendDiv>
              <H6>1.Trending</H6>
              <H4>#THE_OFFICE</H4>
              <H6>480K Tweets</H6>
            </TrendDiv>

            <TrendDiv>
              <H6>2.Trending</H6>
              <H4>#haaland</H4>
              <H6>202K Tweets</H6>
            </TrendDiv>

            <TrendDiv>
              <H6>3.Trending</H6>
              <H4>#محمد_صلاح</H4>
              <H6>187K Tweets</H6>
            </TrendDiv>

            <TrendDiv>
              <H6>4.Trending</H6>
              <H4>#schrute_farms</H4>
              <H6>150K Tweets</H6>
            </TrendDiv>

            <TrendDiv>
              <H6>5.Trending</H6>
              <H4>#Michael_Scott</H4>
              <H6>120K Tweets</H6>
            </TrendDiv>

            <TrendDiv>
              <H6 showmore="true">Show more</H6>
            </TrendDiv>
          </TrendingDiv>

          <TrendingDiv>
            <TitleDiv>
              <H3>Who to follow</H3>
            </TitleDiv>
            <WhoToFollowDiv>
              <ImgToFollow src={salahImg} />
              <UserToFollowDiv>
                <H5>mosalah</H5>
                <H6>@mohamed_salah</H6>
              </UserToFollowDiv>
              <FollowButton>Follow</FollowButton>
            </WhoToFollowDiv>
            <WhoToFollowDiv>
              <ImgToFollow src={jimHalpertImg} />
              <UserToFollowDiv>
                <H5>Jim</H5>
                <H6>@jim_halpert</H6>
              </UserToFollowDiv>
              <FollowButton>Follow</FollowButton>
            </WhoToFollowDiv>
            <WhoToFollowDiv>
              <ImgToFollow src={dwightImg} />
              <UserToFollowDiv>
                <H5>Dwight</H5>
                <H6>@dwight_schrute</H6>
              </UserToFollowDiv>
              <FollowButton>Follow</FollowButton>
            </WhoToFollowDiv>
            <TrendDiv>
              <H6 showmore="true">Show more</H6>
            </TrendDiv>
          </TrendingDiv>
        </TrendsDiv>
      </FixedDiv>
    </ColumnDiv>
  );
};

export default TrendingColoumn;
