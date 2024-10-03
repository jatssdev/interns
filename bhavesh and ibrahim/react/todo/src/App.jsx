// npm i react-router-dom react-redux @reduxjs/toolkit sweetalert2 bootstrap react-bootstrap 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AddTodo from './components/AddTodo'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
