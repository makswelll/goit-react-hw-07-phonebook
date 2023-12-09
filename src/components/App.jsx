import { useEffect } from 'react';

import { GlobalStyle } from './GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import {
  selectError,
  selectFilters,
  selectIsLoading,
} from 'redux/useSelectors';

import { fetchContacts } from 'redux/operation';

const App = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Loading...</b>}
      <Filter value={filter} />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};

export default App;
