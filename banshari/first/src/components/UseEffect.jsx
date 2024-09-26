import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [mainVal, setMainVal] = useState(0)
    let [val, setVal] = useState(0)
    let [val2, setVal2] = useState(0)
    useEffect(() => {
        setMainVal(mainVal + 1)
        console.log('rendered')
    }, [val, val2])
    return (
        <div>
            <h1 data-aos="fade-up">Main Value Is {mainVal}</h1>
            <h1 data-aos="zoom-in">Value 1 : {val} <button onClick={() => setVal(val + 1)}> Increase</button></h1>
            <h1>Value 2 : {val2} <button onClick={() => setVal2(val2 + 1)}> Increase</button></h1>
        </div>
    )
}

export default UseEffect
