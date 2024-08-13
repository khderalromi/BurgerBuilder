import React, { Component } from "react";
import Modal from '../../components/UI/Modal/Modal'
import Aux from "../wrap";




const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            Error:null
        }
        UNSAFE_componentWillMount(){
            this.reqInterseptor = axios.interceptors.request.use( (req)=>{
                this.setState({Error:null});
                return req;
            })

            
            this.resInterseptor = axios.interceptors.response.use( (res)=> {return res},
                error=>{
                    return this.setState({Error:error})
                }
            )
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterseptor);
            
            axios.interceptors.response.eject(this.resInterseptor)
        }

        errorConfirmedHandler=()=>{
            this.setState({Error:false})
        }

        render(){
            return(
                
                <Aux>
                    <Modal 
                        show={this.state.Error}
                        modalClosed={this.errorConfirmedHandler}>
                         {this.state.Error ? this.state.Error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }

    }
}
    

export default withErrorHandler;