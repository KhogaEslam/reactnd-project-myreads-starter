import React from "react";
import Book from "./Book";

const BooksShelf = (props) => {
  const { shelf, books, moveBook } = props;
  const currentBooks =
    books && books.filter((book) => book.shelf === shelf.key);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentBooks &&
            currentBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                shelf={book.shelf}
                moveBook={moveBook}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
