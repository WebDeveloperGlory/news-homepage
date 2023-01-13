import React from 'react'
import { navbar } from '../constants'
import { logo } from '../assets'
import './css/Navbar.css'

const Navbar = () => {
  return (
    <div>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default Navbar