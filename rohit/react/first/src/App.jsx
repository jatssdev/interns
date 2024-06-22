//npm create vite
//npm install 
//npm run dev
import { useState } from 'react'

import './App.css'
import Home from './Home'

function App() {
  let [name, setName] = useState('jatin')

  const ChangeHandler = () => {
    setName('Rahul')
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={ChangeHandler}>Change</button>
      <hr />
      <Home />
    </>
  )
}

export default App
