import React from 'react'
import { popular } from '../constants'
import { PopularCard }from './'

function PopularList() {
    const styles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
    const list = popular.map((item) => (
      <PopularCard
        key={item.number}
        img={item.img}
        number={item.number}
        title={item.title}
        txt={item.content}
      />
    ))
  return (
    <div className="trending" style={styles}>
      {list}
    </div>
  )
}

export default PopularList