import React from 'react';
import { Input } from '../styledComponentsTest.js/components.js/InputField/Input';
import { Div } from '../styledComponentsTest.js/components.js/Div/Div';
import { AiOutlineTwitter } from 'react-icons/ai';
import { H2 } from '../styledComponentsTest.js/components.js/H/H2';
import { Button } from '../styledComponentsTest.js/components.js/Button/Button';
import { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let data = { name: '', username: '', email: '', password: '', confirmPassword: '' };
  const [isError, setIsError] = useState(false);

  const nameHandler = (e) => {
    // e.preventDefault();
    setName(e.target.value);
  };
  const userNameHandler = (e) => {
    // e.preventDefault();
    setUserName(e.target.value);
  };
  const emailHandler = (e) => {
    // e.preventDefault();
    // setIsError(false);
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    // e.preventDefault();
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    // e.preventDefault();
    setConfirmPassword(e.target.value);
    data.confirmPassword = confirmPassword;
  };
  const signupHandler = () => {
    data = {
      name,
      username,
      email,
      password,
      confirmPassword,
    };

    console.log(data);
  };

  return (
    <Div signup>
      <AiOutlineTwitter color="#1DA1F2" size={100} />
      <H2>Log in to Twitter</H2>
      <Input placeholder="name" onChange={nameHandler} value={name} />
      <Input placeholder="username" onChange={userNameHandler} value={username} />
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
        onChange={confirmPasswordHandler}
        value={confirmPassword}
      />
      <Button onClick={signupHandler}>Sign up</Button>
      {isError && <p>wrong email or password</p>}
    </Div>
  );
};

export default SignUp;
