import React, { Component } from 'react'; 
import './App.css';
import Person from './components/Person';

// React library converts jsx to html

class App extends Component {
  render() {
    //JS codes here
    // let obj = new Component();
    // console.log(obj);
    return (
      //JSX codes here
      <div className="App">
        <h1>Hello World</h1>
        <Person name="Rahim" age="30">Some Info of Person</Person>
        <Person name="Karim" age="32"/>
        <Person name="Jamal" age="33"/>
        <Person name="Ishan" age="34"/>
      </div>
    );
  }
  // return React.createElement('div', { className: 'App' }, 
  //   React.createElement('h1', null, 'Hello World'), <Person />);
}


export default App;
