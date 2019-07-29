import React, { Component } from 'react'

export class FeedbackClassBased extends Component {

    state = {
        name: '',
        score: 'good',
        agreement: false
    };

    handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.target);
    }

    handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
        this.setState({[name]: value});
    }

    render() {
        const form = this.state;
        return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name">Ваше имя</label>
                <input id="name" name="name" value={form.name} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="score">Выберите уровень удовлетворённости</label>
                <select id="score" name="score" value={form.score} onChange={this.handleChange}>
                    <option value="good">Good</option>
                    <option value="normal">Normal</option>
                    <option value="bad">Bad</option>
                </select>
            </div>
            <div>
                <label htmlFor="agreement">
                    <input id="agreement" name="agreement" type="checkbox" checked={form.agreement} onChange={this.handleChange} />Согласен с политикий обработки персональных данных
                </label>
            </div>
            <button type="submit">Отправить</button>
        </form>
        );
    }
}

export default FeedbackClassBased