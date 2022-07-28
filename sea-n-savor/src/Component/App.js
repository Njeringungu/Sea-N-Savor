import React,{useEffect,useState} from 'react';
import { Route, Routes } from 'react-router-dom'
import Cart from "./Cart";
import Home from "./Home";
import Menu from "./Menu";
import NavBar from "./NavBar";
import Search from "./Search";
import Contact from "./Contact";

// import ItemCard from './ItemCard';
function App() {


  const [meals,setMeals]=useState([])
const mealApi="https://seansavor.herokuapp.com/meals"
useEffect(()=>{
    fetch(mealApi)
    .then((response)=>response.json())
    .then((dishes)=>{setMeals(dishes)
    })
},[]);
console.log(meals)
  return (
    

    <div className="App" >
    
      <NavBar/>
      <h1>Sea N' Savor</h1>
      <p>Savor the flavors of the sea!</p>
      <Routes>
        
        <Route exact path="/menu" element={<Menu meals={meals}/>} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/search" element={<Search meals={meals}/>} />
        <Route exact path="/" element={<Home />} />
        </Routes>

        </div>
        
  );
}

export default App;
