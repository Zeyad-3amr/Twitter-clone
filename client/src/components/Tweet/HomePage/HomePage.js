import React, { useEffect, useState } from 'react';
import { HomeDiv } from '../TweetCard/HomeDiv';
import Tweet from './Tweet';
import Header from './Header';
import instance from '../../../axios';
import { CircularProgress } from '@mui/material';
import { LoadingDiv } from '../TweetCard/LoadindDiv';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [tweetData, setTweetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTweetsHandler = async () => {
      try {
        setIsLoading(true);
        const res = await instance.get('tweet/getAllTweets');

        const data = await res.data.data;
        setTweetData(data);
        setIsLoading(false);
      } catch (err) {
        navigate('/sign-in', { replace: true });
        console.log(err);
      }
    };
    fetchTweetsHandler();
  }, []);

  return (
    <HomeDiv>
      <Header setTweetData={setTweetData} setIsLoading={setIsLoading} />
      {isLoading ? (
        <LoadingDiv>
          <CircularProgress size={60} />
        </LoadingDiv>
      ) : (
        <>
          {tweetData.map((tweet) => (
            <Tweet
              key={tweet._id}
              name={tweet.user.name}
              userName={tweet.user.userName}
              tweet={tweet.tweet}
              pImage={tweet.user.profileImage}
              tweetPhoto={tweet.photo}
            />
          ))}
        </>
      )}
    </HomeDiv>
  );
};

export default HomePage;
