// npm create vite --> to create new react project /1. select react 2. select javascript 3rd option

// npm install --> to install dependencies

// npm run dev --> to run project


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImgHome from './assets/react.svg'
function App() {

  let name = 'diya'
  let headingStyle = { color: 'red', backgroundColor: 'blue' }

  return (
    <>
      <img src={ImgHome} alt="" />
      <h1 style={headingStyle}>Hello</h1 >
      <p>Lorem, ipsum dolor.</p>
      <h3>Hello {name}</h3>
    </>
  )
}

export default App
