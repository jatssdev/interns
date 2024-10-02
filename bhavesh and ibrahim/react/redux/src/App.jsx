// npm i react-redux @reduxjs/toolkit 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './assets/redux/todoSlice'

function App() {
  const [val, setval] = useState('')
  let dispatch = useDispatch()

  let todos = useSelector((state) => state.todos)
  function AddTodohandler(e) {
    e.preventDefault()
    dispatch(add(val))
  }
  return (
    <>
      <form onSubmit={AddTodohandler}>
        <div><input onChange={(e) => setval(e.target.value)} type="text" placeholder='Write Todo' /></div>
        <div><button>Add</button></div>
      </form>
      {
        todos.todos.map((todo, index) => {
          return <h1>{todo} <button onClick={() => dispatch(remove(index))}>Remove</button></h1>
        })}

    </>
  )
}

export default App
