import React from "react";
import classes from './Modal.css'
import Aux from '../../../hoc/wrap'
import Backdrop from "../Backdrop/Backdrop";
const modal= (props)=>{
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className={classes.Modal}
            style={{
                visibility: props.show ? 'visible' : 'hidden'
            }}>
                {props.children}
            </div> 
        </Aux>    
    )
}

export default modal