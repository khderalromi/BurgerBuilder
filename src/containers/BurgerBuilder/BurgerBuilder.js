import React,{ useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from '../../components/UI/spinner/spinner';
import Aux from "../../hoc/wrap";
import Modal from "../../components/UI/Modal/Modal";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import { fetchIngredients } from "../../strore/ingredient-actions";
import { useDispatch ,useSelector,UseSelector} from "react-redux";
import { ingredientSliceActions } from "../../strore/ingredients-slice";


/*
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
*/
const BurgerBuilder = (props)=>{
    //const[ingredients,setIngredients]=useState(null);
    //const[totalPrice,setTotalPrice]=useState(4);
    const[purechasable,setPurechasable]=useState(false);
    const[purchasingdiv,setPurchasingdiv]=useState(false);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false);

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const ingredients=useSelector((state)=>state.ingredient.ingredients);
    const totalPrice=useSelector((state=>state.ingredient.totalPrice))
/*
    useEffect(()=>{
        const sendData=async ()=>{
            //pending
             const response=await fetch('kjkjf');
            if(!response){}
            //success
            
        }
       sendData().catch(error)
        
    })
*/
/*
    useEffect(()=>{
        axios.get('https://burger-77135-default-rtdb.firebaseio.com/ingredients.json').then((response)=>{
            setIngredients({...response.data})
            console.log(response.data)
           
            
        }).catch((error)=>{
            setError(error)
            
        })

    },[])

*/

    useEffect(()=>{
        dispatch(fetchIngredients())
    },[dispatch])


    
    const updatePurechaseState= (ingredients)=>{
      
        const sum=Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey]
            })
            .reduce((sum,el)=>{
                
                return sum + el;
            }, 0)
            
        return (sum>0)
    }



    const addIngredientHandler= (type)=>{
    
        dispatch(ingredientSliceActions.addIngredient({ingredientName:type}))

    
        
       
        
        /*const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients ={
            ...ingredients
        };
        updatedIngredients[type]=updatedCount;
        const oldPrice=totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        setIngredients({...updatedIngredients})
        setTotalPrice(newPrice)
        updatePurechaseState(updatedIngredients)*/
    }

    const removeIngredientHandler=(type)=>{
        if(ingredients[type] >0){
            
        dispatch(ingredientSliceActions.removeIngredient({ingredientName:type}))
  
    /*
        const oldCount=ingredients[type];
        const updatedCount=oldCount - 1;
        const updatedIngredients={
            ...ingredients
        };
        updatedIngredients[type]= updatedCount;
        const oldPrice=totalPrice;
        const newPrice=oldPrice - INGREDIENT_PRICES[type];
        setIngredients({...updatedIngredients})
        setTotalPrice(newPrice)
        updatePurechaseState(updatedIngredients)
       */ }
        
    }


    const purchasingdivHandler=()=>{
        setPurchasingdiv(true)
    }

    const modalclosedHandler=()=>{
        setPurchasingdiv(false)
    }

    const modalcontinuedHandler= ()=> {
        //this.setState({loading:true})
         //   const data={
          //      ingredients :this.state.ingredients,
            //    price: this.state.totalPrice
           // }
         // axios.post("https://burger-77135-default-rtdb.firebaseio.com/.json",data)
           // .then((Response)=>{ this.setState({ loading:false,
           //                                     purechasable:false})})
           // .catch(error=>{this.setState({  loading:false,
           //                                 purechasable:false})})


        /*********   
        const queryParams=[];
        for(let key in ingredients){
            queryParams.push(encodeURIComponent(key) + "="
                             + encodeURIComponent(ingredients[key])
                            );
        }

        queryParams.push('price=' + totalPrice)

        const queryString=queryParams.join('&');
        */ 
        navigate({
            pathname:'/checkout',
          //  search:`?${queryString}` 
        })   
    }




        let burger= error ? "ingredients not loading" : <Spinner/>;
        let orderSummary=null
        if(ingredients){
            burger=<Burger ingredients={ingredients} />
            
         orderSummary= <OrderSummary 
                                ingredients={ingredients}
                                price={totalPrice}
                                clickedCancel= {modalclosedHandler}
                                clickedContinue={modalcontinuedHandler} 
                            />

        }

        if(loading){
         orderSummary=<Spinner/>
        }                    


        const disabledInfo={
            ...ingredients

        }
        

        const disabledButton= (type)=>{
            if(disabledInfo[type] <=0){return true}
        }
/*
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }
        */
        console.log(ingredients)
      return (
            <Aux>
                <Modal show={purchasingdiv} 
                    modalClosed={modalclosedHandler}>
                        {orderSummary}
                </Modal>

               {burger}
                
                    <BuildControls
                    ingredientAdded = {addIngredientHandler} 
                    ingredientRemoved = {removeIngredientHandler} 
                    disabled = {disabledButton}
                    currentPrice = {totalPrice}
                    purechasable={updatePurechaseState(ingredients)}
                    ordered={purchasingdivHandler}
                 
                />
 

            </Aux>
        )
    

}
/*
class BurgerBuilder extends Component{
    state={
       /* ingredients:{
            meat: 0,
            salad: 0,
            cheese:0,
            bacon: 0
        },*/

        /*
        ingredients:null,
        totalPrice:4,
        purechasable:false,
        purchasingdiv:false,
        loading:false,
        error:false

    }

    componentDidMount (){
        axios.get('https://burger-77135-default-rtdb.firebaseio.com/ingredients.json').then((response)=>{
            this.setState({ingredients:response.data})
        }).catch((error)=>{
            this.setState({error:error})
        })
    }
*/


export default BurgerBuilder;
