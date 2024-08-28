import React, { useContext } from 'react'
import { MainContext } from '../App'

const Header = () => {
    let contextVal = useContext(MainContext) // let { name } = useContext(MainContext)

    return (
        <div>
            <h2>{contextVal.name}</h2>
        </div>
    )
}

export default Header
