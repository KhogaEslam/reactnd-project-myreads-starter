import React, { Component } from "react";
import BookCase from "./BookCase";
import OpenSearchButton from "./OpenSearchButton";

class BooksList extends Component {
  render() {
    const { booksShelves } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookCase booksShelves={booksShelves} />
        <OpenSearchButton />
      </div>
    );
  }
}

export default BooksList;
