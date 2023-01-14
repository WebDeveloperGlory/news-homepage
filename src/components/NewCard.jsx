import React from 'react'
import './css/NewCard.css'

const NewCard = ({ title, content }) => {
  return (
    <div className='card'>
      <div className="top">
        <h2>{title}</h2>
      </div>
      <div className="bottom">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default NewCard