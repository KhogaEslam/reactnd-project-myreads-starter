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
    searchResult: [],
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

  doSearch = (searchKeyword) => {
    console.log(searchKeyword)
    if (searchKeyword.length > 0) {
      BooksAPI.search(searchKeyword)
        .then((res) => {
          if (res.error) {
            this.doResetSearch();
          } else {
            this.setState({ searchResult: res });
          }
        })
        .catch((err) => {
          this.doResetSearch();
        });
    } else {
      this.doResetSearch();
    }
  };

  doResetSearch = () => {
    this.setState({ searchResult: [] });
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
            <BooksSearch
              books={this.state.searchResult}
              moveBook={this.moveBook}
              doSearch={this.doSearch}
              doResetSearch={this.doResetSearch}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
