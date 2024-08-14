import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { NavLink,useNavigate } from "react-router-dom";
import Backdrop from "../../../../UI/Backdrop/Backdrop";
import { updateCart } from "../../../../../store/Cart-actions";
import { postCart } from "../../../../../store/Cart-actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faHeart,faUser} from '@fortawesome/free-regular-svg-icons';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  SideDrawer=(props)=>{
    const MainPages=["Home" , "Contact" , "About" , "Sign Up"];
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart.cart)
    const currentUser=useSelector(state=>state.users.currentUser);
    
    const postCartHandler=async(cart)=>{
        if(cart.length>0 ){  
             await dispatch(updateCart());
             await dispatch(postCart({
                                         cart:cart,
                                         userEmail:currentUser['email'],
                                         userName:currentUser['name'],
                                         isCurrent:true
                                     })
                            ); 
            return navigate('/cart')
        }
        return(
         toast.error("Your Cart Is Empty",{autoClose:2000})
        )
    }

    return(
        <div className=" ">
            
            <Backdrop show={props.open} clicked={props.closed} />

            <div  className= {props.open?
                "inline-block fixed w-2/3 max-w-40 h-full left-0 top-5 z-20 bg-white pt-8 pb-8 pl-4 pr-4 box-border transition transform ease-in-out delay-0.3 md:hidden translate-x-0 " 

                : 'hidden'}>
                <div className='flex flex-row '>
                    <strong className="ml-1 text-sm " >Exclusive</strong>
                </div>

                <div className="flex flex-col md:flex " >
                    {MainPages.map((page)=>{
                        return (<NavLink to={`/${page}`} 
                                    className=" mb-0 hover:border-b-4 hover:border-slate-300"  href="...">{page}</NavLink>)
                    })
                    }
                </div>

                <div className="flex flex-row justify-between ">
                    
                    <div className="text-2xl" >
                    <FontAwesomeIcon  className='text-gray-600' icon={faHeart} />
                    </div>
                    
                    <div className="text-xl pt-1 relative">
                        <button onClick={()=>{return postCartHandler(cart)}} >
                            {cart.length>0&&
                                <div className='absolute w-8/12 h-1/2 lg:h-1/3 right-0  text-xs -top-1 font-bold  bg-red-500 rounded-full '>
                                    {cart.length}
                                </div> 
                            }
                        
                            <FontAwesomeIcon className='text-gray-600'  icon={faCartShopping} /> 
                        </button>
                        
                    </div>


                    <div className="text-xl pt-1">
                    <FontAwesomeIcon className='text-gray-600'  icon={faUser} /> 
                    </div>
                    
                    
                </div>

           
        </div>


        </div>    
               
    )
}

export default SideDrawer;