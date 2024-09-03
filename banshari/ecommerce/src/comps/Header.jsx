import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../App'

const Header = () => {
    let [login, setLogin] = useState(false)
    let { cart, setSearchVal, SearchHandler } = useContext(MainContext)

    return (
        <>
            <div className="navbar">
                <h1>Bansari's Store</h1>
                <div className="search">
                    <form onSubmit={SearchHandler}>
                        <input type="search" className='text-black' onChange={(e) => setSearchVal(e.target.value)} name='searchVal' />
                        <button>Search</button>
                    </form>
                </div>
                <div className="links">
                    <p><NavLink to={'/'}>Home</NavLink></p>
                    <p><NavLink to={'/cart'}>Cart <span>{cart.length}</span></NavLink></p>
                    {
                        login ? <p><button onClick={() => setLogin(false)} to={'/logout'}>Logout </button></p> : <p><button onClick={() => setLogin(true)} to={'/login'}>Login </button></p>
                    }

                </div>
            </div>
        </>
    )
}

export default Header
