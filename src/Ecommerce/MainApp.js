import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';

const MainApp = () => {
  const[show,setShow] = useState(true);
  const[cart,setCart] = useState([]);
  const[search,setSearch]= useState('');


  function handleClick(item){
    setCart([...cart,item]);
    alert("Product Added to Cart");
  }

  function handleChange(item,d){
    let arr = cart ;
    let ind = cart.indexOf(item);
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount+=1 
    setCart([...arr])
    
  }


  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} setSearch={setSearch}/>
      {(show)?(<Home handleClick={handleClick} search={search}/>) :(<Cart cart={cart} setCart={setCart} search={search}  handleChange={handleChange}/>)}
    </div>
  )
}

export default MainApp
