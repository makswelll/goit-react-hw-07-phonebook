import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import {
  ContactListItem,
  DeleteBtnContact,
  ContactsList,
} from './ContactListStyled';
import { selectContacts, selectFilters } from 'redux/useSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactsList>
      {getFilteredContacts().map(contact => (
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
  );
};

export default ContactList;
