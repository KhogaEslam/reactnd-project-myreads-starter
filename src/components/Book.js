import React from "react";
import BooksShelfChanger from "./BooksShelfChanger";

const Book = (props) => {
  const { book, shelf } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book && book.imageLinks && book.imageLinks.thumbnail})`,
            }}
          />
          <BooksShelfChanger book={book} shelf={shelf} />
        </div>
        <div className="book-title">{book && book.title && book.title}</div>
        <div className="book-authors">{book && book.authors && book.authors.join(', ')}</div>
      </div>
    </li>
  );
};

export default Book;
