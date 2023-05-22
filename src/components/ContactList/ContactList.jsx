import React, { Component } from 'react';

export class ContactList extends Component {

render() {
    const { contacts, onDeleteContatct} = this.props;

    return (
      
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
             {contact.name}: {contact.number}
             <button onClick={() => onDeleteContatct(contact.id)} className='btn btn-outline-primary btn-sm'>Delete</button>
             </li>
          ))}
        </ul>
      
    );
  }
}