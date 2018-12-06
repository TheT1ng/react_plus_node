import React from "react";
import {Link} from 'react-router-dom';

import style from '../css/style.css';

export class Sidebar extends React.Component {
    render(){
        return(
            <div className={style.sidebar}>
                <ul className={style.sidebar__list}>
                    <li className={style.sidebar__list__item}><Link to="/">Домашня сторінка</Link></li>
                    <li className={style.sidebar__list__item}><Link to="/admin">temp admin</Link></li>
                    <li className={style.sidebar__list__item}><Link to="/services">Послуги</Link></li>
                </ul>
            </div>
        );
    }
}