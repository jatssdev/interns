


import { createContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Cart from './comps/Cart'
import Home from './comps/Home'
import Header from './comps/Header'
import { earbuds, shoes, tshirts, tshirtWomen } from './comps/products'
import ProductDetails from './comps/ProductDetails'
import Search from './comps/Search'
import Swal from 'sweetalert2' // npm i sweetalert2
import Register from './comps/Register'
import Users from './comps/Users'
export const MainContext = createContext()
function App() {
  let navigate = useNavigate()
  let [searchVal, setSearchVal] = useState('')

  let [product, setProduct] = useState({

  })
  function SearchHandler(e) {
    e.preventDefault()
    navigate('/search')

  }
  let [products, setProducts] = useState([...earbuds, ...tshirtWomen, ...tshirts, ...shoes])
  let [cart, setCart] = useState([])

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
    let check = confirm('are you sure want to remove!')
    if (check) {
      let index = cart.findIndex((x) => x.id == id)
      cart.splice(index, 1)
      setCart([...cart])
    } else {
      alert('canceled')
    }
  }
  function QtyInc(id) {
    let product = cart.find((x) => x.id == id)
    product.qty++
    setCart([...cart])
  }
  function QtyDec(id) {
    let product = cart.find((x) => x.id == id)
    if (product.qty <= 1) {
      let check = confirm('do you want to remove this item from cart ?')
      if (check) {
        RemoveCart(id)
      } else {
        Swal.fire({
          title: "Cancel",
          text: "You Canceled!",
          icon: "error"
        });
      }
    } else {

      product.qty--
    }
    setCart([...cart])
  }
  return (
    <>

      <MainContext.Provider value={
        {
          products,
          AddToCart,
          cart,
          RemoveCart, searchVal, setSearchVal,
          product,
          setProduct,
          QtyInc,
          QtyDec,
          SearchHandler
        }
      }>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<ProductDetails />} />
          <Route path='/search' element={<Search />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </MainContext.Provider>

    </>
  )
}

export default App
