import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" component={BooksList} />
          <Route path="/search" component={BooksSearch} />
        </Routes>
      </div>
    );
  }
}

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

const OpenSearchButton = () => {
  return (
    <div className="open-search">
      <Link to="search">
        <button>Add a Book</button>
      </Link>
    </div>
  );
};

const BookCase = (props) => {
  const { booksShelves } = props;
  return (
    <div className="list-books-content">
      <div>
        {booksShelves.map((shelf) => (
          <BooksShelf key={shelf.key} shelf={shelf} />
        ))}
      </div>
    </div>
  );
};

const BooksShelf = (props) => {
  const { shelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book book={{}} />
        </ol>
      </div>
    </div>
  );
};

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

class BooksShelfChanger extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

class BooksSearch extends Component {
  render() {
    return <div className="search-books">{/* UI code */}</div>;
  }
}

export default BooksApp;
