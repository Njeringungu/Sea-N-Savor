import React from 'react';


function Menu({meals}){


    return(
        <>

           
           {meals.map((meal)=>(
        <div key={meal.idMeal}>
            <p>{meal.strMeal}</p>
          <img src={meal.strMealThumb} alt="" />
        </div>
    ))};
           
        </>
    )
}

export default Menu;