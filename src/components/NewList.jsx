import React from 'react'
import { NewCard } from './'
import { newList } from '../constants'
import './css/NewList.css'

function NewList() {
    const title = newList.title;
  return (
    <div className='newList'>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="list">
        <NewCard />
      </div>
    </div>
  )
}

export default NewList