import { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import Register from './components/Register'
export const MainContext = createContext()
import Aos from 'aos'
import 'aos/dist/aos.css'
function App() {
  let [user, setUser] = useState({ name: 'bansari' })
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={
          { name: user.name, second: 'magan', setUser: setUser }
        }>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/effect' element={<UseEffect />} />
            <Route path='/ref' element={<UseRef />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
