import React, { Component } from 'react'; 
import './App.css';
import Book from './components/Book';
// import SlideShow from './components/SlideShow/Slideshow'; 

class App extends Component {
  state = {
    books : [
      { id: 1, bookname: "1984", writer: "George Orwell"},
      { id: 2, bookname: "The Da Vinci Code", writer: "Dan Brown"},
      { id: 3, bookname: "The Alchemist", writer: "Paulo Coelho"}
    ]
  }

  changeWithInputState = event => {
    this.setState({
      books : [
        { bookname: event.target.value, writer: "George Orwell"},
        { bookname: "The Da Vinci Code", writer: "Dan Brown"},
        { bookname: "Metamorphosis", writer: "Franz Kafka"}
      ]
    });
  };

  deleteBookState = index => {
    // const books = this.state.books.slice(); //makes a copy of this.state.books array
    // const books = this.state.books.map(item => item); //makes a copy of this.state.books array
    const books = [...this.state.books] //makes a copy of this.state.books array
    books.splice(index, 1); 
    this.setState({
      books: books
    });
  };

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };

    const bookState = this.state.books;

    const books = bookState.map((book, index) => {
      return (
        <Book key={book.id} 
              bookname={book.bookname}
              writer={book.writer}
              delete={() => this.deleteBookState(index)} />
              // or delete={this.deleteBookState.bind(this, index)} />
      );
    });
    
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        {/*this.changeBookState() triggers function when page loaded  / without any event
        //this.changeBookState triggers with event (MUST BE USED)*/}
        {/* <SlideShow /> */}
        {books}
      </div>
    );
  }
}


export default App;
