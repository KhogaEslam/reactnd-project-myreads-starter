# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course.
It's a virtual personal library that a user can use to track his/her reading progress.
The app contains two pages, first one (home page) contains three shelves of books:

1- Currently Reading,

2- Want to Read, and

3- Have Read.

and, the second page is to search for books.

To get start the app:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## TL;DR

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file..
├── public # contains all public resources
│   ├── favicon.ico # React Icon as favicon.
│   └── index.html # HTML root
└── src
    ├── App.js # This is the root components of the app.
    ├── components # Contains all child components - following is the components tree.
    |   └── BooksApp # Contains basic parent components, rounting, and functionality.
    |       ├── BooksList # wrapper for all books categories and home page header.
    |       │   ├── BookCase # container of all categories.
    |       |   |   └── BooksShelf # container for a specific category.
    |       |   |       └── Book # book details compnent.
    |       |   |           └── BooksShelfChanger # the options menu of book.
    |       │   └── OpenSearchButton # navigator/route to search page.
    |       │       └── Link # predefined component as navigator.
    |       └── BooksSearch # wrapper for search page.
    |           ├── SearchBar # wrapper for search input and back/close search link.
    |           |   ├── CloseSearchButton # navigator/route to home page. 
    |           |   |   └── Link # predefined component as navigator.
    |           |   └── SearchBooksInput # handle user input - search queries.
    |           └── SearchResults # wrapper for search results.
    |                   └── Book # book details compnent.
    |                       └── BooksShelfChanger # the options menu of book.
    ├── App.css # Styles for the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Details for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
