import { Container } from 'components/Container/Container.styled';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import Section from 'components/Section/Section';

const RegisterPage = () => {
  return (
    <Container>
      <Section>
        <h1>Register page</h1>
        <RegisterForm />
      </Section>
    </Container>
  );
};

export default RegisterPage;
