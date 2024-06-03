import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './componets/layouts/HomeLayout'
import AdminLayout from './componets/layouts/AdminLayout'
import Home from './componets/pages/admin/Home'
import Products from './componets/pages/admin/Products'
import Categories from './componets/pages/admin/Categories'

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [

      ]
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'products',
          element: <Products />
        },
        {
          path: 'categories',
          element: <Categories />
        },

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
