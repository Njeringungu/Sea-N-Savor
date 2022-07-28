import React,{useEffect,useState} from 'react';
import { Route, Routes } from 'react-router-dom'
import Form from "./Form";
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
           <div className='header'>
            <h1>Sea N' Savor</h1>
           <p>Savor the flavors of the sea!</p>
           </div>  
      <Routes>
        
        <Route exact path="/menu" element={<Menu meals={meals}/>} />
        <Route exact path="/form" element={<Form/>} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/search" element={<Search meals={meals}/>} />
        <Route exact path="/" element={<Home />} />
        </Routes>

        </div>
        
  );
}

export default App;
