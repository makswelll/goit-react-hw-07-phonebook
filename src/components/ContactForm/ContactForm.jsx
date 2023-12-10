import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormButton, FormStyle } from './ContactFormStyled';

import { selectContacts } from 'redux/useSelectors';
import { addContact } from 'redux/operation';

const ContactForm = () => {
  const dispatch = useDispatch();
  const existingContacts = useSelector(selectContacts);
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const isContactExists = () => {
    if (!existingContacts || !existingContacts.items) {
      return false;
    }

    return existingContacts.items.some(
      existingContact =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = contact;

    if (name === '' || number === '') {
      alert('Please enter both name and phone number for the contact.');
      return;
    }

    if (isContactExists()) {
      alert(`Contact with name '${name}' already exists!`);
      return;
    }

    dispatch(addContact({ name, number }));
    setContact({ name: '', number: '' });
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleChange}
        required
        placeholder="Enter name"
      />
      <input
        type="text"
        name="number"
        value={contact.number}
        onChange={handleChange}
        required
        placeholder="Enter phone number"
      />
      <FormButton type="submit">Add contact</FormButton>
    </FormStyle>
  );
};

export default ContactForm;
