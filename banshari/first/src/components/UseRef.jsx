import React, { useEffect, useRef } from 'react'

const UseRef = () => {

    let heading = useRef() // doccument.getElementById('heading')

    useEffect(() => {
        console.log(heading.current.innerHTML)
    }, [])

    return (
        <div>
            <h1 ref={heading} id='heading'>Lorem, ipsum dolor.</h1>
        </div>
    )
}

export default UseRef
