//type rafce for getting the default functions for a navbar
import React from 'react'
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Work</Link>
                <Link className="desktopMenuListItem">Contact</Link>
            </div>
        </nav>
  )
}

export default Navbar;