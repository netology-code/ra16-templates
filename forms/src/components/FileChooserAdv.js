import React, { useState } from 'react'

function FileChooserAdv() {
    const [form, setForm] = useState({
        name: '',
        files: null
    });

    const handleSubmit = evt => {
        evt.preventDefault()
        console.log(form);
    }

    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    const handleSelect = evt => {
        const {name, files} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: files}));
    }

    return (<form onSubmit={handleSubmit}>
            <input name="name" type="text" onChange={handleChange} />
            <input name="files" type="file" onChange={handleSelect} />
            <button>Ok</button>
    </form>)
}

export default FileChooserAdv
