import React from 'react'

const Intro = ({ name, msg }) => {
    return (
        <div>
            <h1>{msg} {name}</h1>
        </div>
    )
}

export default Intro
