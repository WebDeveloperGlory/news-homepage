import { useState } from 'react'
import { Navbar } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className="nav">
        <Navbar />
      </section>
      
      <section id='atr'>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">F£@RL£$s</a>.
        </div>
      </section>
    </div>
  )
}

export default App
