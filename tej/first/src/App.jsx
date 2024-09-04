// npm install react-router-dom  ---> to install react Router
import About from './About'
import './App.css'
import JKaiBi from './assets/react.svg'
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseState from './UseState'
import { useState } from 'react'
function App() {
  let [dark, setDark] = useState(false)
  function DarkMode() {
    setDark(!dark)
  }

  return (
    <>
      <BrowserRouter>
        <Header dark={dark} DarkMode={DarkMode} />
        <Routes>
          <Route path='/' element={<Home dark={dark} />} />
          <Route path='/state' element={<UseState dark={dark} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
