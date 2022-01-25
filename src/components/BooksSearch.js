import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class BooksSearch extends Component {
  render() {
    const { books, moveBook } = this.props;
    return (
      <div className="search-books">
        <SearchBar />
        <SearchResults books={books} moveBook={moveBook} />
      </div>
    );
  }
}

export default BooksSearch;
