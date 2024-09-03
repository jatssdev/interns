// npm i react-redux @reduxjs/toolkit // install redux
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Layout from './components/layout'
import About from './components/About'
import Register from './components/Register'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getProducts } from '../redux/productSlice'

function App() {
  let dispatch = useDispatch()
  let [user, setUser] = useState(null)
  let checkLOgin = () => {
    let localUSer = JSON.parse(localStorage.getItem('user')) || null
    setUser(localUSer)
  }
  let getAllProducts = async () => {
    let response = await axios.get('https://dummyjson.com/products')
    console.log(response.data.products)
    dispatch(getProducts(response.data.products))
  }
  useEffect(() => {
    VerifyUser()
    getAllProducts()
  }, [])

  function LogoutHandler() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    VerifyUser()

  }
  let VerifyUser = async () => {
    let token = localStorage.getItem('token') || null
    let response = await axios.get(`http://localhost:8080/api/verify/${token}`)
    localStorage.setItem('user', JSON.stringify(response.data.user || null))
    checkLOgin()
  }
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout LogoutHandler={LogoutHandler} user={user} />,
      children: [
        {
          path: '',
          element: <Home user={user} />,

        },
        {
          path: 'about',
          element: <About />,

        },
      ]
    },
    {
      path: '/login',
      element: <Login VerifyUser={VerifyUser} />
    },
    {
      path: '/register',
      element: <Register />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
