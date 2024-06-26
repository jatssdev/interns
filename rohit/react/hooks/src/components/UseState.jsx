import React, { useState } from 'react'
import Children from './Children';

const UseState = ({ setCount, count }) => {
    let [name, setName] = useState(false)

    return (
        <>
            <h1>
                Hellooo {name ? 'jatin' : 'rohit'}
            </h1>
            <button onClick={() => { setName(!name); setCount(count + 1) }}>Change</button>
            <hr />
            <Children />
        </>
    )
}

export default UseState
