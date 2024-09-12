import React, { useState } from 'react'

const State = () => {
    let [name, setName] = useState('bhavesh') // same as let name = 'bhavesh'

    function CHangeName() {

        setName('ibrahim') //same as name = 'ibrahim'

    }
    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={CHangeName}>Change Name</button>
        </div>
    )
}

export default State
