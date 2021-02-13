import React, { Component } from 'react'; 
import './App.css';
import Book from './components/Book';
import SlideShow from './components/SlideShow/Slideshow'; 

class App extends Component {
  //State (only in class component)
  state = {
    books : [
      { bookname: "1984", writer: "George Orwell"},
      { bookname: "The Da Vinci Code", writer: "Dan Brown"},
      { bookname: "The Alchemist", writer: "Paulo Coelho"}
    ],
    otherProp: "I am some other prop"
  }
  // constructor() {
  //   super(); 
  //   this.state = {};
  // }
  render() {
    return (
      <div className="App">
        <h1>Book List</h1>
        {/* <SlideShow /> */}
        <Book bookname={this.state.books[0].bookname} writer={this.state.books[0].writer} />
        <Book bookname={this.state.books[1].bookname} writer={this.state.books[1].writer} />
        <Book bookname={this.state.books[2].bookname} writer={this.state.books[2].writer} />
      </div>
    );
  }
}


export default App;
