import { createContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './comps/Cart'
import Home from './comps/Home'
import Header from './comps/Header'
import { earbuds, shoes, tshirts, tshirtWomen } from './comps/products'
export const MainContext = createContext()
function App() {
  let [products, setProducts] = useState([])
  useEffect(() => {
    setProducts([...earbuds, ...tshirtWomen, ...tshirts, ...shoes])
  }, [])
  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={
          { products: products }
        }>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
