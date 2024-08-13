import React, {Component} from "react";
import Aux from '../../hoc/wrap'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component{
    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = ()=>{
        return(
            this.setState({showSideDrawer:false})
    )}


    menuHandler = (prevState)=>{
        
        return(
            this.setState({showSideDrawer: !prevState.showSideDrawer})
    )}

    
    

    render() {
        return(
            <Aux>
                <Toolbar menu={this.menuHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} 
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </Aux>

        )
    }
}


export default Layout;