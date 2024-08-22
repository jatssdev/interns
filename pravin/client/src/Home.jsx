import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    let [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])
    let getAllUsers = async () => {
        let response = await axios.get('http://localhost:8000/users')
        setUsers(response.data)
    }
    async function DeteleUser(id) {
        let response = await axios.delete('http://localhost:8000/delete/' + id)
        alert(response.data)
        getAllUsers()
    }
    return (
        <div>
            {
                users.map((user) => {
                    return <h1>{user.name} <button onClick={() => DeteleUser(user._id)}>Delete</button></h1>
                })
            }
        </div>
    )
}

export default Home
