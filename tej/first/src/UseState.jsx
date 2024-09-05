import React, { useState } from 'react'

const UseState = ({ dark }) => {
    let [name, setName] = useState('Tej') // same as let name = 'Tej'
    let [bg, setBg] = useState('blue')

    function ChangeName() {
        setName('Jatin')

    }

    function handleChange(e) {

        setBg(e.target.value)
    }
    let [count, setCount] = useState(0)

    function Increase() {
        // count + count + 1
        setCount(count + 10)
    }

    return (
        <div className={dark ? 'dark home' : 'light home'} >
            <input type="text" onChange={handleChange} />
            <h1 style={{ backgroundColor: bg }}>Hello {name}</h1>

            <button onClick={ChangeName}>Click</button>

            <hr />
            <h1>Count : <span>{count}</span></h1>
            <button onClick={Increase}>Increase</button>

        </div>
    )
}

export default UseState
