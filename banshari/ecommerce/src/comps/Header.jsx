import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../App'

const Header = () => {
    let { cart } = useContext(MainContext)
    return (
        <>
            <div className="navbar">
                <h1>Bansari's Store</h1>
                <div className="links">
                    <p><NavLink to={'/'}>Home</NavLink></p>
                    <p><NavLink to={'/cart'}>Cart <span>{cart.length}</span></NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Header
