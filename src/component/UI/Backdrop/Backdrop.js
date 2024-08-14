import React from "react";


const Backdrop = (props)=>{
   return (
    props.show ? <div 
    className='w-full h-full fixed z-100 left-0 top-0 bg-slate-300 opacity-60'
    onClick={props.clicked}
    ></div> : null )
}

export default Backdrop;
