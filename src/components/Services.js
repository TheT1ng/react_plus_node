import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import style from '../css/style.css';

export class Services extends React.Component {
    render(){
        return(
            <div className={style.services}>
                <div className={[style.services__service, style.services__service__full].join(' ')}>
                    Ми пропонуємо такі послуги:
                </div>
                <div className={style.services__service}>
                    SPA процедури
                </div>
                <div className={style.services__service}>
                    Манікюр
                </div>
                <div className={style.services__service}>
                    Фарбування вій та брів
                </div>
                <div className={style.services__service}>
                    Фарбування волосся
                </div>
                <div className={style.services__service}>
                    Засмага
                </div>
                <Link to="/sign">
                    <div className={[style.services__service, style.services__service__full].join(' ')}>
                        Записатись
                    </div>
                </Link>
            </div>
        );
    }
}