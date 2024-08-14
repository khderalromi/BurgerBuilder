
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile,faChair,faGamepad,faBook, faComputer, faShirt, faVest } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { productSliceActions } from "../../../../../store/Products-slice";



const CategoryItem=(props)=>{
    const dispatch=useDispatch()
    const[show,setShow]=useState(false);

    
    const categoryMouseEnterHandler=()=>{
        return setShow(true)
    }

    const categoryMouseLeaveHandler=()=>{
        return setShow(false)
    }


    const categoryClickedHandler=(searchCategory)=>{
        return(
            dispatch(productSliceActions.gategorySearch({searchCategory}))
        )
    }




    return(
        <div 
            className={show?'bg-red-500 p-4 w-full flex flex-col items-center gap-4 ':
                            'border-2 p-4  w-full flex flex-col item-center gap-4 '} 
            onMouseEnter={categoryMouseEnterHandler}
            onMouseLeave={categoryMouseLeaveHandler}
            onClick={()=>{categoryClickedHandler(props.search)}}
        >
            <FontAwesomeIcon className="text-2xl text-gray-400 "  icon={props.icon} />
            <p className= "self-center">{props.name}</p>
        </div>
    )
}

export default CategoryItem;