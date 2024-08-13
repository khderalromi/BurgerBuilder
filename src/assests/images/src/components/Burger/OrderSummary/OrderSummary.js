import React from "react"
import Aux from '../../../hoc/wrap'
import Button from '../../UI/Button/Button'


const orderSummary=(props)=>{
    const ingredientSuyummary=Object.keys(props.ingredients)
    .map( igkey=>{
        return (
            <li key={igkey} >
                <span>{igkey} : {props.ingredients[igkey]}</span>
            </li> )
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the fowlloing ingredients</p>
            <ul>
                {ingredientSuyummary}
            </ul>

            <b>Total Price : {props.price.toFixed(2)} $</b>
            <p>Coutinue to checkout?</p>

            <Button clicked={props.clickedCancel} btnType='Danger' >CANCEL</Button>
            <Button clicked={props.clickedContinue} btnType='Success' >CONTINUE</Button>

        </Aux>
    )

}


export default orderSummary;