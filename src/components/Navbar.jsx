import { useState } from 'react'
import { navbar } from '../constants'
import { logo, menu, menu_close } from '../assets'
import './css/Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

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
        <div className="menuToggle">
          <div className="top">
            <img src={toggle ? menu : menu_close} alt="menu toggle" onClick={() => setToggle((prev) => !prev)}/>
          </div>
          <div className="bottom">
            <ul className={!toggle ? "active" : null}>
              {navLinks}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar