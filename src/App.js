import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";
import Nav from "./components/Nav.js";
import SearchBook from "./components/SearchBook";
import Book from "./components/Books.js";
import "./App.css";

const App = () => {
    const [bookState, setBookState] = useState("");
    const [allBooks, setAllBooks] = useState([]);

    const moveBook = async (book, shelf) => {
        await BooksAPI.update(book, shelf);
        setBookState(shelf);
    };

    useEffect(() => {
        const getAll = async () => {
            const response = await BooksAPI.getAll();
            setAllBooks(response);
        };
        getAll();
    }, [bookState]);

    return (
        <div className="app">
            <Route path="/search">
                <SearchBook onMoveBook={moveBook} />
            </Route>
            <Route exact path="/">
                <div className="list-books">
                    <Nav />
                    <div className="list-books-content">
                        <div>
                            <Route path="/">
                                <Book
                                    title="Currently Reading"
                                    books={allBooks.filter(
                                        (book) =>
                                            book.shelf === "currentlyReading"
                                    )}
                                    onMoveBook={moveBook}
                                />
                            </Route>

                            <Route exact path="/">
                                <Book
                                    title="Want To Read"
                                    books={allBooks.filter(
                                        (book) => book.shelf === "wantToRead"
                                    )}
                                    onMoveBook={moveBook}
                                />
                            </Route>

                            <Route exact path="/">
                                <Book
                                    title="Read"
                                    books={allBooks.filter(
                                        (book) => book.shelf === "read"
                                    )}
                                    onMoveBook={moveBook}
                                />
                            </Route>
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
            </Route>
        </div>
    );
};

export default App;
