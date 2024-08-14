import axios from '../axios-order.js';
import {userSliceActions} from './User-slice.js';



export const postUsers=(user)=>{
    return async (dispatch)=>{
        const fetchUser=async ()=>{
             await axios.post('https://e-commerce-1696a-default-rtdb.europe-west1.firebasedatabase.app/user.json',user);
            
        }
        try{
            return await fetchUser();
            
        }catch(error){
            console.log(error);
        }
    }
}



export const fetchUsers=()=>{
    return async (dispatch)=>{
        const fetchData=async ()=>{
            const response=await axios.get('https://e-commerce-1696a-default-rtdb.europe-west1.firebasedatabase.app/user.json');
            if(!response){
                throw new Error("Data can't be reached")
            }
            const data=await response.data; 
            return data;
        }
        try{
            const users= await fetchData();
            dispatch(userSliceActions.showUsers(users))
        }catch(error){
        }
    }
}