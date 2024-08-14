import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/Products-actions";
import Cart from "../../../UI/Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
const FlashSales=(props)=>{

    const dispatch=useDispatch();
    const products=useSelector((state=>state.products.products));
    const flashSalesProducts=[];
    const [index,setIndex]=useState(0);
    const[show,setShow]=useState(false);
    const[disabledButton,setDisabledButton]=useState(false);


      const addIndexHandler=()=>{
        const updateIndex=index+1;
        if(updateIndex< flashSalesProducts.length-3){
            return setIndex(index+1)
        }
        
      }

      const decreaseIndexHandler=()=>{
        if(index>0){
            return setIndex(index-1)
        }
      }

      const viewAllProductsHandler= ()=>{
        setDisabledButton(true)
        return setShow(true)
      }

    return(
        
        <div className="mt-8 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16 border-b-2 ">
            
            <div className="before" >
                <strong className="ml-3 text-red-500">Today's</strong>
            </div>

            <div className="mt-5 flex justify-between">
                <strong className="text-xl md:text:2xl lg:text-4xl">Flash Sales</strong>
                <div>
                    
                <FontAwesomeIcon 
                    className="bg-slate-300 rounded-full text-small p-2 md:text-sm " 
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

            <div className= {show?" mt-5 grid grid-cols-2 gap-3 md:mt:12 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-16 " 
                                    : "mt-5 w-full grid grid-flow-col gap-3 lg:gap-16 "}>
                {products.map((product)=>{
                    if(product.price<=50){
                        flashSalesProducts.push({...product})
                    }
                }) 
            } 

            {show?
                flashSalesProducts.length>0&&
                    flashSalesProducts.map((product)=>{
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
                flashSalesProducts.length>0 ? 
                    window.innerWidth<768 ?
                        [1,2].map((_,indexElement)=>{
                            return(
                                <Cart
                                    id={flashSalesProducts[indexElement+index].image.id}
                                    product={flashSalesProducts[indexElement+index]}
                                    img={flashSalesProducts[indexElement+index].image}
                                    title={flashSalesProducts[indexElement+index].title}
                                    price={flashSalesProducts[indexElement+index].price}
                                    rating={flashSalesProducts[indexElement+index].rating['rate']}
                                    ratingCount={flashSalesProducts[indexElement+index].rating['count']}
                                />
                            )
                        }) 
                        
                    :window.innerWidth>768 &&window.innerWidth<=1025 ?
                        [1,2,3].map((_,indexElement)=>{
                            return(
                                <Cart
                                    id={flashSalesProducts[indexElement+index].image.id}
                                    product={flashSalesProducts[indexElement+index]}
                                    img={flashSalesProducts[indexElement+index].image}
                                    title={flashSalesProducts[indexElement+index].title}
                                    price={flashSalesProducts[indexElement+index].price}
                                    rating={flashSalesProducts[indexElement+index].rating['rate']}
                                    ratingCount={flashSalesProducts[indexElement+index].rating['count']}
                                />
                            )
                        }) 
                          
                    :window.innerWidth>1025 &&
                        [1,2,3,4].map((_,indexElement)=>{
                            return(
                                <Cart
                                    id={flashSalesProducts[indexElement+index].image.id}
                                    product={flashSalesProducts[indexElement+index]}
                                    img={flashSalesProducts[indexElement+index].image}
                                    title={flashSalesProducts[indexElement+index].title}
                                    price={flashSalesProducts[indexElement+index].price}
                                    rating={flashSalesProducts[indexElement+index].rating['rate']}
                                    ratingCount={flashSalesProducts[indexElement+index].rating['count']}
                                />
                            )
                        }) 
                : null        
                    


            }
                       
            </div>
            
            <ToastContainer style={{height:'60px',width:'200px',fontSize:'10px'}}
                            position="bottom-center" 
                            draggable 
                            theme="dark" 
                            limit={1}  
                            hideProgressBar={true} 
                            autoClose={2000} 
            />

            <div className="flex justify-center mt-6 mb-10">
                <button className="btn"  onClick={viewAllProductsHandler} disabled={disabledButton}>
                    View All Products
                </button>
            </div>

        </div>
    )
}

export default FlashSales;