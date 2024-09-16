import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    let [users, setUsers] = useState([])

    let getAllUsers = async () => {
        let response = await axios.get('http://localhost:9000/users');
        console.log(response.data)
        setUsers(response.data)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    async function deleteUser(id) {
        let response = await axios.delete(`http://localhost:9000/user/${id}`)
        console.log(response)
        getAllUsers()
    }

    return (
        <div>
            <h1>Users</h1>


            <div className="p-12">
                {
                    users.length ? users.map((x) => {
                        return <h2 className='flex justify-between border-b p-3'>{x.name} <button onClick={() => deleteUser(x._id)} className='text-red-400'>Delete</button></h2>
                    }) : 'no data found'
                }
            </div>
        </div>
    )
}

export default Users
