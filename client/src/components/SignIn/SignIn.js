// export const
import React, { useState } from 'react';
import { Input } from '../styledComponentsTest.js/components.js/InputField/Input';
import { Div } from '../styledComponentsTest.js/components.js/Div/Div';
import { AiOutlineTwitter } from 'react-icons/ai';
import { H2 } from '../styledComponentsTest.js/components.js/H/H2';
import { Button } from '../styledComponentsTest.js/components.js/Button/Button';

import axios from 'axios';
import { ErrorP } from '../styledComponentsTest.js/components.js/ErrorP/ErrorP';
import { Link } from 'react-router-dom';
import { P } from '../styledComponentsTest.js/components.js/P/P';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = { email: '', password: '' };
  const [isError, setIsError] = useState(false);

  const emailHandler = (e) => {
    // e.preventDefault();
    setIsError(false);
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    // e.preventDefault();
    setIsError(false);

    setPassword(e.target.value);
  };
  const signInHandler = async (e) => {
    try {
      data.email = email;
      data.password = password;
      console.log(data);

      const res = await axios.post('http://localhost:8000/api/twitter/user/login', data);

      const { user } = await res.data.data;
      console.log(user);
      setEmail('');
      setPassword('');
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  };

  return (
    <Div signin>
      <AiOutlineTwitter color="#1DA1F2" size={100} />
      <H2>Log in to Twitter</H2>
      <Input placeholder="e-mail" type="email" onChange={emailHandler} value={email} />
      <Input
        placeholder="password"
        type="password"
        onChange={passwordHandler}
        value={password}
      />
      <Button onClick={signInHandler}>Login</Button>
      {isError && <ErrorP>wrong email or password</ErrorP>}
      <P>
        Don't have account <Link to={'/sign-up'}>signup now ?</Link>
      </P>
    </Div>
  );
};

export default SignIn;
