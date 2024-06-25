import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [val1, setVal1] = useState(0)
    let [val2, setVal2] = useState(0)
    useEffect(() => {
        console.log('rendered')
    }, [val1])
    const ChangeVal1 = () => {
        setVal1(val1 + 1)
    }
    const ChangeVal2 = () => {
        setVal2(val2 + 1)
    }
    return (
        <div>
            <h1>Val1 : {val1} <button onClick={ChangeVal1}>Change Val1</button></h1>
            <h1>Val2 : {val2} <button onClick={ChangeVal2}>Change Val1</button></h1>
        </div>
    )
}

export default UseEffect
