import React from 'react';
import {NavLink} from "react-router-dom";
function NavBar(){
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "#902222",
        textDecoration: "none",
        color: "white",
        borderRadius:"10px",
        justifyContent: "space-around",

        
        //  backgroundColor: "#2b5876",
        // padding: 10px;
        // border-radius: 10px;
        // margin-bottom: 10px;
        // display: flex;
        // justify-content: space-around;
        // align-items: center;
        // color: white;
      };
    return(
<nav className='nav-bar'>
    <NavLink className="nav-link" to="/" style={linkStyles}>Home</NavLink> 
    <NavLink className="nav-link" to="/menu" style={linkStyles}>Menu</NavLink>
    <NavLink className="nav-link" to="/form" style={linkStyles}>Form</NavLink>
    <NavLink className="nav-link" to="/contact" style={linkStyles}>Contact</NavLink>
    {/* <NavLink to="/search" style={linkStyles}>Search</NavLink> */}
        </nav>
    )
}

export default NavBar;