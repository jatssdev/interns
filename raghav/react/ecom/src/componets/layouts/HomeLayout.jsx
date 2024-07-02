import axios from 'axios'
import React, { useEffect, useState } from 'react'

const HomeLayout = () => {
    let [products, setProducts] = useState([])

    let getProducts = async () => {
        let result = await axios.get('http://localhost/amisha/api/getProducts.php')
        console.log(result)
        setProducts(result.data)

    }


    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <h1>Products from php api</h1>
            <div className="wrapper">
                {
                    products.map((product, index) => {

                        return <>
                            <h1>{product.title}</h1>
                            <img src={product.img} alt="" />
                        </>
                    })
                }
            </div>



        </div>
    )
}

export default HomeLayout
