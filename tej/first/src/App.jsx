// npm install react-router-dom  ---> to install react Router
import About from './About'
import './App.css'
import JKaiBi from './assets/react.svg'
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import UseState from './UseState'
import { createContext, useState } from 'react'
import { earbuds, tshirts } from './Products'
import Cart from './Cart'
import Search from './Search'

export let mainContext = createContext()

function App() {
  let navigate = useNavigate()
  let [cart, setCart] = useState([])
  let [products, setProducts] = useState(earbuds)
  let [allproducts, setallProducts] = useState([...earbuds, ...tshirts])
  let [dark, setDark] = useState(false)
  let [searchVal, setSearchVal] = useState('')
  let [search, setSearch] = useState([])
  function DarkMode() {
    setDark(!dark)
  }
  function AddToCart(id) {
    let product = allproducts.find((x) => x.id == id)
    setCart([...cart, product])

  }
  function Remove(id) {
    let newCart = cart.filter((x) => x.id != id)
    setCart(newCart)
    alert('item removed')
  }
  function qtyInc(id) {
    let product = cart.find((x) => x.id == id)
    product.qty++
    setCart([...cart])

  }
  function qtyDec(id) {
    let product = cart.find((x) => x.id == id)
    if (product.qty <= 1) {
      alert('minimum quantity should be 1')
    } else {

      product.qty--
    }
    setCart([...cart])
  }

  function SearchHandler(e) {
    e.preventDefault()
    let searchedProducts = allproducts.filter((x) => x.title.toLowerCase().includes(searchVal.toLowerCase()))
    setSearch(searchedProducts)
    navigate('/search')

  }
  let contextValues = {
    setSearchVal,
    SearchHandler,
    cart,
    dark,
    DarkMode
    ,
    AddToCart
    ,
    products,
    qtyInc,
    qtyDec,
    Remove,
    search

  }

  return (
    <>
      <mainContext.Provider value={contextValues}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/state' element={<UseState dark={dark} />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart qtyInc={qtyInc} qtyDec={qtyDec} Remove={Remove} cart={cart} />} />
          <Route path='/search' element={<Search search={search} />} />
        </Routes>
      </mainContext.Provider>

    </>
  )
}

export default App
