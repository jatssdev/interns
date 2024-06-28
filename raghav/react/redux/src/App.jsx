import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import store from './redux/store'
import Home from './Components/Home'
import Header from './Components/Header'
import { getProducts } from './redux/productsSlice'

function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <>

      <Header />
      <Home />


    </>
  )
}

export default App
