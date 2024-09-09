// npm install react-router-dom  ---> to install react Router
import About from './About'
import './App.css'
import JKaiBi from './assets/react.svg'
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseState from './UseState'
import { useState } from 'react'
import { earbuds, tshirts } from './Products'
import Cart from './Cart'
function App() {
  let [cart, setCart] = useState([])
  let [products, setProducts] = useState(earbuds)
  let [allproducts, setallProducts] = useState([...earbuds, ...tshirts])
  let [dark, setDark] = useState(false)
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


  return (
    <>
      <BrowserRouter>
        <Header cart={cart} dark={dark} DarkMode={DarkMode} />
        <Routes>
          <Route path='/' element={<Home AddToCart={AddToCart} products={products} dark={dark} />} />
          <Route path='/state' element={<UseState dark={dark} />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart Remove={Remove} cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
