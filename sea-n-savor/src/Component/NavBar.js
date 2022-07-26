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
            <NavLink to="/" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>Home</NavLink> 
            <NavLink to="/menu" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>Menu</NavLink>
            <NavLink to="/cart" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>Cart</NavLink>
            <NavLink to="/contact" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>Contact</NavLink>
            <NavLink to="/search" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>Search</NavLink>
        </nav>
    )
}

export default NavBar;