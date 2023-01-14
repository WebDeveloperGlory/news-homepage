import React from 'react'
import { web_3_desktop } from '../assets'
import { hero } from '../constants'
import './css/Hero.css'

const Hero = () => {
    const title = hero.title;
    const txt = hero.content;
    const btnTxt = hero.btn;
  return (
    <div className='heroContainer'>
      <div className="topSection">
        <img src={web_3_desktop} alt="web-3 image" />
      </div>
      <div className="bottomSection">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="text">
          <p>{txt}</p>
          <button>{btnTxt}</button>
        </div>
      </div>
    </div>
  )
}

export default Hero