import { productSliceActions } from "./Products-slice.js";
import axios from '../axios-order.js'



export const fetchProducts=()=>{
    return async (dispatch)=>{
        const fetchData=async ()=>{
            const response=await axios.get('https://fakestoreapi.com/products');
            if(!response){
                throw new Error("Data can't be reached")
            }
            const data=await response.data; 
            console.log(response.data)
            return data;
        }
        try{
            const Products= await fetchData();
           
            
            dispatch(productSliceActions.showProduct(Products))
        }catch(error){
            dispatch(productSliceActions.showError)
        }
    }
 }