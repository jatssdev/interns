import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    let [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    function userValue(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function HandleRegister(e) {
        e.preventDefault()
        let result = await axios.post('http://localhost:9000/register', user)
        console.log(result)
        alert(result.data.message)
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={HandleRegister} >
                <div>
                    <input onChange={userValue} type="text" name='name' placeholder='Name' />
                </div>
                <div>
                    <input onChange={userValue} type="text" name='email' placeholder='Email' />
                </div>
                <div>
                    <input onChange={userValue} type="text" name='password' placeholder='Password' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register
