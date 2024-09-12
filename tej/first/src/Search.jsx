import React from 'react'

const Search = ({ search }) => {
    return (
        <>
            <div className="wrapper">
                {
                    search.map((x) => {
                        return <div className="product">
                            <img src={x.img} alt="" />
                            <h2>{x.title}</h2>
                            <h3>₹{x.price}</h3>
                            <button onClick={() => AddToCart(x.id)}>Add To cart</button>
                        </div>
                    })
                }
            </div>

        </>
    )
}

export default Search
