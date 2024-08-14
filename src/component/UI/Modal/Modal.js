import React, { Component } from "react";
import classes from './Modal.module.css'
import Aux from '../../../hoc/wrap'
import Backdrop from "../../../UI/Cart/Backdrop/Backdrop";


class Modal extends Component{

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render(){

         return(
        
        <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            <div className={classes.Modal}
            style={{
                visibility: this.props.show ? 'visible' : 'hidden'
            }}>
                {this.props.children}
            </div> 
        </Aux>    
    )
    }
    
}
   


export default Modal