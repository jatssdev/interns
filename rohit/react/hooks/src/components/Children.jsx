import React, { useContext } from 'react'
import { MainContext } from '../App'
import SuperChild from './SuperChild'

const Children = () => {
    let value = useContext(MainContext) // get context value in value named variable
    return (
        <div >
            children
            <h1>Hello {value.name} </h1>
            <hr />
            <SuperChild />
        </div>
    )
}

export default Children
