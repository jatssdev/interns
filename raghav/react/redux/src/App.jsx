import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider, useDispatch } from 'react-redux'
import store from './redux/store'
import Home from './Components/Home'
import Header from './Components/Header'

function App() {


  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />

      </Provider>

    </>
  )
}

export default App
