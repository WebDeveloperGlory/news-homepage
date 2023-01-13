import React from 'react'
import { navbar } from '../constants'
import { logo } from '../assets'
import './css/Navbar.css'

const Navbar = () => {
    const navLinks = navbar.map((link, i) => (
      <li key={`${link}-${i}`}>
        <a className='navLink'>{link}</a>
      </li>    
    ));
  return (
    <div className='nav'>
        <img src={logo} alt="logo" />
        <ul>
          {navLinks}
        </ul>
    </div>
  )
}

export default Navbar