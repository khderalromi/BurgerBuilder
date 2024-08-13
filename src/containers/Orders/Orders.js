import React,{useState,useEffect} from "react";
import axios from "../../axios-order";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Order from "../../components/Order/Order";


const Orders=(props)=>{
    const [orders,setorders]=useState([]);
    const [loading,setloading]=useState((true));
    useEffect(()=>{
        axios.get('https://burger-77135-default-rtdb.firebaseio.com/orders.json')
        .then((response)=>{
            const fetchorders=[]
            console.log(response.data)
            for(let key in response.data){
                fetchorders.push({...response.data[key]})
            }
            setloading(false);
            setorders(fetchorders)
        }).catch((error)=>{
            setloading(false)
        })
    },[])

    return(
        <div >
            {orders.map((order)=>{
                 return <Order ingredients={order['ingredients']} price={order['price']}  />
                   
                })
                }
               
                
                
            
        </div>
    )
}

export default withErrorHandler(Orders,axios)