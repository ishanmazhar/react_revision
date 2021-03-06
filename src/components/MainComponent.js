import React, { Component } from 'react'; 
import Book from './Book'; 
import bookList from '../assets/books';

class MainComponent extends Component {
    state = {
        books: bookList,
        showBooks: true
      }
    
      changeWithInputState = (event, index) => {
        const book = {
          ...this.state.books[index]
        }
    
        book.bookname = event.target.value;
        const books = [...this.state.books];
        books[index] = book; 
        this.setState({
          books: books
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
    
      toggleBooks = () => {
        this.setState({showBooks: !this.state.showBooks });
      }
    
      render() {
        const style = {
          border: "1px solid red",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "white"
        };
    
        let books = null;
        if(this.state.showBooks) {
          const bookState = this.state.books;
          books = bookState.map((book, index) => {
            return (
              <Book key={book.id} 
                    bookname={book.bookname}
                    writer={book.writer}
                    delete={() => this.deleteBookState(index)}
                    // or delete={this.deleteBookState.bind(this, index)} />
                    inputName={(event) => this.changeWithInputState(event, index)} />
            );
          });
        }

        return (
          <div className="App">
            <h1 style={style}>Book List</h1>
            <button onClick={this.toggleBooks}>Toggle Books</button>
            {/*this.changeBookState() triggers function when page loaded  / without any event
            //this.changeBookState triggers with event (MUST BE USED)*/}
            {/* <SlideShow /> */}
            { books } 
          </div>
        );
      }

}

export default MainComponent;