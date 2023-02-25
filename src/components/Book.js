import React from "react";
import BookShelfs from "./BookShelfs.js";

const Book = ({ bookDetails, onMoveBook }) => {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                            bookDetails.imageLinks
                                ? bookDetails.imageLinks.thumbnail
                                : ""
                        })`,
                    }}
                ></div>
                <BookShelfs
                    book={bookDetails}
                    onMoveBook={onMoveBook}
                    defaultValue={bookDetails.shelf}
                />
            </div>
            <div className="book-title">{bookDetails.title}</div>
            <div className="book-authors">
                {bookDetails.authors !== undefined && bookDetails.authors}
            </div>
        </div>
    );
};
export default Book;
