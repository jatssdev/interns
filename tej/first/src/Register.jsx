import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    let [user, setUser] = useState({
        name: '', email: '', password: ''
    })
    function userValue(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    async function RegisterHandler(e) {
        e.preventDefault()
        let response = await axios.post('http://localhost:9000/api/register', user)
        console.log(response.data)
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={RegisterHandler}>
                <div><input name='name' onChange={userValue} type="text" placeholder='Name' /></div>
                <div><input name='email' onChange={userValue} type="text" placeholder='Email' /></div>
                <div><input name='password' onChange={userValue} type="text" placeholder='Password' /></div>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Register
