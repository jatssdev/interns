import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Home from './components/Home'
import { earbud, shoes, tshirt, tshirtWomen } from './components/products'
export let mainContext = createContext()
function App() {
  let [products, setProducts] = useState([...earbud, ...shoes, ...tshirt, ...tshirtWomen])
  let [cart, setCart] = useState([])

  let addToCart = (id) => {
    let product = products.find((x) => x.id == id)
    setCart([...cart, product])
  }

  let remove = (id) => {
    let newcart = cart.filter((x) => x.id != id)
    setCart(newcart)
  }


  
  return (
    <>
      <BrowserRouter>
        <mainContext.Provider value={{
          addToCart: addToCart,
          cart: cart,
          remove: remove
        }}>
          <Header />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>
        </mainContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
