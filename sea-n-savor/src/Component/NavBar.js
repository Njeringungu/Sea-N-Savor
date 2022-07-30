import React from 'react';
import {NavLink} from "react-router-dom";
function NavBar(){
    
    return(
<nav >
    <NavLink  to="/" >Home</NavLink> 
    <NavLink  to="/menu" >Menu</NavLink>
    <NavLink  to="/form" >Form</NavLink>
    <NavLink  to="/contact" >Contact</NavLink>
    {/* <NavLink to="/search" >Search</NavLink> */}
        </nav>
    )
    }

export default NavBar;