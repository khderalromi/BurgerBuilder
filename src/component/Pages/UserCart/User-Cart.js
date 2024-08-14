import TopHeader from "../HomePage/TopHeader/TopHeader";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import { useEffect, useState } from "react";
import { fetchMyCart } from "../../../store/Cart-actions";
import { postCart } from "../../../store/Cart-actions";
import { updateCart } from "../../../store/Cart-actions";
import { useDispatch,useSelector } from "react-redux";
import { cartSliceActions } from "../../../store/Cart-slice";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faDeleteLeft, faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink,useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserCart=(props)=>{

    const navigate=useNavigate()
    const location=useLocation();
    const dispatch=useDispatch();
    const currentUser=useSelector(state=>state.users.currentUser);
    const myCart=useSelector(state=>state.cart.userCart);
    const cart=useSelector(state=>state.cart.cart);
    //console.log(myCart.cart)
    const Fields=['Product','Price','Quantity','Subtotal','Delete'];
    const totalPrice=[];
    const [SubTotal,setSubTotal]=useState(0)

    useEffect(()=>{
        dispatch(fetchMyCart())
        if(cart.length>0){
             Cookies.set('cart',JSON.stringify(cart));
        }
        
        if(Cookies.get('cart') !== undefined){
            const storedCart=Cookies.get('cart');
            const storedCartobj=JSON.parse(storedCart);
            dispatch(cartSliceActions.addToCartFromCookies([...storedCartobj]))

        }
    },[])

    
    useEffect(()=>{
        totalPrice.map((element)=>{
            console.log(totalPrice)
            console.log(element)
            let total=0;
            element +=element
            setSubTotal(element)
        })
    },[myCart.cart])
    

    const increaseQuantity=async(id)=>{
        return dispatch(cartSliceActions.increseQuantity({id:id}));      
    }


    
    const decreaseQuantity=async(id)=>{
        return dispatch(cartSliceActions.decreseQuantity({id:id}));
                   
    }

    const deleteFromCartHandler=async(id)=>{
        return dispatch(cartSliceActions.deleteFromCart({id:id})); 
                    
    }

    const updateCartHandler=async()=>{
                    if(myCart.cart.length>=0){  
                        await dispatch(updateCart());
                        await dispatch(postCart({
                                                    cart:myCart.cart,
                                                    userEmail:currentUser['email'],
                                                    userName:currentUser['name'],
                                                    isCurrent:true
                                                })
                                        );  
                        Cookies.set('cart',JSON.stringify(myCart.cart)); 
                        toast.success("updated...",{autoClose:2000})
                    } 
                
    }


    return(
        <div>
            <TopHeader/>
            <Header/>
            <div className="mt-8 ml-4 mr-4 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16">
                <div className="flex justify-between text-small sm:text-sm lg:text-base text-slate-600">
                    <p>Home {location.pathname}</p>
                    <p> 
                        welcome <span className="text-red-500">{myCart['userName']}</span> 
                    </p>
                </div>

                <div className=" mt-8 lg:mt-16 flex justify-center gap-6 md:gap-10 shadow-slate-200 shadow-md p-1 md:p-7">
                    {Fields.map((field)=>{
                        return(
                            <strong className="w-1/5 text-small lg:text-base" >{field}</strong>
                        )
                    })}

                </div>
                
                <div >
                    {myCart.cart !== undefined?
                      myCart.cart.map((item)=>{
                        return(
                            <div className=" mt-8 lg:mt-16 flex justify-center gap-6 md:gap-10 shadow-slate-200 shadow-md p-1 md:p-7">
                                {/******User Cart Info ********/}
                                <div className="flex gap-3 w-1/5  "> 
                                    <img className="size-5 sm:size-10" src={item['image']}></img>
                                    <p className="place-content-center text-small md:text-sm lg:text-base">
                                        {item['category']}
                                    </p>
                                </div>

                                <div className="place-content-center w-1/5 text-small md:text-sm lg:text-base">
                                    {item['price']}
                                </div>

                                <div className=" w-1/5 place-content-center "> 
                                    <div className="flex gap-3 items-end border-2 p-1 md:p-2 w-min ">
                                        <p className=" text-small md:text-sm lg:text-base" >{item['Quantity']}</p>
                                        <div className="flex flex-col ">
                                            <FontAwesomeIcon icon={faArrowUp}
                                                             className="place-content-center text-small md:text-sm lg:text-base"
                                                             onClick={()=>{return increaseQuantity(item['id'])}} 
                                            />
                                            
                                            <FontAwesomeIcon icon={faArrowDown} 
                                                             className="place-content-center text-small md:text-sm lg:text-base"
                                                             onClick={()=>{return decreaseQuantity(item['id'])}}   
                                            />
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="w-1/5 place-content-center text-small m:text-sm lg:text-base">
                                    <p>{ item['price']*item['Quantity']}</p>
                                </div>

                                <div className="w-1/5 place-content-center text-small md:text-sm lg:text-base">
                                    <FontAwesomeIcon  icon={faX}
                                                      onClick={()=>{return deleteFromCartHandler(item['id'])}}
                                    />
                                </div>

                            </div>  
                        )
                        }):null
                    }

                </div>

                {/******* Tow Button Return And Update  ******/}
                <div className="mt-6 lg:mt-12 flex justify-between">

                    <NavLink className='btnWhite w-2/6 md:w-1/5' to={'/'}>Return To Shop</NavLink>

                    <button className='btnWhite w-1/3 md:w-1/5'
                            onClick={()=>{return updateCartHandler()}}
                    >
                        Update Cart
                    </button>
                </div>

                {/******* Secound Par Of Page  ******/}
                <div className="mt-8 lg:mt-16 mb-8 lg:mb-16 flex flex-col sm:flex-row gap-4 justify-between">
                    {/******* Left Side (Input And Apply Copon) ******/}
                    <div className="w-full sm:w-1/2 flex justify-between gap-4 size-min">
                        <input className="w-3/5 text-small sm:text-sm border-black border-2" 
                                type="text" placeholder="Coupon Code" >
                        </input>

                        <button className="btn">Apply Coupon</button>
                    </div>

                    {/******* Cart Total  ******/}
                    <div className="">
                        <div className="border-2 border-black space-y-4 p-7" >   
                            <strong>Cart Total</strong>
                            <div className="flex gap-28 justify-between"> 
                                <p>Subtotal</p>
                                {myCart.cart !==undefined &&
                                    myCart.cart.map((item)=>{
                                         totalPrice.push(item['price']*item['Quantity'])
                                    })
                                }
                                <p>{SubTotal}$</p>
           
                            </div>

                            <div className="flex justify-between border-t-2 border-b-2 leading-10">
                                <p>Shipping</p>
                                <p>Free</p>            
                            </div>

                            <div className="flex justify-between">
                                <p>Total:</p>
                                <p>{SubTotal}$</p>             
                            </div>

                            <button className="btn">Procees to checkout</button>

                        </div>
                    </div>
                </div>

                
            <ToastContainer style={{height:'60px',width:'200px',fontSize:'10px'}}
                            position="bottom-center" 
                            draggable 
                            theme="dark" 
                            limit={1}  
                            hideProgressBar={true} 
                            autoClose={2000} 
            />

 
            </div>
            
            
        <Footer/>                       
        </div>   
    )
}

export default UserCart;