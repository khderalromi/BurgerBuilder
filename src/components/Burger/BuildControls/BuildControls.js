import React from "react";
import classes from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad' , type: 'salad'},
    {label: 'Bacon' , type: 'bacon'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Meat' , type: 'meat'}
]

const buildControls = (props)=>{
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.currentPrice.toFixed(2)}$</strong> </p>
            {controls.map(
                (ctrl)=>{

                    return <BuildControl 
                                key={ctrl.label} 
                                label={ctrl.label} 
                                added={() => props.ingredientAdded(ctrl.type)}
                                removed={()=>{props.ingredientRemoved(ctrl.type)}}
                                disabled={props.disabled(ctrl.type)}
                                />
            })}

            <button className={classes.OrderButton}
                    disabled={!props.purechasable}
                    onClick={props.ordered}
                   
                    >ORDER NOW</button>

        </div>

    )
    
    //return controls.map((el)=>{return <BuildControl label={el.label} />})
    
    
}

export default buildControls