import React, { useContext, useState, useEffect } from 'react'
import { mainContext } from '../../App'

const ProductWrapper = ({ heading, data }) => {
    let [fade, setFade] = useState(false)
    let { addToCart } = useContext(mainContext)


    return (
        <div>
            <h1>{heading}</h1>
            <div className="wrapper">
                {
                    data.map((x, index) => (
                        <div key={index} data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} className="product">
                            <img src={x.img} alt="" />
                            <h2>{x.title}</h2>
                            <h3>{x.price}</h3>
                            <button onClick={() => addToCart(x.id)}>Add To Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductWrapper
