import React,{useState} from 'react';

function Form({addDishes}){

const[dishes,setDishes]=useState({

meal:"",
image:"",
price:"",
})
function handleChange(e){
  setDishes({...dishes, [e.target.name]:e.target.value})
}

function handleSubmit(e){
  e.preventDefault()
  fetch("https://seansavor.herokuapp.com/meals",{
    method:"POST",
    headers:
{
  "Content-Type":"application/json"
}, body: JSON.stringify(dishes)
})
.then(response=>response.json())
.then (dish=>addDishes(dish) )
}

console.log(dishes)
  return(
  
  <form onSubmit = {handleSubmit}>
 <label htmlFor="name">Meal</label><input type="text" name="meal" value={dishes.meal} onChange={handleChange}/>

 <label htmlFor="image">Image</label>
  <input type="text" name="image" value={dishes.image} onChange={handleChange}/>


<label htmlFor="price">Price</label>
  <input type="text" name="price" value={dishes.price} onChange={handleChange}/>


  <input type="submit" value="Submit" />
  </form>
  
    )
}

export default Form;