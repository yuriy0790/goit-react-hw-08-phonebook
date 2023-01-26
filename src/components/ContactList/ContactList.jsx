import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notiflix from 'notiflix';

import { delContact, fetchContacts } from 'redux/contactsSlice';
import Notification from 'components/Notification/Notification';

import styles from './ContactList.module.css';
import Loader from 'components/Loader/Loader';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContactBtnClick = contactId => {
    const deletedContact = contacts.find(contact => contact.id === contactId);
    Notiflix.Notify.success(`"${deletedContact.name}" successfully deleted`);
    console.log(isLoading);
    dispatch(delContact(contactId));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const hasError = error.length > 0;

  return (
    <>
      {hasError && (
        <p>
          Oops, something went wrong... <b>{error}</b>
        </p>
      )}
      {isLoading && <Loader />}
      {!isLoading && !contacts.length ? (
        <Notification message="There is no contacts" />
      ) : (
        <>
          <p className={styles.contact}>
            Found {filteredContacts.length} contacts
          </p>
          <ul>
            {filteredContacts.map(({ id, name, phone }) => (
              <li className={styles.listItem} key={id}>
                <p className={styles.contact}>{name}:</p>
                <p className={styles.contact}>{phone}</p>
                <button
                  className={styles.delBtn}
                  type="button"
                  disabled={isLoading}
                  onClick={() => onDeleteContactBtnClick(id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
export default ContactList;
