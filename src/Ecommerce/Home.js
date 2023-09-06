import React from 'react';
import Data from './Data';
import Card from './Card.js';
import './CSS/Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = ({handleClick,search}) => {
  return (
    <div className='Home'>

      <Carousel>
        {Data.filter((item)=>item.category.toLowerCase().includes(search)).map((item)=>{
          return(
            <header className='HomeHeader' style={{height:'600px', with:'80%', margin:'auto'}}>
              <div className='headerdiv'>
                <img src={item.image} alt='' style={{height:'600px', with:'70%', margin:'auto'}}></img>
                <p className="legend">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.rating.rate}⭐</p>
                <button onClick={()=>handleClick(item)}>Add Cart</button>
                </p>
              </div>
            </header>
            
          )
          })}
      </Carousel>

      <section className='Sec'>
      {Data && Data.filter((item)=>item.category.toLowerCase().includes(search)).map((item)=>{
              return(
                  <Card item={item} handleClick={handleClick} key={item.id}/>
              )
          })}
      </section>

            
      
    </div>
  )
}

export default Home
