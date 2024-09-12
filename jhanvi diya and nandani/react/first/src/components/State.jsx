import React, { useState } from 'react' // import useState 

const State = () => {
    let [name, setName] = useState('jhanvi') // same as let name = 'jhanvi'
    let [color, setColor] = useState(false)
    let [count, setCount] = useState(0)
    function ChangeHeading() {
        // console.log('before', name)
        setName('nandani') // name = 'jhanvi'
        setColor(!color)
        setCount(count + 1)
        // console.log('after', name)
    }
    return (
        <div>
            <h1 style={{ color: color ? 'red' : 'blue' }}>Hello {name}</h1>
            <button onClick={ChangeHeading}>Change</button>
            <hr />
            <h1>Count : {count}</h1>
        </div>
    )
}

export default State
