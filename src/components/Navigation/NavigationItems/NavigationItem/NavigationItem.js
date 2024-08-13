import React from "react";
import classes from './NavigatinItem.module.css';
import { NavLink } from "react-router-dom";

const navigationitem = (props)=>{
    return(
        <li className={classes.NavigationItem}>
            <NavLink
                to= {props.link}
                className={(navdata)=>{navdata.isActive ? classes.active: ''}}
            >
                {props.children}
            </NavLink>
        </li>
        

    )};

export default navigationitem;