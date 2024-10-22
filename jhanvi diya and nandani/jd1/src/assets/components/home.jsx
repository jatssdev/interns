import React from 'react'
import ProductWrapper from './productwrapper'
import { shoes, tshirt } from './products'

const Home = () => {
    return (
        <>
            <div style={{ padding: '100px' }}>
                <ProductWrapper heading={'Tshirts'} data={tshirt} />
                <ProductWrapper heading={'Shoes'} data={shoes} /></div>
        </>
    )
}

export default Home