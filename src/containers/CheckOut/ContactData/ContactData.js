import React,{useState} from "react";
import axios from "../../../axios-order";
import { useNavigate } from "react-router";
import Button from '../../../components/UI/Button/Button';
import Spinner from "../../../components/UI/spinner/spinner";
import classes from './ContactData.module.css'
import { useForm,SubmitHandler } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"
import { resolve } from "path-browserify";
import { useSelector } from "react-redux";

 

const schema= z.object({
    name: z.string().nonempty("Name is Required").min(3,{message: "name must be more than 3 letter"}),
    email: z.string().nonempty("Email is Required").email(),
    street: z.string().nonempty("Street is Required")
})

const ContactData=(props)=>{
    const ingredients=useSelector((state)=>state.ingredient.ingredients);
    const totalPrice=useSelector((state)=>state.ingredient.totalPrice);

    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[address,setaddress]=useState({
        'street':'',
        'postalCode': ''
    });
    const[loading,setloading]=useState(false);

    const navigate=useNavigate()

    const { register,
            handleSubmit,
            setError,
            formState: {errors, isSubmitting,isDirty,isValid}
            } = useForm({resolver: zodResolver(schema),mode:'all'})

    const orderHandler =( async (data)=>{
        try{
            await new Promise((resolve, reject) => {
                setloading(true)
                const data={
                    //ingredients :props.ingredients,
                    //price: props.price
                    ingredients :ingredients,
                    price: totalPrice
                } 
           
               resolve(axios.post("https://burger-77135-default-rtdb.firebaseio.com/orders.json",data))
                
            }).then(()=>{  
                                 setloading(false)
                                if(isValid) {navigate({pathname:'/orders'},{replace:true})}   
                    
            }).catch((Error)=>{setError("root",{ message: "can't register your order"  })})
            
            
            
        }catch(error){setError("root",{ message: "Error"  })}
   
       
    })


    let form = (
        <form onSubmit={handleSubmit(orderHandler)} >

            <input 
                className={classes.InputElement}
                {...register('name',{required:"Name is required"})} 
                type="text" 
                placeholder="Your Name" >  
             </input>
            {errors.name && 
                    <div className={classes.error}>
                        {errors.name.message}
                    </div>}
          

            <input 
                className={classes.InputElement} 
                {...register('email',{required:"Email is required"})}  
                placeholder="Your Email" >
            </input>
            {errors.email && 
                    <div className={classes.error}>
                        {errors.email.message}
                    </div>}


            <input 
                className={classes.InputElement} 
                {...register('street')}  
                type="text"  
                placeholder="Your Street" >
            </input>
            {errors.street && 
                    <div className={classes.error}>
                        {errors.street.message}
                    </div>}


            <input 
                className={classes.InputElement} 
                {...register('postalcode',{required:"PostalCode is required"})}  
                type="text"  
                placeholder="Your Postal Code" >
            </input>
            {errors.postalcode && 
                    <div className={classes.error} >
                        {errors.postalcode.message}
                    </div>}


            <Button disabled={isSubmitting || !isDirty } btnType='Success' clicked={orderHandler}>
                    {isSubmitting ? "Loading..." : 'ORDER'}</Button>

            {errors.root && <div>{errors.root.message}</div>}
        </form>
    )
    /*if(loading){
        form=<Spinner/>
    } */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    return(

        <div className={classes.ContactData} >
            <h4>Enter your Contact Data</h4>
            {form}
        </div>

    )
}

export default ContactData;