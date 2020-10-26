/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";

const NavBar = () => {
  return (

<nav className="navbar" role="navigation" aria-label="main navigation">
   <div className="navbar-brand">
     <a className="navbar-item" href="https://i.skyrock.net/4960/83984960/pics/3145650486_1_4_XnkwV8bf.jpg">
      <img src="https://media.istockphoto.com/vectors/creative-blue-green-gradient-abstract-swan-logo-vector-id1057549036"width="112" height="28"></img>
      </a>

    </div>
     <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-start">
           <Link to="/" className="navbar-item" >Home</Link>
           <Link to="/contact" className="navbar-item">Contact</Link>
           <Link to="/about" className="navbar-item">About</Link>
           <Link to="/works" className="navbar-item">Works</Link>
        </div>
      </div>
 </nav>
 
  )

};
  
  



export default NavBar;