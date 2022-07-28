import React from 'react';


function Menu({meals,onDelete}){

function handleDelete(e){
let id =e.target.id;
        fetch (`https://seansavor.herokuapp.com/meals/${id}`,{
        method:"DELETE"
     })
        .then((response)=>response.json())
        .then (deletedItem=>onDelete(deletedItem))
       }
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