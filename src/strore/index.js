import { configureStore } from "@reduxjs/toolkit";
import ingredientSlice from "./ingredients-slice";

const store=configureStore({
    reducer:{
        ingredient:ingredientSlice.reducer
    }
});


export default store;