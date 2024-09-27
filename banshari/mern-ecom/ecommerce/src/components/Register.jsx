import React, {  useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2' // npm i sweetalert2
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Register = () => {
    let Navigate = useNavigate();
    let [user, setUser] = useState({
        name: '',
        email: '',
        profile: null,
        password: '',
    })
    function userValue(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function redirectLogin(){
        Navigate('/login');
    }
    function ImageValue(e){
        setUser({...user,profile: e.target.files[0]})
    }

    //   --- WITHOUT FILE---
    // async function HandleRegister(e) {      
    //     e.preventDefault()
    //     console.log(user)
    //     let result = await axios.post('http://localhost:9000/user/register', user)
    //     console.log(result)
    //     alert(result.data.message)
    //     Swal.fire({
    //         title: "Success",
    //         text: result.data.message,
    //         icon: "success",
    //         confirmButtonColor: "#ffe4e6"
    //       });
    // }


    // WITH FILE
    async function HandleRegister(e) {
        e.preventDefault()
        let formdata =  new FormData
        formdata.append('name', user.name)
        formdata.append('email', user.email)
        formdata.append('password', user.password)
        formdata.append('profile', user.profile)

        console.log(user)
        let result = await axios.post('http://localhost:9000/user/register', formdata)
        console.log(result)
        alert(result.data.message)
        Swal.fire({
            title: "Success",
            text: result.data.message,
            icon: "success",
            confirmButtonColor: "#ffe4e6"
          });
    }
    return (
        <div className="min-h-screen bg-rose-50 p-5">
            <div className="bg-white  p-8  m-auto w-1/2 border rounded-md">
                <h1 className="text-2xl text-2xl font-bold mb-2">Register</h1>
                <form className="space-y-5" onSubmit={HandleRegister} encType="multipart/form-data">
                    <div>
                        <label className="block mb-1 font-bold text-sm  text-gray-500" htmlFor="">Name
                        </label>
                        <input type="text" onChange={userValue} name="name" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-sm  text-gray-500" htmlFor="">Image
                        </label>
                        <input type="file" onChange={ImageValue} name="profile" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div >
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Email
                        </label>
                        <input type="email" onChange={userValue} name="email" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Password
                        </label>
                        <input type="text" onChange={userValue} name="password" className="border-gray-200 border-2 p-2 rounded-md w-full"/>
                    </div>
                    <div className="">
                        <button className="p-2 block m-auto font-bold  border-gray-200 bg-rose-100 rounded-md">Sign Up</button>
                    </div>
                    <div className="">
                        {/* <p className="text-sm text-center">already have an account? <NavLink className="hover:text-pink-500" to={'/login'}> Sign in</NavLink></p> */}
                        <p className="text-sm text-center">already have an account? <span onClick={redirectLogin} className="hover:text-pink-500" to={'login'}> Sign in</span></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register