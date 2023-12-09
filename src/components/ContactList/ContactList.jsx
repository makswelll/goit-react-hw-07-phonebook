import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ContactListItem,
  DeleteBtnContact,
  ContactsList,
} from './ContactListStyled';

import { deleteContact } from 'redux/operation';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/useSelectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactsByFilter = useSelector(selectVisibleContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {error && <b>Something went wrong... Try reloading the page </b>}
      {isLoading && !error && 'Loading...'}
      <ContactsList>
        {contactsByFilter.map(contact => (
          <ContactListItem key={contact.id}>
            {contact.name} - {contact.number}
            <DeleteBtnContact
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </DeleteBtnContact>
          </ContactListItem>
        ))}
      </ContactsList>
    </>
  );
};

export default ContactList;
