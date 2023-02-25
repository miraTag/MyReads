import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

const SearchBook = ({ onMoveBook }) => {
    const queryRef = useRef();
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const changeQueryHandler = (e) => {
        setQuery(e.target.value);
    };

    const searchBook = async () => {
        const response = await search(queryRef.current.value, 10);
        setBooks(response);
    };

    useEffect(() => {
        query.trim().length === 0 && setBooks([]);
        query.trim().length > 0 && searchBook();
    }, [query]);

    const filteredBooks =
        books.length > 0 &&
        books.map((book) => (
            <li key={book.id}>
                <Book bookDetails={book} onMoveBook={onMoveBook} />
            </li>
        ));

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
                        ref={queryRef}
                        onChange={changeQueryHandler}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {query.trim().length > 0 && filteredBooks}
                </ol>
            </div>
        </div>
    );
};
export default SearchBook;
