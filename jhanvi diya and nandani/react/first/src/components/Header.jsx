import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="navbar">
                
                <h1>Logo</h1>
                <div className="links">
                    <p><NavLink to="/">Home</NavLink></p>
                    <p><NavLink to="/about">About</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Header
