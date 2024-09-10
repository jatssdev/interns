import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    let [users, setUsers] = useState([])

    let getAllUsers = async () => {
        let result = await axios.get('http://localhost:9000/users')
        setUsers(result.data)
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    let deleteUser = async (id) => {
        let result = await axios.delete('http://localhost:9000/user/' + id)
        alert('user Deleted')
        getAllUsers()
    }
    return (
        <div>
            <div className="wrapper">
                {
                    users.map((x) => {
                        return <h1>{x.name} <button onClick={() => deleteUser(x._id)}>Delete</button></h1>
                    })
                }
            </div>
        </div>
    )
}

export default Home
