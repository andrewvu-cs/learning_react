import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props =>{
  //needs useState to be imported from react
  //return two elements, 2nd element is a function that would update  our state
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Andrew', age: 29},
      {name: 'Vu', age: 28},
      {name: 'Michelle', age: 26}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () =>{
    //DON'T DO THIS: this.state.persons[0].name ='Maximillion';
    //This is only available through Components
    //Replaces our entire state, so you need to add the other properties
    setPersonsState({persons: [
      {name: 'Andrews', age: 28},
      {name: 'drew', age: 29},
      {name: 'Stephanie', age: 27}
      ] 
    });
  };


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Raciging </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
}

export default app;

// state = {
//   persons: [
//     {name: 'Andrew', age: 29},
//     {name: 'Vu', age: 28},
//     {name: 'Michelle', age: 26}
//   ],
//   otherState:'some other value'
// }

