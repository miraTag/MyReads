# MyReads: A Book Tracking App

This is the final assessment project for REACT FUNDAMENTALS from the Udacity's React Nanodegree course. 
## TL;DR

To get started:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## APP structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon,
│   └── index.html 
└── src
    ├── App.css # App Styles.
    ├── App.js # App root.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # App images.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js
```

## APP Overview
In the MyReads app, we created a bookshelf app that allows us to select and categorize books we have read, are currently reading, or want to read. We use React to build the application and interact  with an API server and client library for information.

## APP Functionality
In this application, we have a main page that  displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
- Currently Reading
- Want to Read
- Read

With a control arrow we select the shelf for that book  and  move it accordingly.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

## APP Screenshots

# APP Main Page
<img width="1266" alt="Screenshot 2022-11-08 at 09 27 13" src="https://user-images.githubusercontent.com/59561224/200527738-611bb20a-44bf-469e-9569-b8660e62acb9.png">

# APP Search Page 
<img width="1431" alt="Screenshot 2022-11-08 at 09 27 25" src="https://user-images.githubusercontent.com/59561224/200527732-d95cb3e9-02e5-49fd-8cb7-7c56c262f833.png">

## Backend Server

To simplify your development process, we've been provided with a  backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods we need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
