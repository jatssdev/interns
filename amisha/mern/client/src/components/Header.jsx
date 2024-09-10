import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="navbar">
                <h1>Amisha</h1>
                <div className="links">
                    <p><NavLink to='/'>Home</NavLink></p>
                    <p><NavLink to='/register'>Register</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Header
