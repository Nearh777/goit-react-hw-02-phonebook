import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { ContactForm } from './Form/ContactForm';
// import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleAddContact = () => {
    const { contacts, name } = this.state;
    const newContact = {
      id: nanoid(),
      name: name.trim(),
    };

    if (newContact.name !== '') {
      this.setState({
        contacts: [...contacts, newContact],
        name: '',
      });
    }
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleNameChange}
        />

        <button onClick={this.handleAddContact}>Add contacts</button>

        <h2>Contacts:</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

//   hendleChange = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   hendleSubbmit = e => {
//     e.preventDefault();
//     this.onSubmit(this.state.name);
//     this.setState({ name: ' ' });
//   };

//   addContacts = () => {

//    return contacts.push(this.name => {
//       return(
// <li>{this.name}</li>
//       )
//     });

//     // this.setState(({ contacts }) => ({
//     //   contacts: [contact, ...contacts],
//     // }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <br />
//         <form>
//           <label>
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.hendleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <br />

//           <button type="submit">Add contacts</button>
//         </form>
//         <h2>Contacts</h2>
//         {this.addContacts}
//       </div>
//     );
//   }
// }

// {/* <h1>Phonebook</h1><br />
//         <ContactForm />
//         <h2>Contacts</h2>
//         <ContactList onSubmit={this.addContacts}/>onSubmit={this.hendleSubbmit} */}
