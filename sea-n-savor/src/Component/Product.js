import React, {useState,useEffect} from "react";
import {NavLink } from "react-router-dom";

const [meals,setMeals]=useState([])



const mealApi="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood/"


useEffect(()=>{
    fetch(mealApi)
    .then((response)=>response.json())
    .then((data)=>{setMeals(data.meals)
    })
},[]);
function Product (){

return(
    <div className="menu-container">

           
           {meals.map((meal)=>(
        <div className= "card"key={meal.idMeal}>
            <p className='text'>{meal.strMeal}</p>
          <img src={meal.strMealThumb} alt="" />
    
    
    
     <div className="">
        <button className="remove">-</button>
        <button  className="add">+</button>
        </div>

            <button onClick={handleClick} >Add to Cart</button>
           <div> <NavLink to="/cart" >To Cart</NavLink></div>
        </div>
    ))};
           
        </div>
)

}

export default Product;