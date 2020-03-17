import React from 'react';

const cockpit = () => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div>
      <h1>Hi, Im a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={this.togglePersonsHandler}>
        Toggle Persons
      </button>
  </div>
  );
};

export default cockpit;
