import React, { Component } from 'react'; 
import './App.css';
import Person from './components/Person';

// React library converts jsx to html
// JSX


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Person />
      </div>
    );
  }
  // return React.createElement('div', { className: 'App' }, 
  //   React.createElement('h1', null, 'Hello World'), <Person />);
}


export default App;
