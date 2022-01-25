import React from "react";
import BooksShelfChanger from "./BooksShelfChanger";

const Book = (props) => {
  const { book } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                'url("http://books.google.com/books/content?id=PGR2Aw...")',
            }}
          />
          <BooksShelfChanger />
        </div>
        <div className="book-title">To Kill a Mockingbird</div>
        <div className="book-authors">Harper Lee</div>
      </div>
    </li>
  );
};

export default Book;
