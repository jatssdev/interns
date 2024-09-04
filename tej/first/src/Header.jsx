import { NavLink } from 'react-router-dom'
function Header({ dark, DarkMode }) {
    return (
        <>
            <div className="navbar">
                <p><NavLink to={'/'}>Home</NavLink></p>
                <p><NavLink to={'/about'}>About</NavLink></p>
                <p><NavLink to={'/state'}>Use State</NavLink></p>
                <p><button onClick={DarkMode} > {dark ? 'Light Mode' : 'Dark Mode'}</button></p>
            </div>
        </>
    )
}

export default Header