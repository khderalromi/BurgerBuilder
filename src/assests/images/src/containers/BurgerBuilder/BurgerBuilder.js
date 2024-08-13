import React,{Component} from "react";
import Aux from '../../hoc/wrap';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
//import axios from "axios";



const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}


class BurgerBuilder extends Component{
    state={
        ingredients:{
            meat: 0,
            salad: 0,
            cheese:0,
            bacon: 0
        },
        totalPrice:4,
        purechasable:false,
        purchasingdiv:false

    }

    updatePurechaseState (ingredients){
      
        const sum=Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey]
            })
            .reduce((sum,el)=>{
                return sum + el;
            }, 0)
        this.setState({purechasable: sum > 0})    

    }



    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const oldPrice=this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients:updatedIngredients, totalPrice: newPrice})
        this.updatePurechaseState(updatedIngredients)
    }

    removeIngredientHandler=(type)=>{
        if(this.state.ingredients[type] >0){
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount - 1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
        this.updatePurechaseState(updatedIngredients)
        }
        
    }


    purchasingdivHandler=()=>{
        this.setState({purchasingdiv:true})
    }

    modalclosedHandler=()=>{
        this.setState({purchasingdiv: false})
    }

    modalcontinuedHandler= ()=> {
        
            alert('You Are Continued')
            const data={
                ingredients :this.state.ingredients,
                price: this.state.totalPrice
            }
          /*  axios.post("https://burger-77135-default-rtdb.firebaseio.com/orders.json",data)
            .then((Response)=>{ console.log(Response)})
            .catch(error=>{console.log(error)})

         */
    }



    render () {

        const disabledInfo={
            ...this.state.ingredients

        }

        const disabledButton= (type)=>{
            if(disabledInfo[type] <=0){return true}
        }
/*
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }

*/      return (
            <Aux>
                <Modal show={this.state.purchasingdiv} 
                        modalClosed={this.modalclosedHandler}>

                            <OrderSummary 
                                ingredients={this.state.ingredients}
                                price={this.state.totalPrice}
                                clickedCancel= {this.modalclosedHandler}
                                clickedContinue={this.modalcontinuedHandler} />
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                
                    <BuildControls
                    ingredientAdded = {this.addIngredientHandler} 
                    ingredientRemoved = {this.removeIngredientHandler} 
                    disabled = {disabledButton}
                    currentPrice = {this.state.totalPrice}
                    purechasable={this.state.purechasable}
                    ordered={this.purchasingdivHandler}
                 
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
