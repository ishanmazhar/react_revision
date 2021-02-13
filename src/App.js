import React, { Component } from 'react'; 
import './App.css';
import Book from './components/Book';
import SlideShow from './components/SlideShow/Slideshow'; 

class App extends Component {
  state = {
    books : [
      { bookname: "1984", writer: "George Orwell"},
      { bookname: "The Da Vinci Code", writer: "Dan Brown"},
      { bookname: "The Alchemist", writer: "Paulo Coelho"}
    ],
    otherProp: "I am some other prop"
  }

  changeBookState = (newBookName) => {
    //Wrong: this.state.books[0].bookname = "1974";
    this.setState({
      books : [
        { bookname: newBookName, writer: "George Orwell"},
        { bookname: "The Da Vinci Code", writer: "Dan Brown"},
        { bookname: "Metamorphosis", writer: "Franz Kafka"}
      ]
    });
  }

  changeWithInputState = event => {
    this.setState({
      books : [
        { bookname: event.target.value, writer: "George Orwell"},
        { bookname: "The Da Vinci Code", writer: "Dan Brown"},
        { bookname: "Metamorphosis", writer: "Franz Kafka"}
      ]
    });
  }

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    }
    console.log(this.state); 
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        {/*this.changeBookState() triggers function when page loaded  / without any event
        //this.changeBookState triggers with event (MUST BE USED)*/}
        <button onClick={() => this.changeBookState("Nineteen Eighty Four")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState} />
        {/* <SlideShow /> */}
        <Book bookname={this.state.books[0].bookname} 
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState} />
        <Book bookname={this.state.books[1].bookname} 
          writer={this.state.books[1].writer} />
        <Book bookname={this.state.books[2].bookname} 
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Nineteen 84")} /> 
      </div>
    );
  }
}


export default App;
