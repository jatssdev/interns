import React, { useState } from 'react'
import axios from 'axios'
const UpdateForm = ({ user, setShowModel, getAllUsers, setUser }) => {

    function userValue(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function HandleRegister(e) {
        e.preventDefault()
        let result = await axios.put(`http://localhost:9000/user/${user._id}`, user)
        console.log(result)
        alert(result.data.message)
        getAllUsers()
        setShowModel(false)
    }

    return (
        <div>
            <h1>Update</h1>
            <form onSubmit={HandleRegister} >
                <div>
                    <input value={user.name} onChange={userValue} type="text" name='name' placeholder='Name' />
                </div>
                <div>
                    <input value={user.email} onChange={userValue} type="text" name='email' placeholder='Email' />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateForm
