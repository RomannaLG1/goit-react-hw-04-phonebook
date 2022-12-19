import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import Box from './Box';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { TitleContactList, TitlePrimary } from './Styles/App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts])

  const addContact = ({name, number}) => {
    const newContact = { id: nanoid(), name, number };
    contacts.find(
      contact => contact.name === name
    )
      ? alert(`${name} is already in contacts`)
      : setContacts(pS => [...pS, newContact]);
  };

  const getContacts = () => {
    const toNormalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toNormalizedFilter)
    );
  };

  const getFilter = event => {
    setFilter(event.currentTarget.value );
  };

  const deleteContact = contactId => {
 const filterList = contacts.filter(contact => contact.id !== contactId);
 setContacts(filterList);
  };

  return (
    <Box p={5} display="grid" as="main">
      <TitlePrimary>Phonebook</TitlePrimary>
      <ContactForm onSubmit={addContact} />
      <TitleContactList>Contacts</TitleContactList>
      <Filter value={filter} onChange={getFilter} />
      <ContactList contacts={getContacts()} onDeleteContact={deleteContact} />
    </Box>
  );
};
