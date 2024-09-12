import React from 'react'

const Home = ({ user, age }) => { //(props)
    return (
        <div>
            <h1>Hello {user.name} | {age}</h1>

        </div>
    )
}

export default Home
