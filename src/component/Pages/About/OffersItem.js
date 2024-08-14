
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCoins, faSackDollar, faGift, faHome  } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";




const OffersItem=(props)=>{

    const[show,setShow]=useState(false);

    
    const MouseEnterHandler=()=>{
        return setShow(true)
    }

    const MouseLeaveHandler=()=>{
        return setShow(false)
    }




    return(
        <div 
            className={show?'bg-red-500 p-0.5 lg:p-4 w-full flex flex-col items-center gap-4 ':
                            'border-2 p-0.5 lg:p-4 w-full flex flex-col item-center gap-4 '} 
            onMouseEnter={MouseEnterHandler}
            onMouseLeave={MouseLeaveHandler}
        >
            <div className="grid grid-flow-row">
                <FontAwesomeIcon  className="place-self-center text-white bg-black rounded-full p-1 lg:p-2 border-2  sm:border-8  text-sm lg:text-xl "  
                                icon={props.icon}
                />
                <strong className="place-self-center mt-2 text-xSmall sm:text-sm lg:text-lg xl:text-xl ">{props.offers}</strong>
                <p className="place-self-center text-xSmall sm:text-small  md:text-xs lg:text-sm">{props.explain}</p>
            </div>
        
        </div>
    )
}

export default OffersItem;