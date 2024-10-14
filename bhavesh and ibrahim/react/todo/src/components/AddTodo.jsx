import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../redux/todoSlice';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTodo = () => {
    let [details, setDetails] = useState({
        title: '', date: ''
    })
    let navigate = useNavigate()
    let dispatch = useDispatch()
    function AddTodoHandler(e) {
        e.preventDefault();
        dispatch(add(details))
        Swal.fire({

            title: 'Success!',
            text: 'Your Todo has been added',
            icon: 'success',
        }).then(() => {
            navigate('/')
        })

    }
    return (
        <>
            <div>
                <Link to={'/'}>Back...</Link>
                <form onSubmit={AddTodoHandler}>
                    <div><input onChange={(e) => setDetails({ ...details, title: e.target.value })} type="text" name='title' placeholder='Todo' /></div>
                    <div><input onChange={(e) => setDetails({ ...details, date: e.target.value })} type="date" name='date' placeholder='Date' /></div>
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo
