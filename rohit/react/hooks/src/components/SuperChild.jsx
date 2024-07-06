import React, { useContext, useEffect } from 'react'
import { MainContext } from '../App'
import { useSelector } from 'react-redux'

const SuperChild = () => {
    let { name, age } = useContext(MainContext) // get context value using object destructuring

    let products = useSelector((state) => state.products)

    useEffect(() => {
        console.log(products)
    }, [])
    return (
        <div>
            hello {name}, {age}
        </div>
    )
}

export default SuperChild
