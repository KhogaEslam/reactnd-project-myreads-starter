import React, { Component } from "react";

class SearchBooksInput extends Component {
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" />
      </div>
    );
  }
}

export default SearchBooksInput;
