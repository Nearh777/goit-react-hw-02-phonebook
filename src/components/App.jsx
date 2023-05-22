import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';

// export class App extends Component {

// }

export class App extends Component {
  state = {
    contacts: [],
    filters: '',
  };

  

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  handleSearchChange = (event) => {
    this.setState({ filters: event.target.value });
  }

  filteredContacts = this.contacts.filter(contact =>
    contact.name.toLowerCase().includes(this.filters.toLowerCase())
  );



  render() {
    const {filters, contacts} = this.state;
    const {number} = this.props;
    
    
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm addContact={this.addContact} />

        <h2>Contacts:</h2>
        <input
          type="text"
          value={filters}
          onChange={this.handleSearchChange}
          placeholder="Пошук за ім'ям"
        />
        <ul>
        <ContactList onChang={this.filteredContacts} contacts={contacts}  number={number}/>
        </ul>
        
        
      </div>
    );
  }
}
