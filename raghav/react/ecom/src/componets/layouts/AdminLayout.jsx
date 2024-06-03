import React from 'react'
import SideBar from '../pages/admin/SideBar'
import Home from '../pages/admin/Home'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-8 p-4 border h-screen">
                <div className="col-span-2 bg-green-200">
                    <SideBar />
                </div>
                <div className="col-span-10 bg-red-200">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout
