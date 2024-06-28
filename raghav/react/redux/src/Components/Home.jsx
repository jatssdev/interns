import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    let products = useSelector((state) => state.products)

    useEffect(() => {
        console.log(products)
    }, [products])
    return (
        <div div className='wrapper' >
            {
                products?.loading ? <p>loading...</p> :
                    products.products.map((product) => (<>
                        <div className="product">
                            <img src={product.thumbnail} alt="" />
                            <h2>{product.title}</h2>
                            <h3>₹{product.price}</h3>
                            <button>Add To Cart</button>
                        </div>
                    </>)
                    )
            }
        </div >
    )
}

export default Home
