import { Container } from 'components/Container/Container.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <h1>PHONEBOOK</h1>
      {!isLoggedIn ? (
        <p>Please login to get access to your contacts</p>
      ) : (
        <p>Manage your contact list easely</p>
      )}
      <img
        src="https://img.freepik.com/premium-photo/adorable-red-cat-and-retro-phone-isolated-on-white-background_488220-4548.jpg?w=900"
        alt="cat with phone"
      ></img>
    </Container>
  );
};

export default HomePage;
