
import mobile from '../../../assests/images/mobile.png';
import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import React,{useEffect} from "react";
import { useForm,SubmitHandler } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"
import { resolve } from "path-browserify";
import { useSelector,useDispatch } from 'react-redux';
import { fetchUsers } from '../../../store/User-actions';
import { postUsers } from '../../../store/User-actions';
import { userSliceActions } from '../../../store/User-slice';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { NavLink,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'


const schema= z.object({
    name: z.string().nonempty("Name is Required").min(3,{message: "name must be more than 3 letter"}),
    email: z.string().nonempty("Email is Required").email(),
    password: z.string().nonempty("Password is Required").min(8,{message: "password must be more than 8 char"})
})


const SignUp=(props)=>{
    const users=useSelector((state=>state.users.users))
    const dispatch=useDispatch();
    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch])


    
    const { register,
        handleSubmit,
        setError,
        formState: {errors, isSubmitting,isDirty}
        } = useForm({resolver: zodResolver(schema),mode:'all'})

    
        const signUpHandler =(data)=>{
            const repeat=users.find((userElement)=>{
                return userElement.user['email']===data['email'] 
            })
            if(repeat){
                dispatch(userSliceActions.signUser(false))
                return toast.error("This Email Already Exists",{autoClose:2000})
            }
            if(!repeat){
                dispatch(userSliceActions.signUser(true))
                dispatch(userSliceActions.currentUser({data}))
                dispatch(postUsers({user:{name:data['name'],email:data['email'],password:data['password']}}));
                Cookies.set('user',JSON.stringify({...data}))
                Cookies.set('isSign',true)
                return(
                    navigate('/')
                )
            }
        }
        
    let form = (
        <form className='flex flex-col space-y-5 sm:space-y-10' 
              onSubmit={handleSubmit((data)=>{ return signUpHandler(data)})} >

            <input 
                className='border-b-2 text-small sm:text-sm lg:text-base focus:outline-none'
                {...register('name',{required:"Name is required"})} 
                type="text" 
                placeholder="Name" >  
             </input>
            {errors.name && 
                    <div className='error'>
                        {errors.name.message}
                    </div>}
          

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


            <button disabled={isSubmitting || !isDirty}
                    className='btn font-bold' 
            >
                {isSubmitting?'Loading...' : 'Create Account'}
            </button>
            <button className='btnWhite font-bold'>
                <FontAwesomeIcon className='text-red-500 mr-2' icon={faGoogle}/>
                Sign up with Google
            </button>
            
            {errors.root && <div className='error'>{errors.root.message}</div>}
        </form>
    )

    return(
        <div>
            <Header/>
            <div className='mt-3 mb-6 sm:mt-6 sm:mb-12 lg:mt-10 lg:mb-20 w-full flex font-Roboto'>
                
                <div className='w-1/2 bg-skyBlue'>
                    <img src={mobile}></img>
                </div>

                <div className='w-1/2 flex justify-evenly items-center'>
                    <div className='w-10/12 md:w-7/12 space-y-1 lg:space-y-5'> 
                        <strong className='text-sm lg:text-2xl' >Create an account</strong>
                        <p className='text-xSmall sm:text-small lg:text-xs'>Enter your details below</p>
                        {form}
                        <div className='flex justify-center text-xSmall sm:text-small lg:text-xs'>
                            Already have account?
                            <NavLink to='/login' className='ml-2 border-b-2'>Log in</NavLink>
                        </div>
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
            <Footer/>
        </div>
    )
}

export default SignUp;