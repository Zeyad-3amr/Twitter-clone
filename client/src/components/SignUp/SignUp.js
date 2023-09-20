import React from 'react';
import { Input } from '../styledComponentsTest.js/components.js/InputField/Input';
import { Div } from '../styledComponentsTest.js/components.js/Div/Div';
import { AiOutlineTwitter } from 'react-icons/ai';
import { H2 } from '../styledComponentsTest.js/components.js/H/H2';
import { Button } from '../styledComponentsTest.js/components.js/Button/Button';
import { useState } from 'react';
import instance from '../../axios';
import { useNavigate } from 'react-router-dom';
import { useUserIdStore } from '../../store/userStorage';
import { ErrorP } from '../styledComponentsTest.js/components.js/ErrorP/ErrorP';
import { CircularProgress } from '@mui/material';
import { LoadingDiv } from '../Tweet/TweetCard/LoadindDiv';
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const setUser = useUserIdStore((state) => state.setUser);

  let data = { name: '', userName: '', email: '', password: '', passwordConfirm: '' };

  const nameHandler = (e) => {
    setIsError(false);
    setName(e.target.value);
  };
  const userNameHandler = (e) => {
    setIsError(false);
    setUserName(e.target.value);
  };
  const emailHandler = (e) => {
    setIsError(false);
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setIsError(false);
    setPassword(e.target.value);
  };
  const passwordConfirmHandler = (e) => {
    setIsError(false);
    setPasswordConfirm(e.target.value);
    data.confirmPassword = passwordConfirm;
  };
  const signupHandler = async () => {
    if (!email || !userName || !password || !password || !passwordConfirm) {
      setIsError(true);
      setErrorMessage('Please provide all the fields !');
      return;
    }
    try {
      data = {
        name,
        userName,
        email,
        password,
        passwordConfirm,
      };
      setIsLoading(true);

      const res = await instance.post('user/signup', data);

      if (res.data.status === 'success') {
        navigate('/', { replace: true });
      }
      const { user } = await res.data.data;
      setUser(user);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setErrorMessage(err.response.data.message);
    }
  };

  return (
    <Div signup="true">
      <AiOutlineTwitter color="#1DA1F2" size={100} />
      <H2>Log in to Twitter</H2>
      <Input placeholder="name" onChange={nameHandler} value={name} />
      <Input placeholder="username" onChange={userNameHandler} value={userName} />
      <Input placeholder="email" type="email" onChange={emailHandler} value={email} />
      <Input
        placeholder="password"
        type="password"
        onChange={passwordHandler}
        value={password}
      />
      <Input
        placeholder="confirm password"
        type="password"
        onChange={passwordConfirmHandler}
        value={passwordConfirm}
      />
      {isError && <ErrorP>{errorMessage}</ErrorP>}
      <Button onClick={signupHandler}>Sign up</Button>
      {isLoading && (
        <LoadingDiv>
          <CircularProgress size={50} />
        </LoadingDiv>
      )}
    </Div>
  );
};

export default SignUp;
