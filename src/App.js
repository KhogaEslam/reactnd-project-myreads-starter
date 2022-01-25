import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import BooksSearch from "./components/BooksSearch";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={BooksList} />
          <Route path="/search" component={BooksSearch} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
