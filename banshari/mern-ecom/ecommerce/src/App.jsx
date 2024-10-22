import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { earbuds, shoes, tshirts, tshirtWomen } from './components/Products'
import Cart from './components/Cart'
import Header from './components/Header'
export const maincontext = createContext();
import Home from './components/Home'
import Search from './components/Search'
import { useNavigate } from "react-router-dom";
import { PiCurrencyInrBold } from "react-icons/pi";
import Swal from 'sweetalert2' // npm i sweetalert2
import Register from './components/Register'
import Login from './components/Login'
import Users from './components/Users'
import axios from 'axios'


function App() {
  let Navigate = useNavigate();
  let [profile, setProfile] = useState({})
  let [products, setProducts] = useState([])
  let [cart, setCart] = useState([])
  let [searchvar, setSearchVar] = useState([])
  let inr = <PiCurrencyInrBold />
  useEffect(() => {
    setProducts([...earbuds, ...tshirts, ...shoes, ...tshirtWomen])
  }, [])
  let getProfile = async () => {
    let response = await axios.get('/api/profile', { withCredentials: true })
    console.log(response.data)
    setProfile(response.data)
  }

  useEffect(() => {
    getProfile()
  }, [])
  useEffect(() => {
    console.log('profile', profile)
  }, [profile])

  function searchHandler(e) {
    e.preventDefault()
    Navigate('/search')
  }
  function addtocart(id) {
    let obj = products.find((x) => x.id == id)
    let existing = cart.find((x) => x.id == id)
    if (existing) {
      alert('');
    } else {
      setCart([...cart, obj])
    }
  }

  function RemoveCart(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to remove this item from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        let filteredarr = cart.filter((x) => x.id != id)
        setCart(filteredarr);
        Swal.fire({
          title: "Deleted!",
          text: "Product Removed successfully!",
          icon: "success"
        });
      }
    });
  }

  let [incPrice, setincPrice] = useState()
  let [dec, setdecPrice] = useState()
  function qtyInc(product) {
    let id = product.id
    let cartproduct = cart.find((x) => x.id == id)
    cartproduct.qty++;
    setCart([...cart])
    let price = product.price
    let qty = cartproduct.qty
    let subtotal = price * qty
    setincPrice(subtotal)
    console.log(subtotal)

  }
  function qtyDec(product) {
    let id = product.id
    let cartproduct = cart.find((x) => x.id == id)
    if (cartproduct.qty <= 1) {
      RemoveCart(id)
    } else {
      cartproduct.qty--;
      setCart([...cart])
      let price = product.price
      let qty = cartproduct.qty
      let subtotal = price * qty
      setdecPrice(subtotal)
      console.log(subtotal)
    }


  }
  return (
    <>

      <maincontext.Provider value={{ products, cart, addtocart, RemoveCart, setSearchVar, searchvar, searchHandler, inr, qtyDec, qtyInc }}>
        <Header />
        <h1>{profile ? profile.name : 'user not login'}</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Search />} />
          <Route path='/product' element={<Search />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </maincontext.Provider>

    </>
  )
}

export default App
