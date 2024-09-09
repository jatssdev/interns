import React from 'react'

const Cart = ({ cart, Remove }) => {
    return (
        <>
            {
                cart.length > 0 ? <div className="wrapper">
                    {
                        cart.map((x) => {
                            return <div className="product">
                                <img src={x.img} alt="" />
                                <h2>{x.title}</h2>
                                <h3>₹{x.price}</h3>
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
