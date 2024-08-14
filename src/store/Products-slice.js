import { createSlice } from "@reduxjs/toolkit";



const initialState={
    products:[],
    productsFilterCategory:[]
    
};

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        showProduct(state,actions){
            state.products=actions.payload
            console.log(actions.payload)
        
        },

        gategorySearch(state,actions){
            state.productsFilterCategory=state.products.filter((product)=>{
                return product['category']===actions.payload.searchCategory
            })
            
        }
        
    }

    })


export default productSlice;
export const productSliceActions= productSlice.actions