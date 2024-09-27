import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { mainContext } from '../../App'


const Header = () => {
    let [val, setVal] = useState('')
    let { cart, searchHandler } = useContext(mainContext)
    let SearchProduct = (e) => {
        e.preventDefault()
        searchHandler(val)
    }
    return (
        <>
            <div className="navbar">
                <h1>JDN Store</h1>
                <div className="search">
                    <form onSubmit={SearchProduct}>
                        <input onChange={(e) => setVal(e.target.value)} type="search" />
                        <button>Search</button>
                    </form>
                </div>
                <div className="links">
                    <p><NavLink to={'/'}>Home</NavLink></p>
                    <p><NavLink to={'/cart'}>Cart <span>{cart.length}</span></NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Header