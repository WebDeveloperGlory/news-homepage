import React from 'react'
import './css/PopularCard.css'

const PopularCard = ({ img, number, title, txt }) => {
  return (
    <div className='popCard'>
      <div className="left">
        <img src={img} alt="retro_pcs" />
      </div>
      <div className="right">
        <h1>{number}</h1>
        <h2>{title}</h2>
        <p>{txt}</p>
      </div>
    </div>
  )
}

export default PopularCard