import { Container } from 'components/Container/Container.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import Section from 'components/Section/Section';

const LoginPage = () => {
  return (
    <Container>
      <Section>
        <h1>Login page</h1>
        <LoginForm />
      </Section>
    </Container>
  );
};

export default LoginPage;
