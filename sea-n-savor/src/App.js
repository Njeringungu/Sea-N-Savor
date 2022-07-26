import React from "react";
import { Router, Route, Routes } from 'react-router-dom'
import Cart from "./Cart";
import Home from "./Home";
import Menu from "./Menu";
import NavBar from "./NavBar";
import Search from "./Search";


function App() {
  return (
    <Router>

    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/menu"><Menu /></Route>
        <Route exact path="/cart"><Cart/>
        </Route>
        <Route exact path="/contact"><Contact/>
        </Route>
        <Route exact path="/search"><Search/><Contact/>
        </Route>

        <Route exact path="/"><Home/>

        </Route>
        </Routes>

        </div>
        </Router>
  );
}

export default App;
