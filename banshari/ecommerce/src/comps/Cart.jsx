import React, { useContext } from 'react'
import { MainContext } from '../App'

const Cart = () => {
    let { cart, RemoveCart, QtyDec, QtyInc } = useContext(MainContext)
    return (
        <div className='cart'>
            <div className='cartWrapper'>
                {
                    cart.map((x) => {
                        return <div className="product">
                            <img src={x.img} alt="" />
                            <h2>{x.title}</h2>
                            <div>
                                <h3>{x.price}</h3>
                                <div>
                                    <button onClick={() => QtyInc(x.id)}>+</button>
                                    <span>{x.qty}</span>
                                    <button onClick={() => QtyDec(x.id)}>-</button>
                                </div>
                            </div>
                            <button onClick={() => RemoveCart(x.id)}>Remove</button>
                        </div>
                    })
                }
            </div>
            <div className="checkout">
                <h2>Total : <span>{cart.reduce((t, x) => t += x.price * x.qty, 0)}</span></h2>
            </div>
        </div>
    )
}

export default Cart
