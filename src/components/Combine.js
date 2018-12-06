import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import style from '../css/style.css';

import {Sidebar} from "./Sidebar";

export const Combine = (props) => {
    return(
        <div className={style.app}>
            <Sidebar/>
            {props.children}
        </div>
    );
};
