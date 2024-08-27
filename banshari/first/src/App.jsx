import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import UseEffect from './components/UseEffect'
function App() {
  let [user, setUser] = useState({ name: 'bansari' })
  return (
    <>
      <BrowserRouter>
        <Header userName={user.name} />
        <Routes>
          <Route path='/' element={<Home setUser={setUser} />} />
          <Route path='/about' element={<About />} />
          <Route path='/effect' element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
