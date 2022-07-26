import React,{useEffect,useState} from 'react';
import { Route, Routes } from 'react-router-dom'
import Cart from "./Cart";
import Home from "./Home";
import Menu from "./Menu";
import NavBar from "./NavBar";
import Search from "./Search";
import Contact from "./Contact";

function App() {


  const [meals,setMeals]=useState([])
const mealApi="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
useEffect(()=>{
    fetch(mealApi)
    .then((response)=>response.json())
    .then((data)=>{setMeals(data.meals)
    })
},[]);
console.log(meals)
  return (
    

    <div className="App">
    
      <NavBar/>
      <Menu meals={meals}/>
      <Search meals={meals}/>
      <Routes>
        
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/" element={<Home />} />
        </Routes>

        </div>
        
  );
}

export default App;
