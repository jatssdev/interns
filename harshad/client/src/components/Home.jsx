import React from 'react'

const Home = ({ user }) => {
    return (
        <div>
            {
                user && 'Hello ' + user?.fullName
            }
        </div>
    )
}

export default Home
