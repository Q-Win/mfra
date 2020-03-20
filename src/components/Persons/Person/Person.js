import React from 'react';

import classes from './Person.css';

const person = props => {
  console.log('[Person.js] rending...')
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Im {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
