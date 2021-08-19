import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </ul>
        </div>
    );
};

export default Navbar;