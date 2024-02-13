import React, { useState } from 'react';
import icon from '../../media/images/hamburger.png';
import { Link } from 'react-router-dom';
import logout from '../../media/images/logout.png';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
  
    const toggleNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
    return (
      <div className='navbar'>
        <img src={icon} alt='hamburgerIcon' className='hamburgerIcon' onClick={toggleNavbar} />
        <ul className={`navbarItems ${showNavbar ? 'show' : ''}`}>
          <li className='navbarLi'> <Link className='navbarLinks' to='/home'> Home </Link>{' '} </li>
          <li className='navbarLi'> <Link className='navbarLinks'>Profile Section</Link>{' '} </li>
          <li className='navbarLi'> <Link className='navbarLinks' to='/policyTable'> Policy Docs </Link>{' '} </li>
          <li className='navbarLi'> <Link className='navbarLinks'>Attendance</Link>{' '}</li>
        </ul>
        <img src={logout} alt='logoutIcon' className='logoutIcon'/>
      </div>

    );
  };

export default Navbar;



