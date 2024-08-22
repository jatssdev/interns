import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = ({ user, LogoutHandler }) => {
    return (
        <>
            <Navbar user={user} LogoutHandler={LogoutHandler} />
            <Outlet />
        </>
    )
}

export default Layout
