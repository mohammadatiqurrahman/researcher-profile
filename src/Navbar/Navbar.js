import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact</a>
                <input  type="text" placeholder="Search profile" />
            </nav>
        </div>
    );
};

export default Navbar;