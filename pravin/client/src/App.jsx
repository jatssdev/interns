import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Register'
import Login from './Login'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register />
      {/* <Login /> */}
      <Home />
    </>
  )
}

export default App
