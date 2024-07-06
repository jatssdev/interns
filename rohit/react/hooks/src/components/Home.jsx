import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../redux/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Home = ({ val }) => {
    let products = useSelector((x) => x.products)
    let [localProducts, setLocalProducts] = useState([])
    let dispatch = useDispatch()
    let getProducts = async () => {
        let result = await axios.get('https://dummyjson.com/products')
        // console.log(result.data)
        setLocalProducts(result.data.products)
    }
    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        dispatch(getAllProducts(localProducts))

    }, [localProducts])
    return (
        <div>
            {
                products.products.map((x) => {
                    return <div className="product">
                        <img src={x.thumbnail} alt="" />
                        <h3>{x.title}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default Home
