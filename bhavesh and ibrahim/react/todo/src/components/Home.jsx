import React from 'react'
import { useSelector } from 'react-redux'
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Home = () => {
    let todosDetails = useSelector((x) => x.todos)
    return (
        <>
            <div className="vh-100 d-flex align-items-center justify-content-center w-100 bg-danger">
                <NavLink to={'/add'}>
                    Add Todo
                </NavLink>
                <div className='bg-info p-5 w-50'>
                    {
                        todosDetails.todos.map((x) => {
                            return <div className=' p-2 bg-white my-3 d-flex gap-3 align-items-center justify-content-between'>
                                <span>
                                    <span style={{ height: '10px', width: '10px', borderRadius: '50px', background: x.status ? 'green' : 'yellow', display: 'inline-block' }}></span>
                                    <span>{x.title}</span>
                                </span>
                                <span> <button className='bg-transparent border-0'><FaTrash /></button>
                                    <button className='bg-transparent border-0'><CiEdit /></button></span>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home
