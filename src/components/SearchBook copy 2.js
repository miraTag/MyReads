import React, { useState } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import * as BooksAPI from "../BooksAPI";

const SearchBook = ({ onChangeShelf, books }) => {
  const [query, setQuery] = useState("");
  const [queryBooks, setQueryBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query.trim());
    if (query !== "") {
      const res = BooksAPI.get.filter((book) => {
        return Object.values(book)
          .join("")
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setQueryBooks(res);
    } else {
      setQueryBooks(books);
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
            placeholder="Search by title or author"
            onChange={(event) => updateQuery(event.target.value)}
            value={query}
          />
        </div>
      </div>
      {query.length && (
        <div className="search-books-results">
          <ol className="books-grid">
            {queryBooks.map((book) => {
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
