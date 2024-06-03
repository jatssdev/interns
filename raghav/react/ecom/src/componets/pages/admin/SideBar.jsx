import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div>
            <p><Link to={'/admin'}>Dashboard</Link></p>
            <p><Link to={'Products'}>Products</Link></p>
            <p><Link to={'Categories'}>Categories</Link></p>
        </div>
    )
}

export default SideBar
