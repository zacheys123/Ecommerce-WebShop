import React,{useState,useEffect,useReducer} from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import {MainWrapper,CookieDiv,Divbutton} from '../styled/MainWrapper'
import {Home,Contact,About,Signup,Nopage} from '../pages'
import  {Alert} from 'react-bootstrap'
import Login from '../auth/Login'
import Logout from '../auth/Logout'
import {Display,Cookie}from './staticPages'
import  { commerce} from '../serverapi/commerce'
import './App.css'

import Cart from '../pages/cart/Cart'
import {userContext} from './userContext'

function App(){

  const[products,setProduct]=useState([]);
  const[cart,setCart]=useState({line_items:[],subtotal:{}});
  const fetchproducts=async ()=>{
  const {data}=await commerce.products.list();
  setProduct(data);
}
const fetchCart=async ()=>{
setCart( await commerce.cart.retrieve())
}
const handleAddCart=async (prodid,qty)=>{
  const {cart}=await commerce.cart.add(prodid,qty);
  setCart(cart);
}

const handleUpdateCart=async (productId,quantity)=>{
  const {cart}=await commerce.cart.update(productId,quantity);
  setCart(cart);
}
const handleRemoveCart=async (prodid)=>{
  const {cart}=await commerce.cart.remove(prodid);
  setCart(cart);
} 
const handleEmptyCart=async (prodid)=>{
  const {cart}=await commerce.cart.empty(prodid);
  setCart(cart);
} 

console.log(cart)
  useEffect(()=>{
    setTimeout(()=>{
  fetchproducts();
  fetchCart();
    },-1050)
},[])
const total=cart.total_unique_items

    return(
        <userContext.Provider value={{products,cart,total,handleAddCart,handleUpdateCart,handleRemoveCart,handleEmptyCart }}>
        <MainWrapper className='app'>
         <Navbar/> 
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='pages/contact' element={<Contact/>}/>
        <Route exact path='pages/about' element={<About/>}/>
        <Route exact path='pages/signup' element={<Signup  />}/>
        <Route  exact path='pages/login' element={<Login />}/>
        <Route exact path='pages/logout' element={<Logout/>}/>
        <Route  exact path='pages/display' element={<Display />}/>
            <Route  exact path='pages/cart' element={<Cart />}/>
        <Route exact path='*' element={<Nopage/>}/>
    </Routes>
    </MainWrapper>
        </userContext.Provider>
    );
}
export default App