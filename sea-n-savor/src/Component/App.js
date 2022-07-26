
import React,{ Route, Routes } from 'react-router-dom'
import Cart from "./Cart";
import Home from "./Home";
import Menu from "./Menu";
import NavBar from "./NavBar";
import Search from "./Search";
import Contact from "./Contact";

function App() {
  return (
    

    <div className="App">
    
      <NavBar/>
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
