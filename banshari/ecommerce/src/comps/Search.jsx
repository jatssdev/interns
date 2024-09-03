import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'

const Search = () => {

    let [searchedProducts, setSearchedProducts] = useState([])

    let { products, searchVal, AddToCart } = useContext(MainContext)



    useEffect(() => {
        let vals = products.filter((x) => x.title.toLowerCase().includes(searchVal.toLowerCase()))
        setSearchedProducts(vals)
    }, [searchVal])
    return (
        <div className='wrapper'>
            {
                searchedProducts.map((x) => {
                    return <div className="product">
                        <div onClick={() => singlePRoductPage(x.id)}>
                            <img src={x.img} alt="" />
                            <h2>{x.title}</h2>
                            <h3>{x.price}</h3>
                        </div>
                        <button onClick={() => AddToCart(x.id)}>Add To cart</button>
                    </div>
                })
            }
        </div>
    )
}

export default Search
