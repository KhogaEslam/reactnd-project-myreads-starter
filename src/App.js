import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import BooksSearch from "./components/BooksSearch";
import * as BooksAPI from "./BooksAPI";
// import books from "./books"; // Static Data
import "./App.css";

class BooksApp extends Component {
  booksShelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Have Read" },
  ];

  state = {
    books: [],
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };

  moveBook = (selectedBook, shelf) => {
    BooksAPI.update(selectedBook, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <BooksList
              booksShelves={this.booksShelves}
              books={this.state.books}
              moveBook={this.moveBook}
            />
          </Route>
          <Route path="/search">
            <BooksSearch books={this.state.books} moveBook={this.moveBook} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
