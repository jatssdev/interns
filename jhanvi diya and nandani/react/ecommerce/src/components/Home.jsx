import React from 'react'
import ProductWrapper from './ProductWrapper'
import { shoes, tshirt } from './products'

const Home = () => {
    return (
        <>
            <ProductWrapper heading={'Tshirts'} data={tshirt} />
            <ProductWrapper heading={'Shoes'} data={shoes} />
        </>
    )
}

export default Home
