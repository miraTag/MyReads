# MyReads Project

This is the final assessment project for Udacity's React Nanodegree course. 
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
