import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Listbooks from "./components/ListBooks";
import SearchBook from "./components/SearchBook";
import "./App.css";
const arrShelf = ["currentlyReading", "read", "wantToRead"];
const App = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const changeShelf = async (book, shelf) => {
    const updateResponse = await BooksAPI.update(book, shelf);
    const getAllResponse = await BooksAPI.getAll();
    setBooks(getAllResponse);
    console.log(updateResponse);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Listbooks
            onChangeShelf={changeShelf}
            books={books}
            shelf={arrShelf}
          />
        }
      />
      <Route
        path="/search"
        element={<SearchBook onChangeShelf={changeShelf} books={books} />}
      />
    </Routes>
  );
};
export default App;
