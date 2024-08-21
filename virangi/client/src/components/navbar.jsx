import React from 'react'
import { NavLink } from 'react-router-dom'
const navbar = () => {
    return (
        <div>
            <p><NavLink to='/'>Home</NavLink></p>
            <p><NavLink to='/login'>Login</NavLink></p>
            <p><NavLink to='/register'>Register</NavLink></p>
        </div>
    )
}

export default navbar
