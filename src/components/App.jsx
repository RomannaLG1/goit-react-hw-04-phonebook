import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import Box from './Box';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { TitleContactList, TitlePrimary } from './Styles/App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = data => {
    const contactsArray = this.state.contacts.map(contact => contact.name);
    if (contactsArray.includes(data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    return this.setState({
      ...this.state,
      contacts: [
        ...this.state.contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ],
    });
  };

  getContacts = () => {
    const toNormalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(toNormalizedFilter)
    );
  };

  setFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const { addContact, getContacts, setFilter, deleteContact } = this;
    return (
      <Box p={5} display="grid" as="main">
        <TitlePrimary>Phonebook</TitlePrimary>
        <ContactForm addContact={addContact} />
        <TitleContactList>Contacts</TitleContactList>
        <Filter value={filter} onChange={setFilter} />
        <ContactList contacts={getContacts()} onDeleteContact={deleteContact} />
      </Box>
    );
  }
}
