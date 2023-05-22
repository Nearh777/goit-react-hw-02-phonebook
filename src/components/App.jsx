import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';



export class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.string),
    filter: PropTypes.string,

  };
  

  state = {
    contacts: [],
    filter: '',
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

  deleteContact = contactId => {
    this.setState(prevState => ({
contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }


  changeFilter = (event) => {
    this.setState({filter: event.target.value});
  }

  getVisibleContact = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  



  render() {
    const {filter, contacts} = this.state;
    const {number} = this.props;
    

    const filteredContacts = this.getVisibleContact();
    
    
    return (
      <div >
        <h1 htmlFor='exampleFormControlInput1' className='form-label'>Phonebook</h1>

        <ContactForm contacts={contacts} addContact={this.addContact} number={number} />

        <h2>Contacts:</h2>
       <Filter value={filter} onChange={this.changeFilter}/>
        <ul>
        <ContactList contacts={filteredContacts } onDeleteContatct={this.deleteContact}  />
        </ul>
        
        
      </div>
    );
  }
}







