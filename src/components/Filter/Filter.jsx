import React from "react";

export const Filter = ({value, onChange}) => (
    <label >
Find contacts by name
<br />
       <input className='form-control'
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Пошук за ім'ям"
        />
       </label>
)