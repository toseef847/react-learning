import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import { render } from "@testing-library/react";
import person from "./Person/Person";

// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Toseef", age: 23 },
//       { name: "Qasim", age: 23 },
//       { name: "Ishfaq", age: 22 },
//     ],
//     otherstate: "Some other state",
//   });
//   const [otherState, SetOtherState] = useState('Some other state')

//   // console.log(personsState, otherState);

//   const switchNameHandler = (newName) => {
//     setPersonsState({
//       persons: [
//         { name: newName, age: 23 },
//         { name: "Muhammad Qasim", age: 23 },
//         { name: "Muhammad Ishfaq", age: 23 },
//       ],
//     });
//   };

//   const inputHandler = (event) => {
//     setPersonsState({
//       persons: [
//         { name: event.target.value, age: 23 },
//         { name: "Qasim", age: 23 },
//         { name: "Ishfaq", age: 22 },
//       ],
//     });
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello I'm Toseef Hasan</h1>
//         <button onClick={switchNameHandler.bind(this, 'Toseef Hasan')}>Switch Name</button>
//         <Person
//           name={personsState.persons[0].name}
//           age={personsState.persons[0].age}
//           change={inputHandler}
//         />
//         <Person
//           name={personsState.persons[1].name}
//           age={personsState.persons[1].age}
//           click={() => switchNameHandler('Toseef847')}
//         >I Work from Home</Person>
//         <Person
//           name={personsState.persons[2].name}
//           age={personsState.persons[2].age}
//         />
//       </header>
//     </div>
//   );
// };

// export default App;

// <<<<<<<<<<<<<\\ Task 01 //>>>>>>>>>>>>>>

// import UserInput from './UserIO/UserInput';
// import UserOutput from './UserIO/UserOutput';

// class App extends Component {
//   state = {
//     username: 'Toseef847'
//   }
//   usernameChangeHandler = (event) => {
//     this.setState({ username: event.target.value, })
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Task 01</h1>
//         <div>
//           <UserInput change={this.usernameChangeHandler} name={this.state.username} />
//           <UserOutput username={this.state.username} />
//           <UserOutput username={this.state.username} />
//           <UserOutput username='Toseef' />
//         </div>
//       </div>
//     )
//   }
// }

// export default App;


import Radium from 'radium'
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Toseef", age: 23 },
      { id: 2, name: "Qasim", age: 23 },
      { id: 3, name: "Ishfaq", age: 22 },
    ],
    otherstate: "Some other state",
    showPersons: false,
  };
  pStyle = {
    width: "100%",
  }

  inputHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }
  removePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  render() {
    const btnStyle = {
      backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
      color: '#fff',
      border: "none",
      padding: "10px 15px",
      fontSize: "16px",
      borderRadius: "4px",
      cursor: "pointer",
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div style={this.pStyle} className="Persons">
          {
            this.state.persons.map((person, index) =>
              <Person
                remove={this.removePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.inputHandler(event, person.id)}
              />
            )
          }
        </div>
      );
      btnStyle.backgroundImage = 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)';
    }
    return (
      < div className="App" >
        <header className="App-header">
          <h1>Hello I'm Toseef Hasan</h1>
          <p>Just Hacking another day.</p>
          <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </header>
      </div>
    );
  };
}
export default App;


//      \\<<<<<<<<<<<<<< Assignment 02 >>>>>>>>>>>>>>>//

// import Validation from './Validation/Validation';
// import Char from './Char/Char';
// class App extends Component {
//   state = {
//     userInput: 'Text',
//   }
//   userInputHandler = (event) => {
//     this.setState({
//       userInput: event.target.value,
//     })
//   }
//   charRemovehandler = (index) => {
//     const text = this.state.userInput.split('');
//     text.splice(index, 1);
//     const updatedText = text.join('');
//     this.setState({ userInput: updatedText });
//   }

//   render() {
//     const CharList = this.state.userInput.split('').map((char, index) =>
//       <Char
//         character={char}
//         key={index}
//         remove={() => this.charRemovehandler(index)}
//       />);
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Hello I'm Toseef Hasan</h1>
//           <input type="text" onChange={this.userInputHandler} value={this.state.userInput} />
//           <p>{this.state.userInput}</p>
//           <Validation InputLength={this.state.userInput.length} />
//           {CharList}
//         </header>
//       </div>
//     )
//   }
// }
// export default App;