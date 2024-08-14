import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Products-slice";
import cartSlice from "./Cart-slice";
import userSlice from "./User-slice";


const store=configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer,
        users:userSlice.reducer
    }
});


export default store;