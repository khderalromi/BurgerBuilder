import { faStar } from '@fortawesome/free-solid-svg-icons';
import {faEye, faHeart} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector,useDispatch } from 'react-redux';
import { cartSliceActions } from '../../../store/Cart-slice';


const Cart=(props)=>{
    const dispatch=useDispatch()
    const userCart=useSelector((state=>state.cart.cart))
    const checkRegister=useSelector((state=>state.users.isSign))
    const [showButton,setShowButton]=useState(false)


    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);

    const mouseEnterHandler=()=>{
        return (
            setShowButton(true)
        )
    }

    const mouseLeaveHandler=()=>{

        return (
            setShowButton(false)
        )
    }

    const addToCartHandler=(id)=>{ 
        const repeat=userCart.find((product)=>product.id===id)
        if(checkRegister){
                
            if(!repeat){
                dispatch(cartSliceActions.addToCart({...props.product,Quantity:1}))
                //dispatch(postCart({...props.product,user:email}))
                return (
                    toast.success("Added To Cart Successfully",{autoClose:2000})
                )

            }

            if(repeat){
                //dispatch(cartSliceActions.addToCart({...props.product}))
                return(
                    toast.error("This Product Already Added to Cart",{autoClose:2000})
                )
            }
        }
        if(!checkRegister){
            return(
                toast.error("Sign UP First",{autoClose:2000})
            )
        }
        
        }

        

  
    return(
        <div data-aos='fade-right'>
            <div className='relative size-24 max-xsmall:size-44 sm:size-60' onMouseOver={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>

                <div className='absolute  bg-slate-400 bg-opacity-20 z-0 size-24 rounded-xl max-xsmall:size-44 sm:size-60'>
                    <FontAwesomeIcon 
                        className='absolute right-1 bg-white p-1 rounded-full hover:bg-red-500 sm:right-3 sm:top-3 sm:p-2'   
                        icon={faHeart}
                    />

                    <FontAwesomeIcon 
                        className='absolute right-1 top-1/4 p-0.5  bg-white rounded-full  hover:bg-red-500 sm:right-3 sm:top-1/3 sm:p-2' 
                        icon={faEye}
                    />

                </div>
                {showButton &&<div className='absolute bg-slate-400 bg-opacity-50 z-0 size-24  max-xsmall:size-44  rounded-xl sm:size-60'>
                                <button className='btnBlack absolute bottom-0 rounded-xl'
                                        onClick={()=>{return addToCartHandler(props.product.id)}}
                                >
                                    Add To Cart
                                </button>
                            </div> 
                }
                <img className=' size-20 z-2 p-2 xsmall:pt-5 xsmall:pl-5 max-xsmall:size-36 sm:pt-10 sm:pl-10 sm:size-44 ' src={props.img}></img>
                  
            </div>

            <div className='mt-4  size-24 xsmall:size-44 sm:size-70 ' >
                <div className='font-Righteous text-small sm:text-sm '>{props.title}</div>
                <div className=' text-red-600' > {props.price} </div>
                <div className='text-small sm:text-small' >
                    {[1,2,3,4].map((element)=>{
                        return(
                            <span className={props.rating > element ? 'text-yellow-400':'text-gray-600' }>
                                <FontAwesomeIcon icon={faStar}/>
                            </span>
                        )
                    })}
                    <span>({props.ratingCount})</span>
                </div>

                
            </div>
         
        </div>
        
    )
}

export default Cart;