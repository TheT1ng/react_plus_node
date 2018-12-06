import React from "react";
import {Link} from 'react-router-dom';
import {Table} from './Table'

import style from '../css/style.css';

export class AdminCustomer extends React.Component {
    handleRemoveClick(e) {
        e.preventDefault();
        let idJson = {
            "ID": this.props.id.toString()
        };
        idJson = JSON.stringify(idJson);
        fetch('http://localhost:8080/removeClient',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body : idJson
        }).then((resp) => {
            return resp.json();
        });
    }

    render(){
        return(
            <div className={style.adminInfo__customer}>
                <div className={style.customer__name}>{this.props.name}</div>
                <div className={style.customer__phone}>{this.props.phone}</div>
                <div className={style.customer__date}>{this.props.date}</div>
                <button className={style.customer__drop} onClick={this.handleRemoveClick.bind(this)}>Виписати</button>
            </div>
        );
    }
}