import React, { Component } from 'react'; 
import './App.css';
import Book from './components/Book';

class App extends Component {
  render() {

    return (

      <div className="App">
        <h1>Book List</h1>
        <Book bookname="1984" writer="George Orwell" />
        <Book bookname="The Da Vinci Code" writer="Dan Brown" />
        <Book bookname="The Alchemist" writer="Paulo Coelho" />
      </div>
    );
  }
}


export default App;
