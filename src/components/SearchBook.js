import React, { useState } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import * as BooksAPI from "../BooksAPI";

const SearchBook = (onChangeShelf, books) => {
  const [query, setQuery] = useState("");
  const [resultBooks, setResultBooks] = useState([]);
  const updateQuery = (e) => {
    setQuery(e.target.value);
    let library = books;

    if (query === "") {
      setResultBooks(resultBooks);
      console.log("rr", resultBooks);
    }
    if (query.length > 0) {
      BooksAPI.search(query).then((results) => {
        if (results.length > 0) {
          const resultBooks = results.map((book) => {
            library.forEach(function(el) {
              if (el.id === book.id) {
                book.shelf = el.shelf;
              } else {
                book.shelf = "none";
              }
            });

            return {
              id: book.id,
              shelf: book.shelf,
              authors: book.authors,
              title: book.title,
              imageLinks: {
                thumbnail: book.imageLinks.thumbnail
                  ? book.imageLinks.thumbnail
                  : "",
              },
            };
          });
          setResultBooks(resultBooks);
        }
      });
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={updateQuery}
          />
        </div>
      </div>
      {resultBooks.length === 0 ? (
        <div className="search-books-results">
          <p>nothing</p>
        </div>
      ) : (
        <div className="search-books-results">
          <ol className="books-grid">
            {resultBooks.map((book) => {
              return (
                <li key={book.id}>
                  <Books book={book} onChangeShelf={onChangeShelf} />
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default SearchBook;
