import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ user, LogoutHandler }) => {
    return (
        <div>
            <p><NavLink to={'/'}>Home</NavLink></p>
            {

                user ? <p><button onClick={LogoutHandler}>Logout</button></p> : <div>
                    <p><NavLink to={'/register'}>Register</NavLink></p>
                    <p><NavLink to={'/login'}>Login</NavLink></p>
                </div>
            }

        </div>
    )
}

export default Navbar
