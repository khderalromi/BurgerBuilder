import {  useState } from "react";
import {  useSelector } from "react-redux";
import Cart from "../../../UI/Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
const BestSelling=(props)=>{

    const products=useSelector((state=>state.products.products));
    const BestSelling=[];
    const [index,setIndex]=useState(0);
    const[show,setShow]=useState(false);
    const[disabledButton,setDisabledButton]=useState(false);

    const viewAllProductsHandler= ()=>{
        setDisabledButton(true)
        return setShow(true)
    }

    return(
        <div className="mt-8 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16 lg:border-b-2">
            
            <div className="before" >
                <strong className="ml-3 text-red-500">This Month</strong>
            </div>

            <div className="mt-5 flex justify-between">
                <strong className="text-sm md:text:2xl lg:text-4xl">Best Selling Products</strong>
                <div>  
                    <button className="btn"  onClick={viewAllProductsHandler} disabled={disabledButton}>
                        View All
                    </button>
                </div>
            </div>

            <div className= {show?" mt-5 grid grid-cols-2 gap-3 md:mt:12 md:grid-cols-3 md:gap-6 lg:grid-cols-4  lg-gap-16 "
                                :"mt-5 w-full grid grid-flow-col  gap-3 lg:gap-16 " }>
                {products.map((product)=>{
                            if(product.price>=100){
                                BestSelling.push({...product})
                            }
                        }) 
                } 

                {show?
                    BestSelling.length>0&&
                    BestSelling.map((product)=>{
                            return(
                                <Cart
                                    id={product.id}
                                    product={product}
                                    img={product.image}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating['rate']}
                                    ratingCount={product.rating['count']}
                                />

                            )
                        })
                    :
                    BestSelling.length>0 ?
                        window.innerWidth<768 ?
                        [1,2].map((_,indexElement)=>{
                            return(
                                <Cart
                                    id={BestSelling[indexElement+index].image.id}
                                    product={BestSelling[indexElement+index]}
                                    img={BestSelling[indexElement+index].image}
                                    title={BestSelling[indexElement+index].title}
                                    price={BestSelling[indexElement+index].price}
                                    rating={BestSelling[indexElement+index].rating['rate']}
                                    ratingCount={BestSelling[indexElement+index].rating['count']}
                                />
                            )
                        }) 
                        
                        
                        :window.innerWidth>=768 &&window.innerWidth<=1025 ?
                        [1,2,3].map((_,indexElement)=>{
                            return(
                                <Cart
                                    id={BestSelling[indexElement+index].image.id}
                                    product={BestSelling[indexElement+index]}
                                    img={BestSelling[indexElement+index].image}
                                    title={BestSelling[indexElement+index].title}
                                    price={BestSelling[indexElement+index].price}
                                    rating={BestSelling[indexElement+index].rating['rate']}
                                    ratingCount={BestSelling[indexElement+index].rating['count']}
                                />
                            )
                        }) 
                        
                        :window.innerWidth>1025 &&
                        [1,2,3,4].map((_,indexElement)=>{
                            return(
                                <Cart
                                    id={BestSelling[indexElement+index].image.id}
                                    product={BestSelling[indexElement+index]}
                                    img={BestSelling[indexElement+index].image}
                                    title={BestSelling[indexElement+index].title}
                                    price={BestSelling[indexElement+index].price}
                                    rating={BestSelling[indexElement+index].rating['rate']}
                                    ratingCount={BestSelling[indexElement+index].rating['count']}
                                />
                            )
                        }) 
                        

                    :null

                }
                       
            </div>
            
        </div>
    )
}

export default BestSelling;