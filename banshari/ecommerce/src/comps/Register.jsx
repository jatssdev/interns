import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    let [user, setUser] = useState({
        name: '',
        email: '',
        profile: null,
        password: '',
    })
    function userValue(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function HandleRegister(e) {
        e.preventDefault()
        let formData = new FormData()

        formData.append('name', user.name)
        formData.append('email', user.email)
        formData.append('password', user.password)
        formData.append('profile', user.profile)

        let result = await axios.post('http://localhost:9000/user/register', formData)
        console.log(result)
        alert(result.data.message)
    }

    function userImage(e) {
        setUser({ ...user, profile: e.target.files[0] })
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={HandleRegister} encType='multipart/form-data' >
                <div>
                    <input onChange={userImage} type="file" name='profile' />
                </div>
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
