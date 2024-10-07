import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { remove, status } from '../redux/todoSlice';

const Home = () => {
    let todosDetails = useSelector((x) => x.todos)
    let dispatch = useDispatch()
    return (
        <>
            <div className="vh-100 d-flex align-items-center justify-content-center w-100 bg-danger">
                <NavLink to={'/add'}>
                    Add Todo
                </NavLink>
                <div className='bg-info p-5 w-50'>
                    {
                        todosDetails.todos.map((x, i) => {
                            return <div className=' p-2 bg-white my-3 d-flex gap-3 align-items-center justify-content-between'>
                                <span onClick={() => dispatch(status(i))}>
                                    <span style={{ height: '10px', width: '10px', borderRadius: '50px', background: x.status ? 'green' : 'yellow', display: 'inline-block' }}></span>
                                    <span>{x.title}</span>
                                </span>
                                <span> <button onClick={() => dispatch(remove(i))} className='bg-transparent border-0'><FaTrash /></button>
                                    <button className='bg-transparent border-0'><CiEdit /></button></span>
                            </div>
                        })
                    }
                </div >
            </div >
        </>
    )
}

export default Home
