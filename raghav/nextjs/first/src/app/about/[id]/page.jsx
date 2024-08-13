"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    let params = useParams()


    return (
        <div>
            Hello {params.id}
        </div>
    )
}

export default page
