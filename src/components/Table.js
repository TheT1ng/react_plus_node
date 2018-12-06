import React from "react";
import {Link} from 'react-router-dom';

import style from '../css/style.css';

export class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            clientRequests: [],
            numberOfRequests: 0,
            m: ['free','free','free','free','free','free','free','free'],
            t: ['free','free','free','free','free','free','free','free'],
            w: ['free','free','free','free','free','free','free','free'],
            h: ['free','free','free','free','free','free','free','free'],
            f: ['free','free','free','free','free','free','free','free']
        }
    }

    componentDidMount() {
        const data = new FormData();

        fetch('http://localhost:8080/userRequests',{
            method: 'POST',
            body : data
        }).then((response) => {
                return response.json();
            }).then(
            success => {
                let length = success.length;
                this.setState({
                    clientRequests: success,
                    numberOfRequests: length
                });
                this.isFree('m');
                this.isFree('t');
                this.isFree('w');
                this.isFree('h');
                this.isFree('f');
            }
        ).catch(error => {throw error})
    }
    
    isFree(stateField) {
        var index;
        var arrToReplace = ['free','free','free','free','free','free','free','free'];
        this.state.clientRequests.map(function(currentClient) {
            if(currentClient.day.toLowerCase().charAt(0) == stateField) {
                index = currentClient.time.split(':')[0] - 8;
                arrToReplace[index] = 'busy';
            }
        });
        this.setState({
            [stateField]: arrToReplace
        });
    }

    render(){
        return(
            <div >
                <div className={style.table__captions}>
                    <span className={style.captions__item}>monday</span>
                    <span className={style.captions__item}>tuesday</span>
                    <span className={style.captions__item}>wednesday</span>
                    <span className={style.captions__item}>thursday</span>
                    <span className={style.captions__item}>friday</span>
                    <span className={style.captions__item}>saturday</span>
                    <span className={style.captions__item}>sunday</span>
                </div>
                <table className={style.table}>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <span>8:00</span>
                                    {this.state.m[0]}
                                </div>
                                <div>
                                    <span>9:00</span>
                                    {this.state.m[1]}
                                </div>
                                <div>
                                    <span>10:00</span>
                                    {this.state.m[2]}
                                </div>
                                <div>
                                    <span>11:00</span>
                                    {this.state.m[3]}
                                </div>
                                <div>
                                    <span>12:00</span>
                                    {this.state.m[4]}
                                </div>
                                <div>
                                    <span>13:00</span>
                                    {this.state.m[5]}
                                </div>
                                <div>
                                    <span>14:00</span>
                                    {this.state.m[6]}
                                </div>
                                <div>
                                    <span>15:00</span>
                                    {this.state.m[7]}
                                </div>
                            </td>
                            <td>
                                <div>
                                    <span>8:00</span>
                                    {this.state.t[0]}
                                </div>
                                <div>
                                    <span>9:00</span>
                                    {this.state.t[1]}
                                </div>
                                <div>
                                    <span>10:00</span>
                                    {this.state.t[2]}
                                </div>
                                <div>
                                    <span>11:00</span>
                                    {this.state.t[3]}
                                </div>
                                <div>
                                    <span>12:00</span>
                                    {this.state.t[4]}
                                </div>
                                <div>
                                    <span>13:00</span>
                                    {this.state.t[5]}
                                </div>
                                <div>
                                    <span>14:00</span>
                                    {this.state.t[6]}
                                </div>
                                <div>
                                    <span>15:00</span>
                                    {this.state.t[7]}
                                </div>
                            </td>
                            <td>
                                <div>
                                    <span>8:00</span>
                                    {this.state.w[0]}
                                </div>
                                <div>
                                    <span>9:00</span>
                                    {this.state.w[1]}
                                </div>
                                <div>
                                    <span>10:00</span>
                                    {this.state.w[2]}
                                </div>
                                <div>
                                    <span>11:00</span>
                                    {this.state.w[3]}
                                </div>
                                <div>
                                    <span>12:00</span>
                                    {this.state.w[4]}
                                </div>
                                <div>
                                    <span>13:00</span>
                                    {this.state.w[5]}
                                </div>
                                <div>
                                    <span>14:00</span>
                                    {this.state.w[6]}
                                </div>
                                <div>
                                    <span>15:00</span>
                                    {this.state.w[7]}
                                </div>
                            </td>
                            <td>
                                <div>
                                    <span>8:00</span>
                                    {this.state.h[0]}
                                </div>
                                <div>
                                    <span>9:00</span>
                                    {this.state.h[1]}
                                </div>
                                <div>
                                    <span>10:00</span>
                                    {this.state.h[2]}
                                </div>
                                <div>
                                    <span>11:00</span>
                                    {this.state.h[3]}
                                </div>
                                <div>
                                    <span>12:00</span>
                                    {this.state.h[4]}
                                </div>
                                <div>
                                    <span>13:00</span>
                                    {this.state.h[5]}
                                </div>
                                <div>
                                    <span>14:00</span>
                                    {this.state.h[6]}
                                </div>
                                <div>
                                    <span>15:00</span>
                                    {this.state.h[7]}
                                </div>
                            </td>
                            <td>
                                <div>
                                    <span>8:00</span>
                                    {this.state.f[0]}
                                </div>
                                <div>
                                    <span>9:00</span>
                                    {this.state.f[1]}
                                </div>
                                <div>
                                    <span>10:00</span>
                                    {this.state.f[2]}
                                </div>
                                <div>
                                    <span>11:00</span>
                                    {this.state.f[3]}
                                </div>
                                <div>
                                    <span>12:00</span>
                                    {this.state.f[4]}
                                </div>
                                <div>
                                    <span>13:00</span>
                                    {this.state.f[5]}
                                </div>
                                <div>
                                    <span>14:00</span>
                                    {this.state.f[6]}
                                </div>
                                <div>
                                    <span>15:00</span>
                                    {this.state.f[7]}
                                </div>
                            </td>
                            <td className={style.table__holiday}><span>Вихідний</span></td>
                            <td className={style.table__holiday}><span>Вихідний</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}