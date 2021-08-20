import { Button } from '@material-ui/core';
import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {

    const activeStyle={
        color:"#fff",
        border: "1px solid rgb(149, 19, 255)",
        backgroundColor:"rgb(149, 19, 255)"
    }

    return (
        <div>
            <NavLink exact to="/" className="navbar-link" 
            activeClassName="selected"> Home </NavLink>

            <NavLink exact to="/about" className="navbar-link" 
            activeClassName="selected">About</NavLink>

            <NavLink exact to="/services" className="navbar-link"
            activeClassName="selected"
            activeStyle={activeStyle}>Services</NavLink>

            <NavLink exact to="/shop" className="navbar-link"
            activeClassName="selected"
            activeStyle={activeStyle}>Shop</NavLink>

        </div>
    );
};

export default Navbar;