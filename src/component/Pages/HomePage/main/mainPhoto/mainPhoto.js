import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import iphone from '../../../../../assests/images/iphone.png'
import { useState } from 'react';



const MainPhoto=(props)=>{
    const [Index,setIndex]=useState(1)
    const clickedHandler=(Index)=>{
        return(
            setIndex(Index)
        )
    }

    return(
        <div className="mt-3 ml-3 md:mt-6 md:ml-8 text-white bg-black grid grid-cols-2 items-center " >
            <div className="ml-2 space-y-0 sm:space-y-2 sm:ml-4 md:ml-10 lg:ml-14 lg:space-y-4">
                <div className="flex justify-start items-center gap-1 md:gap-5" >
                    <FontAwesomeIcon className="text-xl  md:text-4xl lg:text-6xl" icon={faApple}/>
                    <p className="text-xSmall md:text-sm">iPhone 14 Series</p>
                </div>


                <div>
                    <strong className="text-small sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl md:leading-tight" >
                        Up to 10% <br></br> off Voucher
                    </strong>
                </div>


                <div className="w-1/2">
                    <button className="underline text-xSmall md:text-small">
                        Shop Now <FontAwesomeIcon icon={faArrowRight}/> 
                    </button>
                </div>
            </div>
            <img className='mt-2 md:mt-6' src={iphone}></img>

            <div className='hidden  sm:flex col-span-2 justify-center gap-4 mb-4 '>  
                {[1,2,3,4].map((index)=>{return(
                                        <div onClick={()=>{ return(clickedHandler(index)) }}
                                        className={index===Index ? ' w-4 h-4 rounded-full bg-red-700' : ' w-4 h-4 rounded-full bg-slate-50'}
                                        >
                                        </div>
                                    )  
                })} 
                
            </div>


        </div>
           
        
    )
}

export default MainPhoto;