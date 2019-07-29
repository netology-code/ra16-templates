import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem';
import BookModel from '../../models/BookModel';

function BookList (props) {
    const {books, onRemove: handleRemove, onDone: handleDone} = props;
    return (
        <ul>
            {books.map(o => <BookItem key={o.id} book={o} onRemove={handleRemove} onDone={handleDone} />)}
        </ul>
    )
}

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.instanceOf(BookModel)).isRequired,
    onRemove: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
}

export default BookList 
