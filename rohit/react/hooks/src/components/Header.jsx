import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='navbar'>
            <p><NavLink to={'/'}>Home</NavLink></p>
            <p><NavLink to={'/ref'}>Use Ref</NavLink></p>
            <p><NavLink to={'/state'}>Use State</NavLink></p>
            <p><NavLink to={'/effect'}>Use Effect</NavLink></p>
            <p><NavLink to={'/form'}>Forms</NavLink></p>



        </div>
    )
}

export default Header
