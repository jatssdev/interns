// npm create vite  --> to create new project / give name , select react and select javascript
// npm install-- > To Install All Dependancies 
// npm run dev -->to start development server / same as live server 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyImg from './assets/react.svg'

function App() {

  let name = 'Jatin'

  return (
    <>
      <img style={{ width: '300px', margin: '100px', border: '1px solid black', borderRadius: '10px' }} src={MyImg} alt="" />
      <h1 className='heading'>Hello {name}</h1>
      <p>coding cloud</p>
    </>
  )
}

export default App
