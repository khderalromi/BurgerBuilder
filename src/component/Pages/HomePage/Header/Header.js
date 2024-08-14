import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faHeart,faUser} from '@fortawesome/free-regular-svg-icons'
import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCart } from '../../../../store/Cart-actions';
import { updateCart } from '../../../../store/Cart-actions';
import { NavLink, replace } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import { cartSliceActions } from '../../../../store/Cart-slice';


const MainPages=["Home" , "Contact" , "About" , "Sign Up"]

const Header=(props)=>{
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.cart.cart);
    console.log(cart)
    const currentUser=useSelector(state=>state.users.currentUser);
    const navigate=useNavigate();
    const [showSideDrawer,setShowSideDrawer]=useState(false);

    const sideDrawerClosedHandler = ()=>{
        return(
            setShowSideDrawer(false)
    )}

    



    const menuHandler = ()=>{
        return(
            setShowSideDrawer(!showSideDrawer)
    )}

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
                            console.log(cart)

            return navigate('/cart')
       }
       return(
        toast.error("Your Cart Is Empty",{autoClose:2000})
    )

    }


    return(
        <div>
            <div className='ml-2 mt-2 flex flex-col gap-2 '>
               <DrawerToggle clicked={menuHandler}/> 
                <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            </div>
            <div className="hidden md:grid grid-cols-3 border-b-2 pt-10 ">   
                <strong className=" ml-24 text-2xl" >Exclusive</strong>
                <div className="flex justify-start flex-row md:gap-6  " >
                    {MainPages.map((page)=>{
                        return (<NavLink 
                                    className={(navData)=>{
                                       return navData.isActive?'mb-0 border-b-4 border-slate-300':" mb-0 hover:border-b-4 hover:border-slate-300" 
                                    }}
                                    to={`/${page}`}

                                >
                                    {page}
                                </NavLink>)
                    })
                    }
                </div>

                <div className=" flex gap-4 mr-24 md:justify-end lg:justify-start ">
                    <div className="md:hidden lg:inline-block bg-slate-300 p-2 mb-1 rounded-lg ">
                        <input  className=" bg-slate-300 pl-1 pr-1 focus: outline-none " type="text" placeholder="What are you looking for?"/>
                        <button><FontAwesomeIcon  className='hidden text-gray-600 xl:inline-block'icon={faMagnifyingGlass} /></button>
                    </div>
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
export default Header;