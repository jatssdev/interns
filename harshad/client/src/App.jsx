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

function App() {
  let [user, setUser] = useState(null)
  let checkLOgin = () => {
    let localUSer = JSON.parse(localStorage.getItem('user')) || null
    setUser(localUSer)
  }
  useEffect(() => {
    checkLOgin()

  }, [])

  function LogoutHandler() {
    localStorage.removeItem('user')
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

        }
      ]
    },
    {
      path: '/login',
      element: <Login checkLOgin={checkLOgin} />
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
