"use client"
import React, { useState } from 'react'

const page = () => {
    let [val, setVal] = useState('hello')
    return (
        <div>
            service {val}
        </div>
    )
}

export default page
