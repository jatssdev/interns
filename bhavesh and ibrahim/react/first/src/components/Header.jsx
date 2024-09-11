import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="navbar">
                <h1>Logo</h1>
                <div className="links">
                    <p><NavLink to={'/'}>Home</NavLink></p>
                    <p><NavLink to={'/about'}>About</NavLink></p>
                    <p><NavLink to={'/contact'}>Contact</NavLink></p>

                </div>
            </div>

        </>
    )
}

export default Header