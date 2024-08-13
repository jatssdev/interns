import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <p><Link href={'/'}>Home</Link></p>
            <p><Link href={'/about'}>About</Link></p>
            <p><Link href={'/service'}>Service</Link></p>

        </div>
    )
}

export default Header
