import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Effect = () => {
    let [products, setProducts] = useState([])
    let [val, setVal] = useState(0)
    let [val2, setVal2] = useState(0)

    let GetAllProducts = async () => {
        let api = 'https://dummyjson.com/products?limit=150'


        let response = await axios.get(api)

        console.log(response.data)
        setProducts(response.data.products)
    }


    useEffect(() => {
        GetAllProducts()
    }, [])

    return (
        <div>
            <h1>Val : {val} <button onClick={() => setVal(val + 1)}>Increase</button></h1>
            <h1>Val : {val2} <button onClick={() => setVal2(val2 + 1)}>Increase2</button></h1>
            <hr />
            <div className="wrapper">
                {
                    products.map((x) => {
                        return <div>
                            <img src={x.thumbnail} alt="" />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Effect
