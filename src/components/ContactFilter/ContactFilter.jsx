import { useSelector, useDispatch } from 'react-redux';

import styles from './ContactFilter.module.css';

import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name:
      <input
        className={styles.input}
        onChange={changeFilter}
        value={filter}
        type="text"
        name="filter"
      />
    </label>
  );
};

export default ContactFilter;
