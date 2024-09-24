import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  let [data, setData] = useState([])
  let getAllproducts = async () => {
    let response = await axios.get('http://localhost:8000/products')
    console.log(response.data)
    setData(response.data)
  }

  useEffect(() => {
    getAllproducts()
  }, [])

  return (
    <>
      <h1>Products</h1>
      <div className="wrapper">
        {
          data.map((x) => {
            return <div>
              <h2>{x}</h2>
            </div>
          })
        }
      </div>

    </>
  )
}

export default App
