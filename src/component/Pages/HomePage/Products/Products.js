import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/Products-actions";
import Cart from "../../../UI/Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
const Products=(props)=>{

    const dispatch=useDispatch()
    var products=useSelector((state=>state.products.products));
    const CategoryFilterElement=useSelector((state=>state.products.productsFilterCategory));
    const productss=[];
    const [index,setIndex]=useState(0);
    const[show,setShow]=useState(false);
    const[disabledButton,setDisabledButton]=useState(false);

    useEffect(()=>{
        
        if(CategoryFilterElement.length>0){
            products=CategoryFilterElement
        }
    },[ CategoryFilterElement])    



      const addIndexHandler=()=>{
        const updateIndex=index+1;
        if(updateIndex< productss.length-3){
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
                <strong className="ml-3 text-red-500 text-lg">Our Products</strong>
            </div>

            <div className="mt-5 flex justify-between">
                <strong className="text-sm md:text:2xl lg:text-4xll">Explore Our Products</strong>
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

            <div className= {show?"mt-5 grid grid-cols-2 gap-6 md:mt-12 md:grid-cols-3 lg:grid-cols-4 lg-gap-16"
                                : "mt-5 w-full grid grid-cols-2 gap-3 md:grid-cols-3  md:gap-2 lg:grid-cols-4 "}>

            {show? 
                /******to show element with filter category with view button clicked ****/
                CategoryFilterElement.length>0?
                CategoryFilterElement.map((product)=>{
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
                }) :
                /******to show normal products with view button clicked ****/
                products.length>0&&
                products.map((product)=>{
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

            /******to show element with filter category not with view button clicked show in row ****/
            CategoryFilterElement.length>0?  
                window.innerWidth<768 ?
                    [1,2].map((_,indexElement)=>{
                        return(
                            <Cart
                                id={CategoryFilterElement[indexElement+index].image.id}
                                product={CategoryFilterElement[indexElement+index]}
                                img={CategoryFilterElement[indexElement+index].image}
                                title={CategoryFilterElement[indexElement+index].title}
                                price={CategoryFilterElement[indexElement+index].price}
                                rating={CategoryFilterElement[indexElement+index].rating['rate']}
                                ratingCount={CategoryFilterElement[indexElement+index].rating['count']}
                            />
                        )
                        })

                :window.innerWidth>=768 &&window.innerWidth<=1025 ?      
                    [1,2,3].map((_,indexElement)=>{
                        return(
                            <Cart
                                id={CategoryFilterElement[indexElement+index].image.id}
                                product={CategoryFilterElement[indexElement+index]}
                                img={CategoryFilterElement[indexElement+index].image}
                                title={CategoryFilterElement[indexElement+index].title}
                                price={CategoryFilterElement[indexElement+index].price}
                                rating={CategoryFilterElement[indexElement+index].rating['rate']}
                                ratingCount={CategoryFilterElement[indexElement+index].rating['count']}
                            />
                        )
                        })
                        
                        
                :window.innerWidth>1025  &&      
                    [1,2,3,4].map((_,indexElement)=>{
                        return(
                            <Cart
                                id={CategoryFilterElement[indexElement+index].image.id}
                                product={CategoryFilterElement[indexElement+index]}
                                img={CategoryFilterElement[indexElement+index].image}
                                title={CategoryFilterElement[indexElement+index].title}
                                price={CategoryFilterElement[indexElement+index].price}
                                rating={CategoryFilterElement[indexElement+index].rating['rate']}
                                ratingCount={CategoryFilterElement[indexElement+index].rating['count']}
                            />
                        )
                        })
                      
            :
            /******to show normal products not with view button clicked show in row ****/
            products.length>0?
                window.innerWidth<768 ?
                    [1,2].map((_,indexElement)=>{
                    return(
                        <Cart
                            id={products[indexElement+index].image.id}
                            product={products[indexElement+index]}
                            img={products[indexElement+index].image}
                            title={products[indexElement+index].title}
                            price={products[indexElement+index].price}
                            rating={products[indexElement+index].rating['rate']}
                            ratingCount={products[indexElement+index].rating['count']}
                        />
                    )
                    }) 
                
                
                :window.innerWidth>=768 &&window.innerWidth<=1025 ?
                    [1,2,3,4,5,6].map((_,indexElement)=>{
                    return(
                        <Cart
                            id={products[indexElement+index].image.id}
                            product={products[indexElement+index]}
                            img={products[indexElement+index].image}
                            title={products[indexElement+index].title}
                            price={products[indexElement+index].price}
                            rating={products[indexElement+index].rating['rate']}
                            ratingCount={products[indexElement+index].rating['count']}
                        />
                    )
                    }) 
                
                :window.innerWidth>1025 &&
                    [1,2,3,4,5,6,7,8].map((_,indexElement)=>{
                    return(
                        <Cart
                            id={products[indexElement+index].image.id}
                            product={products[indexElement+index]}
                            img={products[indexElement+index].image}
                            title={products[indexElement+index].title}
                            price={products[indexElement+index].price}
                            rating={products[indexElement+index].rating['rate']}
                            ratingCount={products[indexElement+index].rating['count']}
                        />
                    )
                    }) 
                

            :null        
            }
                       
            </div>
            
            <div className="flex justify-center mt-14 mb-10">
                <button className="btn"  onClick={viewAllProductsHandler} disabled={disabledButton}>
                    View All Products
                </button>
            </div>

        </div>
    )
}

export default Products;