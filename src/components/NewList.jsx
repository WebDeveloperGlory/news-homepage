import React from 'react'
import { NewCard } from './'
import { newList } from '../constants'
import './css/NewList.css'

function NewList() {
    const title = newList.title;
    const list = newList.content.map((item, i) => (
      <NewCard
        key={`${item}-${i}`}
        title={item.title}
        content={item.content}
      />
    ))
  return (
    <div className='newList'>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="list">
        {list}
      </div>
    </div>
  )
}

export default NewList