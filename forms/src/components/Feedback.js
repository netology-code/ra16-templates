import React, { useState } from 'react'

function Feedback() {

    const [form, setForm] = useState({
        name: '',
        score: 'good',
        agreement: false
    })

    const handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    const onSubmit = evt => {
        evt.preventDefault();
        console.dir(evt.target);
        console.log(evt.type);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Ваше имя</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="score">Выберите уровень удовлетворённости</label>
                <select id="score" name="score" value={form.score} onChange={handleChange}>
                    <option value="good">Good</option>
                    <option value="normal">Normal</option>
                    <option value="bad">Bad</option>
                </select>
            </div>
            <div>
                <label htmlFor="agreement">
                    <input id="agreement" name="agreement" type="checkbox" checked={form.agreement} onChange={handleChange} />Согласен с политикий обработки персональных данных
                </label>
            </div>
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Feedback

