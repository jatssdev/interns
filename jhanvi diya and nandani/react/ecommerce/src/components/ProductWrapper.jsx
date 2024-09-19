import React from 'react'

const ProductWrapper = ({ heading, data }) => {
    return (
        <div>
            <h1>{heading}</h1>
            <div className="wrapper">
                {
                    data.map((x) => {
                        return (
                            <>
                                <div className="product">
                                    <img src={x.img} alt="" />
                                    <h2>{x.title}</h2>
                                    <h3>{x.price}</h3>
                                    <button>Add To Cart</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductWrapper
