import React, { useState } from 'react';
import './CSS/Card.css';

const Card = ({item,handleClick}) => {

    const{title,description,price,image,rating,category}=item;
    const[open,setOpen]= useState(false);
    
  return (
    <div className='CardsBody'>
      <div className='Card'>
        <img src={image} alt='' ></img>
        <p>{title}</p>
        <h1>{category}</h1>
        <p>{price}</p>
        <p>{rating.rate} ⭐</p>
        <button onClick={()=>setOpen(!open)}>Read More</button>
        {open && (
          <div>
          <p>{description}</p>
          <button onClick={()=>setOpen(!open)}>Read Less</button>
          </div>
        )}
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card
