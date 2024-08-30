import React, { useState } from 'react'

const Register = () => {
    let [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    function registerHandler(e) {
        e.preventDefault();

        try {
            if (!user.name) throw 'USer Name is required'


            console.log(user)
        } catch (e) {
            console.log(e)
        }
    }
    function userValueHandler(e) {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form onSubmit={registerHandler} className='shadow w-2/5 mx-auto p-6'>
                <h1 className='text-center text-2xl mb-4'>Register</h1>
                <div className='my-3'>
                    <input type="text" name='name' onChange={userValueHandler} className='border w-full p-2 ' placeholder='Enter your name' />
                </div>
                <div className='my-3'>
                    <input type="text" name='email' onChange={userValueHandler} className='border w-full p-2 ' placeholder='Enter your Email' />
                </div>
                <div className='my-3'>
                    <input type="text" name='password' onChange={userValueHandler} className='border w-full p-2 ' placeholder='Enter your password' />
                </div>
                <div className='my-3'>
                    <button className='bg-black text-white px-6 py-2 rounded-sm'>Register</button>
                </div>

            </form>
        </div>
    )
}

export default Register
