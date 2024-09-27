import React, { useContext } from 'react'
import { mainContext } from '../../App'


const Cart = () => {
    let { cart, remove, inCrease, deCrease } = useContext(mainContext)
    return (
        <>
            <div className="cartElem">
                <h1>
                    Total : <span>{cart.reduce((t, x) => t += (x.price * x.qty), 0)}</span>
                </h1>

                <div className="cartWrapper">
                    {
                        cart.map((x) => {
                            return <div key={x.id} className="product">
                                <img src={x.img} alt="" />
                                <h2>{x.title}</h2>
                                <h3>{x.price}</h3>
                                <button onClick={() => remove(x.id)}>Remove</button>
                                <div>
                                    <button onClick={() => inCrease(x.id)}>+</button>
                                    <span>{x.qty}</span>
                                    <button onClick={() => deCrease(x.id)}>-</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Cart