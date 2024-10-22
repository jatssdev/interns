// npm i aos 
import { createContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Cart from './assets/components/cart'
import Header from './assets/components/header'
import Home from './assets/components/home'
import { earbud, shoes, tshirt, tshirtWomen } from './assets/components/products'
import Search from './Search'
import Aos from 'aos'
import 'aos/dist/aos.css'
export let mainContext = createContext()
function App() {
  let navigate = useNavigate()
  let [products, setProducts] = useState([...earbud, ...shoes, ...tshirt, ...tshirtWomen])
  let [cart, setCart] = useState([])
  let [search, setSearch] = useState([])
  useEffect(() => {
    Aos.init()
  }, [])
  let addToCart = (id) => {
    let product = products.find((x) => x.id == id)
    setCart([...cart, product])
  }

  let remove = (id) => {
    let newcart = cart.filter((x) => x.id != id)
    setCart(newcart)
  }
  let inCrease = (id) => {
    let p = cart.find((x) => x.id == id)
    p.qty++
    setCart([...cart])
  }
  let deCrease = (id) => {
    let p = cart.find((x) => x.id == id)
    p.qty--
    setCart([...cart])
  }

  let searchHandler = (val) => {
    let SearchedProducts = products.filter((x) => x.title.toLowerCase().includes(val.toLowerCase()))
    setSearch(SearchedProducts)
    navigate('/search')
  }

  return (
    <>

      <mainContext.Provider value={{
        addToCart: addToCart,
        cart: cart,
        remove: remove,
        inCrease,
        deCrease,
        search,
        searchHandler
      }}>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Search />} />

        </Routes>
      </mainContext.Provider>

    </>
  )
}

export default App