import React, { useContext, useState } from 'react'
import { mainContext } from '../App'

const About = ({ user }) => {
    let [userName, setUserName] = useState('')
    let userValueHandler = (e) => {
        setUserName(e.target.value)
    }
    let { setUSers, users } = useContext(mainContext)
    let addUSerHandler = (e) => {
        e.preventDefault()
        setUSers([...users, userName])
        setUserName('')

    }
    return (
        <div>
            <h1>my name is {user.name}</h1>
            <h1>Add User</h1>
            <form onSubmit={addUSerHandler}>

                <div><input value={userName} onChange={userValueHandler} type="text" name='name' placeholder='Enter User name' /></div>
                <button>Add User</button>
            </form>

        </div>
    )
}

export default About
