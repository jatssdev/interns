"use client"
import React, { useContext } from 'react'
import { MainContext } from '../utils/Context'


const page = () => {
    let name = useContext(MainContext)
    return (
        <div>
            <h1>About {name}</h1>
        </div>
    )
}

export default page
