import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import UseRef from './components/UseRef'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import Form from './components/Form'

export let MainContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={{ name: 'jatin', age: 21 }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home val={count} />} />
            <Route path='/ref' element={<UseRef />} />
            <Route path='/state' element={<UseState count={count} setCount={setCount} />} />
            <Route path='/effect' element={<UseEffect />} />
            <Route path='/form' element={<Form />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  )
}



export default App
