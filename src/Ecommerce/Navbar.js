import React, { useState } from 'react';
import './CSS/Navbar.css';

const Navbar = ({setShow,size,setSearch}) => {
  return (
    <div >
        <nav className='Navbar'>
            <div onClick={()=>setShow(true)}>Shop😊More</div>
            <div onClick={()=>setShow(true)}>Home</div>
            <div>Contact</div>
            <div>Service</div>
            <div><input type='text' placeholder='Search here' onChange={(e)=>setSearch(e.target.value)}></input></div>
            <div onClick={()=>setShow(false)}>Cart 🛒 {size}</div>
        </nav>
      
    </div>
  )
}

export default Navbar
