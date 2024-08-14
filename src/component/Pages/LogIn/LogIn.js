import mobile from '../../../assests/images/mobile.png';
import React,{useEffect} from "react";
import { useForm,SubmitHandler } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"
import { resolve } from "path-browserify";
import { fetchUsers } from '../../../store/User-actions';
import { useSelector,useDispatch } from 'react-redux';
import { userSliceActions } from '../../../store/User-slice';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie'
 
 
const schema= z.object({
    email: z.string().nonempty("Email is Required").email(),
    password: z.string().nonempty("Password is Required").min(8,{message: "password must be more than 8 char"})
})


const LogIn=(props)=>{
    const dispatch=useDispatch();
    const users=useSelector((state=>state.users.users));
    const navigate=useNavigate()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])


    const { register,
        handleSubmit,
        setError,
        formState: {errors, isSubmitting,isDirty,isValid}
        } = useForm({resolver: zodResolver(schema),mode:'all'})

        
        const logInHandler =(data)=>{
            const repeat=users.find((userElement)=>{
                return userElement.user['email']===data['email'] && 
                userElement.user['password']===data['password']
            })
            if(repeat){
                dispatch(userSliceActions.signUser(true))
                dispatch(userSliceActions.currentUser({...repeat['user']}))
                Cookies.set('user',JSON.stringify({...repeat['user']}))
                Cookies.set('isSign',true)
                navigate('/')
                return toast.success("Registered...",{autoClose:2000})
            }
            if(!repeat){
                dispatch(userSliceActions.signUser(false))
                return toast.error("Uncorrect Info",{autoClose:2000})
                
            }
        }
    
        /*const orderHandler =( async (data)=>{
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
        */

        
    let form = (
        <form className='flex flex-col space-y-5 sm:space-y-10' 
                onSubmit={handleSubmit((data)=>{ return logInHandler(data)})} >

            <input 
                className='border-b-2 text-small sm:text-sm lg:text-base focus:outline-none' 
                {...register('email',{required:"Email is required"})}  
                placeholder="Email or Phone Number" >
            </input>
            {errors.email && 
                    <div className='error'>
                        {errors.email.message}
                    </div>}


            <input 
                className='border-b-2 text-small sm:text-sm lg:text-base focus:outline-none'
                {...register('password')}  
                type="password"  
                placeholder="Password" >
            </input>
            {errors.password && 
                    <div className='error'>
                        {errors.password.message}
                    </div>}

            <div className='flex justify-between'>   
                <button className='btn font-bold w-1/3 rounded-lg' disabled={isSubmitting || !isDirty} >
                    {isSubmitting?'Loading...' : 'Log In'}
                </button>

                <button className='text-red-500 text-xSmall sm:text-small lg:text-sm'>
                    Forget Password?
                </button>
                
            </div>
            {errors.root && <div className='error'>{errors.root.message}</div>}
        </form>
    )

    return(
        <div className='mt-3 mb-6 sm:mt-6 sm:mb-12 lg:mt-10 lg:mb-20 w-full flex font-Roboto'>
            <div className='w-1/2 bg-skyBlue'>
                <img src={mobile}></img>
            </div>

            <div className='w-1/2 flex justify-evenly items-center'>
                <div className='w-10/12 md:w-7/12 space-y-1 lg:space-y-5'> 
                    <strong className='text-sm lg:text-2xl' >Log in to Exclusive</strong>
                    <p className='text-xSmall sm:text-small lg:text-xs'>Enter your details below</p>
                    {form}
                </div>
                
            </div>

            
            <ToastContainer style={{height:'60px',width:'200px',fontSize:'10px'}}
                            position="bottom-center" 
                            draggable 
                            theme="dark" 
                            limit={1}  
                            hideProgressBar={true} 
                            autoClose={3000} 
            />

        </div>
    )
}

export default LogIn;