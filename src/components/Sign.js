import React from "react";
import {Link} from 'react-router-dom';

import {Table} from './Table';

import style from '../css/style.css';

export class Sign extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            day: '',
            time: ''
        };
        this.formSubmit = this.formSubmit.bind(this);
    }
    inputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    formSubmit(event){
        event.preventDefault();
        if(
            this.state.name.length < 3 ||
            this.state.phone.length < 5 ||
            this.state.phone.length > 255
        ) {
            alert('Перевірте правильність форми');
        } else {
            const submitedData = {
                name: this.state.name,
                phone: this.state.phone,
                day: this.state.day,
                time: this.state.time
            };
            let toBody = JSON.stringify(submitedData);
            fetch('http://localhost:8080/addUser',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body : toBody
            }).then((resp) => {
                return resp.json();
            }).catch(() => {
                alert('Failed to write to db');
            });
        }
    }
    render(){
        return(
            <div className={style.sign}>
                <Table />
                <form className={style.sign__form}>
                    <div>
                        <input
                            name="name"
                            className={style.input__text}
                            type="text"
                            minLength="2"
                            required
                            placeholder="Ім'я та Прізвище..."
                            autoComplete="off"
                            value={this.state.name}
                            onChange={e => this.inputChange(e)}
                        />
                        <input
                            name="phone"
                            className={[style.input__text, style.input__number].join(' ')}
                            type="number"
                            required
                            autoComplete="off"
                            placeholder="Номер телефону"
                            value={this.state.phone}
                            onChange={e => this.inputChange(e)}
                        />
                    </div>
                    <select
                        className={[style.input__text, style.input__select].join(' ')}
                        name="day"
                        required
                        onChange={e => this.inputChange(e)}
                    >
                        <option value="" selected disabled hidden>Виберіть день</option>
                        <option value="monday">Понеділок</option>
                        <option value="tuesday">Вівторок</option>
                        <option value="wednesday">Середа</option>
                        <option value="thursday">Четвер</option>
                        <option value="friday">П'ятниця</option>
                    </select>
                    <input
                        className={[style.input__text, style.input__date].join(' ')}
                        type="time"
                        name="time"
                        min="8:00"
                        max="15:00"
                        required
                        value={this.state.date}
                        onChange={e => this.inputChange(e)}
                    />
                    <input
                        type="button"
                        value="Записатись"
                        required
                        className={[style.input__text, style.input__submit].join(' ')}
                        onClick={this.formSubmit}
                    />
                </form>
            </div>
        );
    }
}