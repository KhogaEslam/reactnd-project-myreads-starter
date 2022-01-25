import React from "react";
import Book from "./Book";

const SearchResults = (props) => {
  const { books, moveBook } = props;

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books &&
          books.map((book) => (
            <Book key={book.id} book={book} shelf="none" moveBook={moveBook} />
          ))}
      </ol>
    </div>
  );
};

export default SearchResults;
