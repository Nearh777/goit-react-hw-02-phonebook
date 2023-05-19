import React, {Component}  from 'react';
import { Form } from './Form/Form';

export class App extends Component {

  state = {
// contactsList: 
  }


formSubmitHandler = data => {
 
  // contacts.push(data);
  console.log(data);
};

  render() {
    return (
      <div>
        <Form />
  
        <ul>
          <p>Contacts</p>
              <li>
             {this.formSubmitHandler}
              </li>
              </ul>
      </div>
    );
  }
}

