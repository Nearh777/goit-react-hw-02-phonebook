import React, { Component } from 'react';

export class Form extends Component {
  state = {
    contacts: [],
    name: '',
  };

  hendleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  hendleSubbmit = e => {
    e.preventDefault();
    this.props.onSubmit({
        contacts: this.state.name,
    });
    // this.props.contacts(this.contacts);
    this.reset();
  };

  reset = () => {
    this.setState({ name: ' ' });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubbmit}>
        <label> 
           Телефонна книга<br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label><br />

        <button type="submit">Додати контакт</button>
      </form>
    );
  }
}
