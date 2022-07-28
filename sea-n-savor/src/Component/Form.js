import React,{useState} from 'react';

function Form(){

const[dishes,setDishes]=useState({

meal:"",
image:"",
price:"",
})
function handleChange(e){
  setDishes()
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
.then (dishes=>{addDishes(dishes)} )
}
  return(
  
  <form>
 <label htmlFor="name">meal</label><input type="text" id="name" value={dishes.name} onChange={handleChange}/>
<label htmlFor="price">price</label>
  <input type="number" id="price" value={dishes.price} onChange={handleChange}/>


  <input type="submit" value="Submit" />
  </form>
  
    )
}

export default Form;