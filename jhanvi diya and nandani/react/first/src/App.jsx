// npm create vite --> to create new react project /1. select react 2. select javascript 3rd option

// npm install --> to install dependencies

// npm run dev --> to run project

// npm install react-router-dom --> install react router 

// npm install react-icons --> install react icons


import Home from './components/Home'
import Header from './components/Header'
import './App.css'
import ImgHome from './assets/react.svg'
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import State from './components/State'
import Contact from './components/Contect'
import { createContext, useState } from 'react'
import Ref from './components/Ref'
export let mainContext = createContext()
function App() {

  let name = 'diya'
  let headingStyle = { color: 'red', backgroundColor: 'blue' }


  let [value, setValue] = useState('nandani')
  let contextValues = {
    value: value
  }
  return (


    <>
      <BrowserRouter>
        <mainContext.Provider value={contextValues}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/state' element={<State />} />
            <Route path='/ref' element={<Ref />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </mainContext.Provider>
      </BrowserRouter>
    </>
  )
}



export default App
