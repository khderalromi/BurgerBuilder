import React from 'react';
import classes from './NavigationItems.module.css';
import Navigationitem from './NavigationItem/NavigationItem';



const navigationitems= (props)=>{
    return (

        <ul className={classes.NavigationItems}>
            <Navigationitem exact link='/'>Burger Builder</Navigationitem>
            <Navigationitem link='/orders'>Orders</Navigationitem>
        </ul>
        
    )
};

export default navigationitems;