import { createSlice } from "@reduxjs/toolkit";

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}


const initialState={
    ingredients:{},
    totalPrice:4
};

const ingredientSlice=createSlice({
    name:'ingredients',
    initialState,
    reducers:{
        showingredient(state,actions){
            state.ingredients=actions.payload['data']
            console.log(state.ingredients)
        },
        addIngredient(state,actions){
            state.ingredients[actions.payload['ingredientName']]=
            state.ingredients[actions.payload['ingredientName']] +1;

            state.totalPrice=
                state.totalPrice + INGREDIENT_PRICES[actions.payload['ingredientName']]


        },
        removeIngredient(state,actions){
            state.ingredients[actions.payload['ingredientName']]=
                state.ingredients[actions.payload['ingredientName']] - 1;

            state.totalPrice=
                state.totalPrice - INGREDIENT_PRICES[actions.payload['ingredientName']]
    
        }
    }

    })


export default ingredientSlice;
export const ingredientSliceActions= ingredientSlice.actions