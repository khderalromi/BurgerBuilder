import { createSlice } from "@reduxjs/toolkit";



const initialState={
    users:[],
    isSign:false,
    currentUser:{}
    
};

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        showUsers(state,actions){
            for(let key in actions.payload){
                state.users.push({...actions.payload[key]})
            }

        
        },
        signUser(state,actions){
            state.isSign=actions.payload;
        },
        currentUser(state,actions){
            state.currentUser=actions.payload
        }
        
    }

    })


export default userSlice;
export const userSliceActions= userSlice.actions