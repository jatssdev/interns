import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UpdateForm from './UpdateForm'

const Users = () => {
    let [users, setUsers] = useState([])
    let [user, setUser] = useState({
        name: '',
        email: '',

    })
    let [showModel, setShowModel] = useState(false)
    let getAllUsers = async () => {
        let response = await axios.get('http://localhost:9000/users');
        console.log(response.data)
        setUsers(response.data.users)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    async function deleteUser(id) {
        let response = await axios.delete(`http://localhost:9000/user/${id}`)
        console.log(response)
        getAllUsers()
    }
    function UpdateUser(userVal) {
        setUser(userVal)
        setShowModel(true)
    }

    return (
        <div>
            <h1>Users</h1>


            <div className="p-12">
                {
                    users?.length ? users?.map((x) => {

                        return <h2 className='flex justify-between border-b p-3'>{x.name} <button className='text-green-600' onClick={() => UpdateUser(x)}>Edit</button> <button onClick={() => deleteUser(x._id)} className='text-red-400'>Delete</button></h2>
                    }) : 'no data found'
                }

                {

                    showModel && <UpdateForm setShowModel={setShowModel} getAllUsers={getAllUsers} user={user} setUser={setUser} />
                }

            </div>
        </div>
    )
}

export default Users
