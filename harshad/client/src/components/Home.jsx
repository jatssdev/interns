import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const Home = ({ user }) => {
    let products = useSelector((state) => state.products)

    return (
        <div>

            <div className="wrapper">
                {
                    products.map((x) => {
                        return <div>
                            <img src={x.thumbnail}  />
                            <h1>{x.title}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Home
