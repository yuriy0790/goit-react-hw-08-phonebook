import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormLogin,
  FormLoginInput,
  FormLoginLabel,
  GradientButton,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormLogin onSubmit={handleSubmit}>
      <FormLoginLabel>
        <span>Name</span>
        <FormLoginInput
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </FormLoginLabel>
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
      <GradientButton type="submit">REGISTER</GradientButton>
    </FormLogin>
  );
};

export default RegisterForm;
