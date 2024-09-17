import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { mainContext } from './App'
function Header() {
    let { dark, setSearchVal, cart, SearchHandler, DarkMode } = useContext(mainContext)
    return (
        <>
            <div className="navbar">
                <p><NavLink to={'/'}>Home</NavLink></p>
                <p><NavLink to={'/about'}>About</NavLink></p>
                <p><NavLink to={'/state'}>Use State</NavLink></p>
                <p><NavLink to={'/cart'}>Cart{cart.length}</NavLink></p>
                <p><NavLink to={'/register'}>Register</NavLink></p>
                <p><button onClick={DarkMode} > {dark ? 'Light Mode' : 'Dark Mode'}</button></p>
                <div className="search">
                    <form onSubmit={SearchHandler}>
                        <input onChange={(e) => setSearchVal(e.target.value)} type="search" placeholder='search...' />
                        <button>Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Header