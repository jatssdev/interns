import React from 'react'

const Home = ({ setUser }) => {
    return (
        <div style={{ backgroundColor: 'red', height: '100vh', width: '100%' }} >
            <h1 >Hello World</h1>
            <button onClick={() => setUser({ name: 'jatin' })}>Login As Jatin</button>
            <button onClick={() => setUser({ name: 'bansari' })}>Login As Bansari</button>
        </div>
    )
}

export default Home
