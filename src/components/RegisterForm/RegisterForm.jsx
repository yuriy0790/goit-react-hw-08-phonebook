import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          minLength={8}
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">REGISTER</button>
    </form>
  );
};

export default RegisterForm;
