import React, { useContext } from 'react'
import { MainContext } from '../App'

const Home = () => {
    let { products, AddToCart } = useContext(MainContext)
    return (
        <div className='wrapper'>
            {
                products.map((x) => {
                    return <div className="product">
                        <img src={x.img} alt="" />
                        <h2>{x.title}</h2>
                        <h3>{x.price}</h3>
                        <button onClick={() => AddToCart(x.id)}>Add To cart</button>
                    </div>
                })
            }
        </div>
    )
}

export default Home
