import { Routes, Route } from "react-router-dom";
import HomePage from "./component/Pages/HomePage/HomePage";
import About from "./component/Pages/About/About";
import ContactUs from "./component/Pages/ContactUs/ContactUs";
import SignUp from "./component/Pages/SignUp/SignUp";
import LogIn from "./component/Pages/LogIn/LogIn";
import UserCart from "./component/Pages/UserCart/User-Cart";
import { useEffect } from "react";
import { fetchProducts } from "././store/Products-actions";
import { useDispatch } from "react-redux";

function App() {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch]) 


  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/Home' element={<HomePage/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<ContactUs/>} />
          <Route path='/Sign Up' element={<SignUp/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/cart' element={<UserCart/>} />
        </Routes>

      </div>
  );
}

export default App;
