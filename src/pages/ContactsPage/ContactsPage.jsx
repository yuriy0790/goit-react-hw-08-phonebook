import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactList from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container.styled';
import Section from 'components/Section/Section';
import { GlobalStyleComponent } from 'styles/GlobalStyles';

const ContactsPage = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <AddContactForm />
        <ContactFilter />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>

      <GlobalStyleComponent />
    </Container>
  );
};

export default ContactsPage;
