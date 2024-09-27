import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { maincontext } from "../App";
import axios from "axios";
import Swal from 'sweetalert2';

const UserEdit =({user,setuser,setshowform,getallUsers}) => {
    console.log(user)
    function userValue(e){
        setuser({...user, [e.target.name]: e.target.value})
    }
    async function formhandle(e){
        e.preventDefault()
        let response = await axios.put(`http://localhost:9000/user/${user._id}`,user)
        console.log(response)
        Swal.fire({
            title: "Success",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: "#ffe4e6"
          });
          setshowform(false)
          getallUsers()
    }
   
    return(
        <>
            <div className="bg-rose-50 min-h-screen p-5">
                <div className="bg-white w-1/2 p-9 m-auto border rounded-md">
                <h1 className="text-2xl text-2xl font-bold mb-2">Update</h1>
                    <form className="space-y-5" onSubmit={formhandle}>
                    <div>
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Name
                        </label>
                        <input type="text" value={user.name} onChange={userValue} name="name" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div >
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Email
                        </label>
                        <input type="email" value={user.email} onChange={userValue} name="email" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div className="">
                        <button className="p-2 block m-auto font-bold  border-gray-200 bg-rose-100 rounded-md">Update</button>
                    </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default UserEdit;