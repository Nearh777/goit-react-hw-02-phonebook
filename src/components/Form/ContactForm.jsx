import React, { Component } from 'react';



export class ContactForm extends Component {
  state = {
    name: '',
  };

  hendleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  hendleSubbmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name)
    this.setState({ name: ' ' });
    
  };

  reset = () => {
    this.setState({ name: ' ' });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubbmit}>
        <label> 
           
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

        <button type="submit">Add contacts</button>
      </form>
      
    );
  }
}
