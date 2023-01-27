import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormLogin,
  FormLoginInput,
  FormLoginLabel,
  GradientButton,
} from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <FormLogin onSubmit={handleSubmit}>
      <FormLoginLabel>
        <span>Email</span>
        <FormLoginInput
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </FormLoginLabel>
      <FormLoginLabel>
        <span>Password</span>
        <FormLoginInput
          type="password"
          name="password"
          minLength={8}
          required
          value={password}
          onChange={handleChange}
        />
      </FormLoginLabel>
      <GradientButton type="submit">LOGIN</GradientButton>
    </FormLogin>
  );
};

export default LoginForm;
