import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary=(props)=>{
    return(
        <div>     
            <h1>We Hope It Taste Well</h1>
            <Burger ingredients={props.ingredients}  />
            <Button btnType="Success" clicked={props.checkoutContiued} >
                 Countinue </Button>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>
                 Cancel</Button>
        </div>
    )
}

export default CheckoutSummary;