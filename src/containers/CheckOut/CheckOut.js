import React,{ useEffect, useState } from "react";
import { useNavigate,Navigate,useLocation,useMatch, Routes,Route } from "react-router";
import CheckoutSummary from "../../components/Order/checkoutSummary/checkoutSummary";
import ContactData from "./ContactData/ContactData";
import { UseSelector, useSelector } from "react-redux";

const Checkout =(props)=>{  
    //let [ingredients,setIngredients]= useState({});
    //let [price,setPrice]= useState(0);
    const navigate=useNavigate();
    const location=useLocation();
    //const match=useMatch()

    const ingredients=useSelector((state)=>state.ingredient.ingredients);
    const totalPrice=useSelector((state)=>state.ingredient.totalPrice);


/************** 
    useEffect(()=>{
        
        const query=new URLSearchParams(location.search);
        
       console.log(query)
        let ingredients={}
        let price=0;
        for(let params of query.entries()){
            if(params[0]==='price'){
               // this.setState({price:params[1]})
               price=params[1]
            }
            else{
                ingredients[params[0]] = +params[1]
            }
            console.log(params[0])
        }
        
        setIngredients(ingredients)
        setPrice(price)
    },[])
***************/

    const checkoutContiuedHandler=()=>{
       navigate({pathname:"contactdata"})
    }

    
    const checkoutCancelledHandler=()=>{
        navigate(-1)
    }


        return(
            <div>    
                <CheckoutSummary 
                checkoutContiued={checkoutContiuedHandler}
                checkoutCancelled={checkoutCancelledHandler}
                ingredients={ingredients} />

                <Routes>
                    <Route path={`contactdata`}
                    //element={<ContactData ingredients={ingredients}
                    //                        price={totalPrice} />}

                    element={<ContactData/>}
                    
                    />
                </Routes>
        
            </div>
        )

            
}
        
     


export default Checkout;