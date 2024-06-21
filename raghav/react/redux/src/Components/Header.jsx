import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../redux/productsSlice'

const Header = () => {
    let dispatch = useDispatch()
    return (
        <div className='navbar'>
            <button onClick={() => dispatch(filterProducts('all'))}>All</button>
            <button onClick={() => dispatch(filterProducts('shoes'))}>Shoes</button>
            <button onClick={() => dispatch(filterProducts('tshirt'))}>Tshirts</button>
            <button onClick={() => dispatch(filterProducts('tshirtwomen'))}>Tshirts for Women</button>
            <button onClick={() => dispatch(filterProducts('earbud'))}>Earbuds</button>
        </div>
    )
}

export default Header
