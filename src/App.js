import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/CheckOut/CheckOut';
import CheckoutSummary from './components/Order/checkoutSummary/checkoutSummary';
import Orders from './containers/Orders/Orders';
import { Route,Routes } from 'react-router-dom';



class App extends Component {
  render() {
    return (

        <div className="App">
          <Layout>
            <Routes>
                <Route path='/' element={<BurgerBuilder/>} />
                <Route  path='/checkout/*' element={<Checkout/>} />
                <Route  path='/orders' element={<Orders/> } />
   
            </Routes>
        
          
          </Layout>
        </div>
 
      
    );
  }
}

export default App;
