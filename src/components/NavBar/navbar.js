//type rafce for getting the default functions for a navbar
import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-scroll';
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
        <nav className="navbar sticky-top shadow-sm">
          <div className="imgSet">
          <Link to='/'>
          <img src={logo} alt="Logo" className='logo'/>
          </Link>
          </div>
            <div className="desktopMenu">
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-90} duration={100} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuListItem">Work</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-30} duration={100} className="desktopMenuListItem" style={{marginRight: 60}}>Contact</Link>
            </div>
            <i className='mobMenu bi bi-list' onClick={()=>setshowMenu(!showMenu)} style={{fontSize: 40}}></i>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-90} duration={100} className="ListItem" onClick={()=>setshowMenu(false)}>About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={100} className="ListItem" onClick={()=>setshowMenu(false)}>Work</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-15} duration={100} className="ListItem" onClick={()=>setshowMenu(false)}>Contact</Link>
            </div>
        </nav>
  )
}

export default Navbar;