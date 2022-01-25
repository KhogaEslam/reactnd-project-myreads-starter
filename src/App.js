import React from "react";
import { Route, Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

class BooksApp extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BookList} />
        <Route path="/search" component={BookSearch} />
      </div>
    );
  }
}

class BookList extends Component {
  render() {
    return <div className="list-books">{/* UI code */}</div>;
  }
}

class BookSearch extends Component {
  render() {
    return <div className="search-books">{/* UI code */}</div>;
  }
}

export default BooksApp;
