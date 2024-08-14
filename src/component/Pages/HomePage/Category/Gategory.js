import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import  CategoryItem from "./GategoryItem/GategoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faBook, faChair, faComputer, faGamepad, faMobile, faShirt, faVest } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faGem } from "@fortawesome/free-regular-svg-icons";

const Category=(props)=>{

    
    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);


    const [index,setIndex]=useState(0);
    const[disabledButton,setDisabledButton]=useState(false);
    const gategoryItems=[   {CategoryName:"Men_wear",icon:faShirt,search:"men's clothing"},
                            {CategoryName:"jewelery",icon:faGem ,search:"jewelery"},
                            {CategoryName:"electronics",icon:faComputer ,search:"electronics"},
                            {CategoryName:"women's",icon:faVest ,search:"women's clothing"},
                            {CategoryName:"Furniture",icon:faChair ,search:"Furniture"},
                            {CategoryName:"Phones",icon:faMobile ,search:"Phones"},
                            {CategoryName:"Gaming",icon:faGamepad ,search:"Gaming"},
                            {CategoryName:"Books",icon:faBook ,search:"Books"},
                        ]

    

    const addIndexHandler=()=>{
        const updateIndex=index+1;
        
        if(window.innerWidth<400 && updateIndex< gategoryItems.length-4){
            return setIndex(index+1)
        }

        
        if((window.innerWidth>400 && window.innerWidth<600) && updateIndex< gategoryItems.length-5){
            return setIndex(index+1)
        }

        
        if((window.innerWidth>600 && window.innerWidth<800) && updateIndex< gategoryItems.length-6){
            return setIndex(index+1)
        }
        
        if((window.innerWidth>800 && window.innerWidth<1000) && updateIndex< gategoryItems.length-7){
            return setIndex(index+1)
        }

        if((window.innerWidth>1000) && updateIndex< gategoryItems.length-8){
            return setIndex(index+1)
        }


        
        
    }

    const decreaseIndexHandler=()=>{
        if(index>0){
            return setIndex(index-1)
        }
    }

    

    return(
        
        <div className="mt-8 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16 border-b-2 ">
            
            <div className="before" >
                <strong className="ml-3 text-red-500">Today's</strong>
            </div>

            <div className="mt-5 flex justify-between">
                <strong className="text-xl md:text:2xl lg:text-4xl">Browse By Category</strong>
                <div>
                    
                <FontAwesomeIcon 
                    className="bg-slate-300 rounded-full text-small p-2 md:text-sm" 
                    icon={faArrowLeft}
                    onClick={decreaseIndexHandler}
                />
                <FontAwesomeIcon 
                    className="bg-slate-300 rounded-full text-small p-2 md:text-sm" 
                    icon={faArrowRight} 
                    onClick={addIndexHandler}
                />
                </div>
            </div>

            <div className="grid grid-flow-col gap-5 mt-16 mb-16 " data-aos='zoom-in'>
                {window.innerWidth<400?
                [1,2].map((_,indexElement)=>{
                    return(
                                <CategoryItem
                                    icon={gategoryItems[indexElement+index].icon}
                                    name={gategoryItems[indexElement+index].CategoryName}
                                    search={gategoryItems[indexElement+index].search}
                                />
                            
                        
                    )
                })
                :(window.innerWidth>400 && window.innerWidth<600)?
                [1,2,3].map((_,indexElement)=>{
                    return(
                                <CategoryItem
                                    icon={gategoryItems[indexElement+index].icon}
                                    name={gategoryItems[indexElement+index].CategoryName}
                                    search={gategoryItems[indexElement+index].search}
                                />
                            
                        
                    )
                })
                
                :(window.innerWidth>600 && window.innerWidth<800)?
                [1,2,3,4].map((_,indexElement)=>{
                    return(
                                <CategoryItem
                                    icon={gategoryItems[indexElement+index].icon}
                                    name={gategoryItems[indexElement+index].CategoryName}
                                    search={gategoryItems[indexElement+index].search}
                                />
                            
                        
                    )
                })
                
                :(window.innerWidth>800 && window.innerWidth<1000)?
                [1,2,3,4,5].map((_,indexElement)=>{
                    return(
                                <CategoryItem
                                    icon={gategoryItems[indexElement+index].icon}
                                    name={gategoryItems[indexElement+index].CategoryName}
                                    search={gategoryItems[indexElement+index].search}
                                />
                            
                        
                    )
                })
                
                :(window.innerWidth>1000)&&
                [1,2,3,4,5,6].map((_,indexElement)=>{
                    return(
                                <CategoryItem
                                    icon={gategoryItems[indexElement+index].icon}
                                    name={gategoryItems[indexElement+index].CategoryName}
                                    search={gategoryItems[indexElement+index].search}
                                />
                            
                        
                    )
                })
                
                
                }
            </div>
        </div>    
    )
}

export default Category;