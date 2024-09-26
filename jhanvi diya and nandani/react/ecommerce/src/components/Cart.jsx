import React, { useContext } from 'react'
import { mainContext } from '../App'

const Cart = () => {
    let { cart, remove } = useContext(mainContext)
    return (
        <>
            <a href="https://maps.app.goo.gl/cQBEHqahTgeragTq5">Nadiad</a>
            <h1>
                Total : <span>{cart.reduce((t, x) => t += x.price, 0)}</span>
            </h1>
            <div className="cartWrapper">
                {
                    cart.map((x) => {
                        return <div className="product">
                            <img src={x.img} alt="" />
                            <h2>{x.title}</h2>
                            <h3>{x.price}</h3>
                            <button onClick={() => remove(x.id)}>Remove</button>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Cart
