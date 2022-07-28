import React,{useState} from 'react';


function Menu({meals,onDelete}){

    return(
        <div className="menu-container">

           {meals.map((meal)=>(
        <div className= "card"key={meal.id}>
            <img src={meal.image} alt="" />
          <p className='text'>{meal.meal}</p>
          <p className='text'>{meal.price}</p>
    <button id={meal.id} onClick={handleDelete}>Delete</button>
            
        </div>
    ))}
           

          
        </div>
    )
}

export default Menu;