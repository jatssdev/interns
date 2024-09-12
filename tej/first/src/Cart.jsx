import React from 'react'

const Cart = ({ cart, Remove, qtyInc, qtyDec }) => {
    return (
        <>
            {
                cart.length > 0 ? <div className="wrapper">
                    {
                        cart.map((x) => {
                            return <div className="product">
                                <img src={x.img} alt="" />
                                <h2>{x.title}</h2>
                                <h3>₹{x.price * x.qty}</h3>
                                <div className='quantity'>
                                    <button onClick={() => qtyInc(x.id)}>+</button>
                                    <span>{x.qty}</span>
                                    <button onClick={() => qtyDec(x.id)}>-</button>
                                </div>
                                <button onClick={() => Remove(x.id)}>Remove</button>
                            </div>
                        })
                    }
                </div> : <h3>Cart Is Empty</h3>
            }
        </>
    )
}

export default Cart
