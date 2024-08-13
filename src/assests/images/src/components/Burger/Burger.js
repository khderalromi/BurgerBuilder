import React from "react";
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger=(props)=>{
    //const transformedIngredients1=Object.keys(props.ingredients);
   // console.log(transformedIngredients1)
    let transformedIngredients=Object.keys(props.ingredients)
    .map((igKey)=>{
        //console.log([...Array(props.ingredients[igKey])])
        return[...Array(props.ingredients[igKey])].map((_,i)=>{
            //console.log(igKey+i) 
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
        
    }).reduce((arr,el)=>{
        console.log(el)
        return arr.concat(el)
    },[]);
    console.log(transformedIngredients)
    if(transformedIngredients.length === 0){
        transformedIngredients=<p>please start adding ingredients</p>
    }
    return(
        <div className={classes.Burger} >
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}

export default Burger;