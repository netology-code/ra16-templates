import React, { useState } from 'react'
import Filter from './Filter';
import BookModel from '../../models/BookModel';
import BookList from './BookList';
import BookAddForm from './BookAddForm';
import './ReadMe.css'; 

function ReadMe(props) {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const handleFilter = value => {
        setFilter(value);
    }
    const handleAdd = book => {
        setBooks(prevBooks => [...prevBooks, book]);
    }
    const handleRemove = id => {
        setBooks(prevBooks => prevBooks.filter(o => o.id !== id));
    }
    const handleDone = id => {
        setBooks(prevBooks => prevBooks.map(o => {
            if (o.id === id) {
                return new BookModel(o.id, o.name, !o.read)
            }
            return o;
        }));
    }
    const filtered = books.filter(o => o.name.toLowerCase().includes(filter.trim().toLowerCase()));
    return (
        <React.Fragment>
            <Filter onFilter={handleFilter} filter={filter} />
            <BookList books={filtered} onRemove={handleRemove} onDone={handleDone} />
            <BookAddForm onAdd={handleAdd} />
        </React.Fragment>
    );
}

ReadMe.propTypes = {

}

export default ReadMe

