import React, { useState } from 'react';
import { Input } from '../../styledComponentsTest.js/components.js/InputField/Input';
import { Div } from '../../styledComponentsTest.js/components.js/Div/Div';
import { AiOutlineTwitter } from 'react-icons/ai';
import { H2 } from '../../styledComponentsTest.js/components.js/H/H2';
import { Button } from '../../styledComponentsTest.js/components.js/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ErrorP } from '../../styledComponentsTest.js/components.js/ErrorP/ErrorP';
import { Link } from 'react-router-dom';
import { P } from '../../styledComponentsTest.js/components.js/P/P';
import instance from '../../../axios';
import { useUserIdStore } from '../../../store/userStorage';
import { SignUpLINK } from '../StyledComponents/SignUpLINk';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = { email: '', password: '' };
  const [isError, setIsError] = useState(false);
  const setUser = useUserIdStore((state) => state.setUser);
  const [errorMessage, setErrorMessage] = useState();

  const emailHandler = (e) => {
    setIsError(false);
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setIsError(false);
    setPassword(e.target.value);
  };

  const signInHandler = async () => {
    if (!email || !password) {
      setIsError(true);
      setErrorMessage('Please provide email or password !');
      return;
    }

    try {
      data.email = email;
      data.password = password;

      const res = await instance.post('user/login', data);

      if (res.data.status === 'success') {
        navigate('/', { replace: true });
      }

      const { user } = await res.data.data;
      setUser(user);
    } catch (err) {
      setIsError(true);
      setErrorMessage(err.response.data.message);
    }
  };

  return (
    <Div signin="true">
      <AiOutlineTwitter color="#1DA1F2" size={100} />
      <H2>Log in to Twitter</H2>
      <Input
        placeholder="e-mail"
        required
        type="email"
        onChange={emailHandler}
        value={email}
      />
      <Input
        placeholder="password"
        required
        type="password"
        onChange={passwordHandler}
        value={password}
      />
      {isError && <ErrorP>{errorMessage}</ErrorP>}
      <Button onClick={signInHandler}>Login</Button>
      <P>
        Don't have account <SignUpLINK to={'/sign-up'}>signup now ?</SignUpLINK>
      </P>
    </Div>
  );
};

export default SignIn;
