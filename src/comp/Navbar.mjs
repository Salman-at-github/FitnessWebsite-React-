import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/logo.png';

export default function Navbar() {
  return (
    <>
    <nav id='navbar'>
        <ul>
            <div id='logo'>
                <img src={logo} alt='Logo'/>  
                <Link to="/">RFA</Link>
            <div className='paths'>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/classinfo">Class Info</Link></li>
              <li> <Link to="/about">About</Link></li>
              <li> <Link to="/contact">Contact Us</Link></li>
            </div>
            </div>
        </ul>
    </nav>
    </>
  )
}
