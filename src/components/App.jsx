import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { selectFilters } from 'redux/useSelectors';

const App = () => {
  const filter = useSelector(selectFilters);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};

export default App;
