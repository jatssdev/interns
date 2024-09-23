import React, { useContext } from 'react'
import { mainContext } from '../App'

const Cart = () => {
    let { cart } = useContext(mainContext)
    return (
        <>
            <div className="cartWrapper">
                {
                    cart.map((x) => {
                        return <div className="product">
                            <img src={x.img} alt="" />
                            <h2>{x.title}</h2>
                            <h3>{x.price}</h3>
                            <button onClick={() => addToCart(x.id)}>Remove</button>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Cart
