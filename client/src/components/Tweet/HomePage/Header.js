import { React, useState } from 'react';
import { TweetCard } from '../TweetCard/TweetCard';
import { IMG } from '../../styledComponentsTest.js/components.js/Img/IMG';
import { TweetDiv } from '../TweetCard/TweetDiv';
import { HeaderDiv } from '../TweetCard/HeaderDiv';
import { WiStars } from 'react-icons/wi';
import { MdOutlineGifBox } from 'react-icons/md';
import { H3 } from '../../styledComponentsTest.js/components.js/H/H3';
import { FiTweetDiv } from '../TweetCard/FiTweetDIv';
import { FiSmile, FiImage, FiCalendar, FiList } from 'react-icons/fi';
import { Button } from '../../styledComponentsTest.js/components.js/Button/Button';
import { FiTweetDiv2 } from '../TweetCard/TweetButtonDiv';
import instance from '../../../axios';
import { TextArea } from '../TweetCard/TextArea';
import { useUserIdStore } from '../../../store/userStorage';
import { TweetPhotoLabel } from '../TweetCard/TweetPhotoDiv';
import { ImageTweet } from '../TweetCard/ImageTweet';

const Header = ({ setTweetData }) => {
  const [tweet, setTweet] = useState('');
  const user = useUserIdStore((state) => state.userProfile);
  const [tweetPhoto, setTweetPhoto] = useState('');
  const [selectedTweetPhoto, setSelectedTweetPhoto] = useState('');

  const tweetHandler = (e) => {
    setTweet(e.target.value);
  };

  const TweetPhotoHandler = (e) => {
    if (e.target.files.length !== 0) {
      setTweetPhoto(e.target.files[0]);
      setSelectedTweetPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const createTweet = async () => {
    if (tweet.trim() === '' && !tweetPhoto) return;

    let tweetFormData = new FormData();

    if (tweetPhoto) tweetFormData.append('photo', tweetPhoto);
    if (tweet) tweetFormData.append('tweet', tweet);

    const res = await instance.post('tweet/createTweet', tweetFormData);
    const data = res.data.data;

    setTweetPhoto('');
    setSelectedTweetPhoto('');
    setTweetData((prev) => [data, ...prev]);
    setTweet('');
  };

  return (
    <>
      <TweetCard tweet="true">
        <HeaderDiv>
          <H3>Home</H3>
          <WiStars size={40} />
        </HeaderDiv>
      </TweetCard>

      <TweetCard tweet="true">
        <IMG src={user.profileImage} />
        <TweetDiv>
          <TextArea
            placeholder="What's Happening..."
            minRows={1}
            variant="plain"
            value={tweet}
            onChange={tweetHandler}
          />
          <ImageTweet src={selectedTweetPhoto} />
          <FiTweetDiv>
            <FiTweetDiv2>
              <input type="file" hidden id="tweetPhoto" onChange={TweetPhotoHandler} />
              <TweetPhotoLabel htmlFor="tweetPhoto">
                <FiImage />
              </TweetPhotoLabel>
              <MdOutlineGifBox />
              <FiCalendar />
              <FiList />
              <FiSmile />
            </FiTweetDiv2>
            <Button onClick={createTweet} tweet="true">
              Tweet
            </Button>
          </FiTweetDiv>
        </TweetDiv>
      </TweetCard>
    </>
  );
};

export default Header;
