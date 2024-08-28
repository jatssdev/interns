import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="navbar">
                <h1>Bansari's Store</h1>
                <div className="links">
                    <p><NavLink to={'/'}>Home</NavLink></p>
                    <p><NavLink to={'/cart'}>Cart</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Header
