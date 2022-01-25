import React from "react";
import BooksShelf from "./BooksShelf";

const BookCase = (props) => {
  const { booksShelves, books, moveBook } = props;
  return (
    <div className="list-books-content">
      <div>
        {booksShelves &&
          booksShelves.map((shelf) => (
            <BooksShelf
              key={shelf.key}
              shelf={shelf}
              books={books}
              moveBook={moveBook}
            />
          ))}
      </div>
    </div>
  );
};

export default BookCase;
