import React, { useRef } from 'react'

const Ref = () => {
    let head = useRef()
    function ChangeHeading() {
        console.log(head.current.innerHTML)
        head.current.style.color = 'red'
    }
    return (
        <div>
            <h1 ref={head}>HEading <button onClick={ChangeHeading}>Change</button></h1>
        </div>
    )
}

export default Ref
