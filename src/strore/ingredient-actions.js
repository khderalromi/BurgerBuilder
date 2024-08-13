import { ingredientSliceActions } from "./ingredients-slice";
import { useDispatch } from "react-redux";
import axios from '../axios-order.js'



export const fetchIngredients=()=>{
    return async (dispatch)=>{
        const fetchData=async ()=>{
            const response=await axios.get('https://burger-77135-default-rtdb.firebaseio.com/ingredients.json');
            if(!response){
                throw new Error("Data can't be reached")
            }
            const data=await response;
            return data;
        }
        try{
            const ingredients= await fetchData();
            dispatch(ingredientSliceActions.showingredient({...ingredients}))
        }catch(error){
            dispatch(ingredientSliceActions.showError)
        }
    }
 }