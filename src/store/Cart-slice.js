
import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

const initialState={
    cart:[],
    userCart:{}
    
};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,actions){
             state.cart.push(actions.payload)
        },

        addToCartFromCookies(state,actions){
            state.cart=(actions.payload)
       },

        showUserCart(state,actions){
            state.userCart=actions.payload
        },

        increseQuantity(state,actions){
            const product= state.userCart.cart.find((product)=>{
                return (product['id']===actions.payload['id'])
            })

            if(product){
                product['Quantity']=product['Quantity']+1;
                //Cookies.set('cart' ,JSON.stringify(state.userCart.cart));
            }
        },

        decreseQuantity(state,actions){
            const product= state.userCart.cart.find((product)=>{            
                return (product['id']===actions.payload['id'])
            })

            if(product){    
                 
                product['Quantity']=product['Quantity']-1
                //Cookies.set('cart' ,JSON.stringify(state.userCart.cart));
            }
        },

        deleteFromCart(state,actions){
            
            const newCart= state.userCart.cart.filter((product)=>{            
                return (product['id']!==actions.payload['id'])
            })
    
            state.cart=newCart
            state.userCart['cart']=newCart;
            //Cookies.set('cart',JSON.stringify(newCart))
        }
        
    }

    })


export default cartSlice;
export const cartSliceActions= cartSlice.actions