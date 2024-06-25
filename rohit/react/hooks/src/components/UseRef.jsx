import React, { useRef } from 'react'

const UseRef = () => {
    let heading = useRef()

    const FUnction = () => {
        console.log(heading.current)
        heading.current.style.color = 'blue'
    }
    return (
        <div>
            <h1 ref={heading}>Hello</h1>
            <button onClick={FUnction}>Change</button>
        </div>
    )
}

export default UseRef
