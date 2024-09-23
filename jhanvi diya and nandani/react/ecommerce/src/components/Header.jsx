import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { mainContext } from '../App'

const Header = () => {
    let { cart } = useContext(mainContext)
    return (
        <>
            <div className="navbar">
                <h1>JDN Store</h1>
                <div className="links">
                    <p><NavLink to={'/'}>Home</NavLink></p>
                    <p><NavLink to={'/cart'}>Cart <span>{cart.length}</span></NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Header
