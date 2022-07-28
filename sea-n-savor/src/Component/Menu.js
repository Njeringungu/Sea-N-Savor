import React,{useState} from 'react';
import Search from './Search';

function Menu({meals}){

    function handleClick(){
        console.log("clicked")
    }

    return(
        <div className="menu-container">

           {meals.map((meal)=>(
        <div className= "card"key={meal.id}>
            <img src={meal.image} alt="" />
          <p className='text'>{meal.meal}</p>
          <p className='text'>{meal.price}</p>
    <button className='addcart' onClick={handleClick}>Add to Cart</button>
            
        </div>
    ))};
           

          
        </div>
    )
}

export default Menu;