import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import Register from './components/register'
import Login from './components/login'
import axios from 'axios'
function App() {
  let checkAUth = async (token) => {
    let response = await axios.get('http://localhost:9000/auth/' + token)
    console.log(response)
  }
  useEffect(() => {
    let token = localStorage.getItem('token') || null
    checkAUth(token)
  }, [])
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ]
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
