import React from 'react';


function Menu({meals}){

    function handleClick(){
        console.log("clicked")
    }

    return(
        <div className="menu-container">

           
           {meals.map((meal)=>(
        <div className= "card"key={meal.idMeal}>
            <p className='text'>{meal.strMeal}</p>
          <img src={meal.strMealThumb} alt="" />
          
            <a href="#cart"><button onClick={handleClick}>Add to Cart</button></a>
            
        </div>
    ))};
           
        </div>
    )
}

export default Menu;