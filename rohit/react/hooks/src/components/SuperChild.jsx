import React, { useContext } from 'react'
import { MainContext } from '../App'

const SuperChild = () => {
    let { name, age } = useContext(MainContext) // get context value using object destructuring
    return (
        <div>
            hello {name}, {age}
        </div>
    )
}

export default SuperChild
