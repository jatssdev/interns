import React, { useRef } from 'react'

const Ref = () => {
    let head = useRef()

    function ChangeSomething() {
        // console.log(head.current)
        head.current.style.color = 'red'
    }

    // ref={head} ===> id = "head"
    //let head = useRef() ==> let head = document.getElementById('head')
    return (
        <div>
            <h1 ref={head}>Heading</h1>
            <button onClick={ChangeSomething}>Change Something</button>
        </div>
    )
}

export default Ref
