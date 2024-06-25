import React, { useState } from 'react'

const UseState = ({ setCount, count }) => {
    let [name, setName] = useState(false)

    return (
        <>
            <h1>
                Hellooo {name ? 'jatin' : 'rohit'}
            </h1>
            <button onClick={() => { setName(!name); setCount(count + 1) }}>Change</button>
        </>
    )
}

export default UseState
