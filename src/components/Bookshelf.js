import React from 'react';

const BookShelf = ({ book, onMoveBook, defaultValue }) => {
  const selectHandler = (e) => {
    onMoveBook(book, e.target.value);
  };
  return (
    <div className='book-shelf-changer'>
      <select onChange={selectHandler} value={defaultValue}>
        <option value='none' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};
export default BookShelf;
