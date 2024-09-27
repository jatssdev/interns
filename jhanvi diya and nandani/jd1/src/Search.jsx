import React, { useContext } from 'react'
import { mainContext } from './App'
import ProductWrapper from './assets/components/productwrapper'

const Search = () => {
    let { search } = useContext(mainContext)
    return (
        <div>
            <ProductWrapper heading={'Searched Products'} data={search} />

        </div>
    )
}

export default Search
