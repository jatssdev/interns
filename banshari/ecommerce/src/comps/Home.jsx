import React, { useContext } from 'react'
import { MainContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
    let { products, AddToCart, setProduct } = useContext(MainContext)
    function singlePRoductPage(id) {
        let product = products.find((x) => x.id == id)
        setProduct(product)
        navigate('/product')
    }
    return (
        <div className='wrapper'>
            {
                products.map((x) => {
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

export default Home
