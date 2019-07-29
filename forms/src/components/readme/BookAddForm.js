import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BookModel from '../../models/BookModel';
import nanoid from 'nanoid';

function BookAddForm(props) {
    const {onAdd} = props;
    const [form, setForm] = useState({name: ''});
    const handleChange = evt => {
        const {name, value} = evt.target; 
        setForm(prevForm => ({...prevForm, [name]: value}));
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        const book = new BookModel(nanoid(), form.name);
        onAdd(book);
        setForm({name: ''});
    }
    return (<form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} />
    </form>);
}

BookAddForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default BookAddForm

