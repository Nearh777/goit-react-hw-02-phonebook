import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,

  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmat = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
    if (existingContact) {
      alert("Контакт з таким ім'ям вже існує.");
      return;
    }
    this.props.addContact(name.trim(), number.trim());
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmat} className='row g-3 align-items-center'>
        <input className='form-control'
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <h2>Number</h2>
        <input className='form-control'
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
        />
        

        <button type="submit" className='btn btn-outline-primary btn-lg' >Add contacts</button>
      </form>
    );
  }
}
