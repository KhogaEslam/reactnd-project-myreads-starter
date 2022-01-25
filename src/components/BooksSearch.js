import React, { Component } from "react";
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

class BooksSearch extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="search-books">
        <SearchBar />
        <SearchResults books={books} />
      </div>
    );
  }
}

export default BooksSearch;
