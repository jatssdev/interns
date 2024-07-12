import axios from 'axios'
import React, { useEffect, useState } from 'react'
let Model = ({ userVAl, getAllUsers, setCurUSer }) => {
    let [user, setUser] = useState({ name: '', email: '' })
    const EditUSer = async (e) => {
        e.preventDefault()
        let result = await axios.put(`http://localhost:9000/user/edit/${userVAl._id}`, user)
        if (result.data.success) {
            setCurUSer({})
            alert(result.data.message)
            getAllUsers()
        }
    }
    useEffect(() => {
        setUser(userVAl)
    }, [])
    return (
        <>
            <div className="bg-gray-400 fixed w-1/2 top-1/2 p-12 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <form onSubmit={EditUSer} action="">
                    <div className='my-3 '>
                        <input className='p-2 border w-full' onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" name={'name'} value={user.name} />
                    </div>
                    <div className='my-3 '>
                        <input className='p-2 border w-full' onChange={(e) => setUser({ ...user, email: e.target.value })} type="text" name='email' value={user.email} />
                    </div>
                    <div className='my-3 '>
                        <input className='p-2 border bg-blue-400' type="submit" value="Change" />
                    </div>
                </form>
            </div>
        </>
    )
}
const Home = () => {
    let [curUser, setCurUSer] = useState({
        name: '', email: ''
    })
    let [users, setUSers] = useState([])

    let getAllUsers = async () => {
        let result = await axios.get('http://localhost:9000/users')
        console.log(result.data)
        setUSers(result.data)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const DeleteUser = async (id) => {
        let result = await axios.delete(`http://localhost:9000/user/delete/${id}`)
        if (result.data.success) {
            alert(result.data.message)
            getAllUsers()
        }
    }

    return (
        <div>
            <h1 className='text-center text-2xl w-1/2 py-5'>users</h1>
            <div className="wrapper">
                {
                    users.map((user, index) => {
                        return <div key={index} className="flex justify-between w-1/2 shadow p-4 my-2">
                            <h3>{index + 1} : {user.name}</h3>
                            <div>
                                <button className='bg-red-400 mx-2 px-3 py-2 rounded-md text-white' onClick={() => DeleteUser(user._id)}>Delete</button>
                                <button onClick={() => setCurUSer(user)} className='bg-blue-400 mx-2 px-3 py-2 rounded-md text-white'>Edit</button>
                            </div>
                        </div>
                    })
                }
            </div>
            {
                curUser.name && <Model getAllUsers={getAllUsers} setCurUSer={setCurUSer} userVAl={curUser} />
            }
        </div>
    )
}

export default Home
