import { useState } from 'react';
import Layout from './Layout/Layout';
import Section from './Section/Section';
import FormPhone from './FormPhone/FormPhone';
import ContactList from './ContactList/ContactList';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContactPhone = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = contactID => {
    setContacts(contacts.filter(({ id }) => id !== contactID));
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Layout>
      <h1>Home Work #4</h1>
      <Section title="Phonebook">
        <FormPhone addContactPhone={addContactPhone} />
      </Section>
      {!!contacts.length && (
        <Section title="Contacts">
          <ContactList
            contacts={visibleContacts}
            filter={filter}
            onChangeFilter={changeFilter}
            onDeleteContact={deleteContact}
          />
        </Section>
      )}
    </Layout>
  );
};

export default App;
