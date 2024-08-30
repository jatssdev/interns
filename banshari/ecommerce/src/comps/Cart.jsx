import React, { useContext } from 'react'
import { MainContext } from '../App'

const Cart = () => {
    let { cart, RemoveCart } = useContext(MainContext)
    return (
        <div>
            <div className='wrapper'>
                {
                    cart.map((x) => {
                        return <div className="product">
                            <img src={x.img} alt="" />
                            <h2>{x.title}</h2>
                            <h3>{x.price}</h3>
                            <button onClick={() => RemoveCart(x.id)}>Remove</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Cart
