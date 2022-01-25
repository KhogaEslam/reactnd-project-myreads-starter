import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import BooksSearch from "./components/BooksSearch";
import * as BooksAPI from './BooksAPI'
import books from './books'
import "./App.css";

class BooksApp extends Component {
  booksShelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Have Read' },
  ];

  state = {
    books: books.books
  }

  // componentDidMount = () => {
  //   this.setState({books: BooksAPI.getAll()})
  // }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <BooksList booksShelves={this.booksShelves} books={this.state.books} />
          </Route>
          <Route path="/search">
            <BooksSearch books={this.state.books} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
