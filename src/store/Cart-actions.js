import { cartSliceActions } from "./Cart-slice.js";
import axios from '../axios-order.js'




export const postCart=(cart)=>{
    return async (dispatch)=>{ 
        console.log(cart)
        const fetchData=async ()=>{
           await axios.post('https://e-commerce-1696a-default-rtdb.europe-west1.firebasedatabase.app/cart.json',cart);
            
        }
        try{
            await fetchData();
            
        }catch(error){
            console.log(error)
        }
    }
 }


 
export const updateCart=()=>{
    return async (dispatch)=>{
        const fetchData=async ()=>{
            const response=await axios.get('https://e-commerce-1696a-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            for(let key in response.data){
                 response.data[key]['isCurrent']=false
                 } await axios.put ('https://e-commerce-1696a-default-rtdb.europe-west1.firebasedatabase.app/cart.json',{...response.data});
           
        }
        try{

            await fetchData();
            
        }catch(error){
            console.log(error)
        }
    }
 }



 
export const fetchHistoryCart=(email)=>{
    return async (dispatch)=>{
        const fetchCartData=async ()=>{
           
            return await axios.get('https://e-commerce-1696a-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            
        }
        try{
            const CartsInfo= await fetchCartData();
            Object.values(CartsInfo).filter((cart)=>{
                return cart['email']===email
            })
            //dispatch(cartSliceActions.showCart(CartInfo));
        }catch(error){
            console.log(error)
        }
    }
 }


 
 
export const fetchMyCart=()=>{
    return async (dispatch)=>{
        const fetchCartData=async ()=>{
            const response= await axios.get('https://e-commerce-1696a-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            const data=response.data
            return data
        }
        try{
            let AllCartInfo= await fetchCartData();
            
            let MyCartInfo= Object.values(AllCartInfo).find((cart)=>{
                return cart.isCurrent===true
            })
            dispatch(cartSliceActions.showUserCart(MyCartInfo));
        }catch(error){
            console.log(error)
        }
    }
 }

 