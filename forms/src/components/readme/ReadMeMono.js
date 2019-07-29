import React, {useState} from 'react'
import BookModel from '../../models/BookModel';
import nanoid from 'nanoid';

function ReadMeMono() {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const [form, setForm] = useState({ name: '' });

    const handleFilter = evt => {
        const { value } = evt.target;
        setFilter(value);
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        const book = new BookModel(nanoid(), form.name);
        setBooks(prevBooks => [...prevBooks, book]);
        setForm({ name: '' });
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

    return (
        <React.Fragment>
            <input type="search" value={filter} onChange={handleFilter} />
            <ul>
                {books
                    .filter(o => o.name.toLowerCase().includes(filter.trim().toLowerCase()))
                    .map(o => <li key={o.id}>
                        {o.read && '✓'} {o.name}
                        <button onClick={() => handleDone(o.id)}>Done!</button>
                        <button onClick={() => handleRemove(o.id)}>Remove</button>
                    </li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} />
            </form>
        </React.Fragment>
    )
}

export default ReadMeMono
