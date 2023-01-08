import React from "react";
import Book from "../components/Book";

const Page = ({ title, books, onMoveBook }) => {
    const bookItems =
        books.length > 0 &&
        books.map((book) => (
            <li key={book.id}>
                <Book bookDetails={book} onMoveBook={onMoveBook} />
            </li>
        ));
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">{bookItems.length && bookItems}</ol>
            </div>
        </div>
    );
};
export default Page;
