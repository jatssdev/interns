import { createContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './comps/Cart'
import Home from './comps/Home'
import Header from './comps/Header'
import { earbuds, shoes, tshirts, tshirtWomen } from './comps/products'
import ProductDetails from './comps/ProductDetails'
export const MainContext = createContext()
function App() {
  let [product, setProduct] = useState({

  })
  let [products, setProducts] = useState([])
  let [cart, setCart] = useState([])
  useEffect(() => {
    setProducts([...earbuds, ...tshirtWomen, ...tshirts, ...shoes])
  }, [])
  function AddToCart(id) {
    let obj = products.find((x) => x.id == id)
    let existing = cart.find((x) => x.id == id)
    if (existing) {
      alert('item is already in cart')
    } else {
      setCart([...cart, obj])
    }
  }
  function RemoveCart(id) {
    // let filteredCart = cart.filter((x) => x.id !== id)
    // setCart(filteredCart)
    let index = cart.findIndex((x) => x.id == id)
    cart.splice(index, 1)
    setCart([...cart])


  }
  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={
          {
            products,
            AddToCart,
            cart,
            RemoveCart,
            product,
            setProduct
          }
        }>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product' element={<ProductDetails />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
