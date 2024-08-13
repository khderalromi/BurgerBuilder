import React from "react";
import classes from './Order.module.css';
import { element } from "prop-types";

const Order=(props)=>{
    const ingredients=[]
   for(let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
   }

    return(
        <div className={classes.Order}>
            <p>INGREDIENTS:  
                {ingredients.map((element)=>{
                    return <p>{element.name} : {element.amount}</p>
                })}
            </p>
            <p>price:<strong>{props.price}</strong></p>
            
        </div>
    )
}
export default Order;