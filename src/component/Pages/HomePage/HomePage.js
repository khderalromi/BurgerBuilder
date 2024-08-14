import TopHeader from "./TopHeader/TopHeader";
import Header from "./Header/Header";
import Main from "./main/main";
import FlashSales from "./FlashSales/FlashSales";
import Category from "./Category/Gategory";
import BestSelling from "./BestSelling/BestSelling";
import MusicAd from "./MusicAd/MusicAd";
import Products from "./Products/Products";
import Features from "./Features/Features";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import UserCart from "../UserCart/User-Cart";
import { useEffect } from "react";
import { userSliceActions } from "../../../store/User-slice";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../../../store/Cart-slice";
import Cookies from 'js-cookie';

import Cart from "../../UI/Cart/Cart";

const HomePage=(props)=>{

    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart.cart);

    useEffect(()=>{
        if( (Cookies.get('user')) !==undefined){
            dispatch(userSliceActions.currentUser(JSON.parse(Cookies.get('user'))))
            dispatch (userSliceActions.signUser(Cookies.get('isSign')))

            if(Cookies.get('cart') !== undefined){
                const storedCart=Cookies.get('cart');
                const storedCartobj=JSON.parse(storedCart);
                dispatch(cartSliceActions.addToCartFromCookies([...storedCartobj]))

            }
        }
    },[])
        

    return(
        <div>
            <TopHeader/>
            <Header/>
            <Main/>
            <FlashSales/>
            <Category/>
            <BestSelling/>
            <MusicAd/>
            <Products/>
            <Features/>
            <Services/>   
            <Footer/> 
          
        </div>
    )
}

export default HomePage;