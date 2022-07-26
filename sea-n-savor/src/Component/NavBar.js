import React from 'react';
import {NavLink} from "react-router-dom";
function NavBar(){
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "Teal",
        textDecoration: "none",
        color: "white",
      };
    return(
        <nav>
            <NavLink to="/" 
        style={linkStyles}
        >Home</NavLink> 
            <NavLink to="/menu" 
        style={linkStyles}
        >Menu</NavLink>
            <NavLink to="/cart" 
        >Cart</NavLink>
            <NavLink to="/contact" 
        style={linkStyles}
        >Contact</NavLink>
            <NavLink to="/search" 
        >Search</NavLink>
        </nav>
    )
}

export default NavBar;