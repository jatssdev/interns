import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, done } from './redux/todoSlice'
import { getAllProducts } from './redux/productsSlice'

function App() {
  let [title, setTitle] = useState('')
  let todosData = useSelector((x) => x.todos)
  let productsData = useSelector((x) => x.products)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
    console.log(todosData)
  }, [])
  let AddTodoHandler = (e) => {
    e.preventDefault()

    dispatch(add({ title, date: '21/221/1' }))
  }
  let DoneTodo = (ind) => {
    dispatch(done(ind))
  }
  return (
    <>
      <form onSubmit={AddTodoHandler}>
        <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Enter title" /><button>Add</button>
      </form>
      <h1>Todos</h1>
      <div className="wrapper">
        {
          todosData.todos.map((x, i) => {
            return <div>
              <span style={{ height: '10px', width: '10px', borderRadius: '100px', background: x.done ? 'green' : 'yellow', display: 'inline-block' }}></span>
              <span>{x.title}</span>
              <button onClick={() => DoneTodo(i)}>Done</button>
              <button>Remove</button>
            </div>
          })
        }
      </div>

      <hr />
      <h1>products</h1>
      {
        productsData.loading ? 'loading...' : productsData.products.map((x, i) => {
          return <div>
            <img src={x.thumbnail} alt="" />
          </div>
        })
      }
    </>
  )
}

export default App
