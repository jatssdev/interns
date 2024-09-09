import { NavLink } from 'react-router-dom'
function Header({ dark, cart, DarkMode }) {
    return (
        <>
            <div className="navbar">
                <p><NavLink to={'/'}>Home</NavLink></p>
                <p><NavLink to={'/about'}>About</NavLink></p>
                <p><NavLink to={'/state'}>Use State</NavLink></p>
                <p><NavLink to={'/cart'}>Cart{cart.length}</NavLink></p>
                <p><button onClick={DarkMode} > {dark ? 'Light Mode' : 'Dark Mode'}</button></p>
            </div>
        </>
    )
}

export default Header