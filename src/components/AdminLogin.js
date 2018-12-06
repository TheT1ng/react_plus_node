import React from "react";
import {Link} from 'react-router-dom';

import style from '../css/style.css';

export class AdminLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            mail: '',
            pass: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        let isLogged = window.sessionStorage.getItem('isLogged') == 'true';
        console.log(isLogged);
        if(isLogged) {
            alert('You were already logged in this session');
            window.location.href = '/panel';
        } else {
            window.sessionStorage.setItem('tries', '0');
        }
    }

    componentDidMount() {

    }

    handleChange(e) {
        let field = e.target.name;
        this.setState({
             [field]: e.target.value
        });
    }

    handleSubmit() {
        const data = new FormData();

        fetch('http://localhost:8080/adminData',{
            method: 'POST',
            body : data
        }).then((response) => {
            return response.json();
        }).then(
            success => {
                if(this.state.mail === success[0].mail && this.state.pass === success[0].pass) {
                    window.sessionStorage.clear();
                    this.setState({
                        mail: '',
                        pass: ''
                    });
                    window.sessionStorage.setItem('isLogged', true);
                    window.location.href = '/panel';
                } else {
                    window.sessionStorage.setItem('tries', (parseInt(window.sessionStorage.getItem('tries')) + 1));
                    this.setState({
                        mail: '',
                        pass: ''
                    });
                    if(parseInt(parseInt(window.sessionStorage.getItem('tries'))) == 3) {
                        alert('You\'ve exceeded number or tries. Try again later');
                        window.location.href = '/'
                    } else {
                        alert('You\'ve entered wrong credentials');
                    }
                }
            }
        ).catch(() => {
            alert('You have no access to admin panel. Get out!');
            window.location.href = '/'
        });
    }

    render(){
        return(
            <div className={style.admin}>
                <span className={[style.admin__sign, style.sign__top].join(' ')}>admin panel</span>
                <form className={style.admin__form}>
                    <input className={style.form__inputs} name="mail" type="email" required autoComplete="off" onChange={this.handleChange} placeholder="Corporate Mail"/>
                    <input className={style.form__inputs} name="pass" type="password" required autoComplete="off" onChange={this.handleChange} placeholder="Password"/>
                    <input className={style.form__inputs} type="button" value="Submit" onClick={this.handleSubmit}/>
                </form>
                <span className={[style.admin__sign, style.sign__bottom].join(' ')}>no access</span>
            </div>
        );
    }
}