import React, { useState } from 'react'

const Form = () => {
    let [user, setUser] = useState({
        name: '', email: '', password: ''
    })
    const RegisterUser = (e) => {
        e.preventDefault()
        console.log(user)
    }
    const userValueHandler = (e) => {
        let { name, value } = e.target

        setUser({ ...user, [name]: value })

    }
    return (
        <div>
            <form onSubmit={RegisterUser}>

                <div><input onChange={userValueHandler} name='name' type="text" placeholder='name' /></div>
                <div><input onChange={userValueHandler} name='email' type="text" placeholder='email' /></div>
                <div><input onChange={userValueHandler} name='password' type="text" placeholder='password' /></div>
                <div><input type="submit" value={'Register'} /></div>
            </form>
        </div>
    )
}

export default Form
