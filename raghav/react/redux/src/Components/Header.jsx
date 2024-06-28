import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts, getByCategory } from '../redux/productsSlice'

const Header = () => {
    let dispatch = useDispatch()
    return (
        <div className='navbar'>
            <button onClick={() => dispatch(getByCategory('smartphones'))}>Mobiles</button>
            <button onClick={() => dispatch(getByCategory("fragrances"))}>fragrances</button>
            <button onClick={() => dispatch(getByCategory('tshirt'))}>Tshirts</button>
            <button onClick={() => dispatch(getByCategory('tshirtwomen'))}>Tshirts for Women</button>
            <button onClick={() => dispatch(getByCategory('earbud'))}>Earbuds</button>
        </div>
    )
}

export default Header
