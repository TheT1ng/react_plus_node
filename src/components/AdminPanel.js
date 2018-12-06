import React from "react";
import {Link} from 'react-router-dom';
import {Table} from './Table'

import {AdminCustomer} from './AdminCustomer';

import style from '../css/style.css';

export class AdminPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            compsArray: []
        };
    }

    componentWillMount() {
        if(!sessionStorage.getItem('isLogged')) {
            window.location.href = '/';
        }
        const data = new FormData();
        fetch('http://localhost:8080/userRequests',{
            method: 'POST',
            body : data
        }).then((response) => {
            return response.json();
        }).then(success => {
            if(success[0] == undefined) {
                alert('You\'ve got no entries to manage');
                window.location.href('/');
            } else {
                let compsArray = [];
                success.map(function(current) {
                    compsArray.push(<AdminCustomer id={current.ID} name={current.fullName} phone={current.phoneNumber} date={current.day.toString() + ' ' + current.time.toString()} service={current.service}/>)
                });
                this.setState({
                    compsArray: compsArray
                })
            }
        }).catch(error => {throw error})
    }

    render(){
        return(
            <div className={style.adminPanel}>
                <Table/>
                <div className={style.adminInfo}>
                    {this.state.compsArray}
                </div>
            </div>
        );
    }
}