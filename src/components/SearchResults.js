import React from "react";
import Book from "./Book";

const SearchResults = (props) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        <Book />
      </ol>
    </div>
  );
};

export default SearchResults;
