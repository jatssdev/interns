import React, { useContext, useState } from 'react'
import { MainContext } from '../App'
import MyImg from '../assets/bgimg.avif'
const Home = () => {
    let [name, setName] = useState('chhagan')
    let { second, setUser } = useContext(MainContext)
    function ChangeName() {

        console.log(name)

        setName('jatin') //same as name = 'jatin'
        console.log(name)

    }
    return (
        <div >
            <h1 style={{ backgroundImage: `url(${MyImg})` }} className='text-4xl  h-screen w-full bg-cover font-bold'>Hello {name}</h1>
            {/* <img src={MyImg} alt="" /> */}
            <button onClick={ChangeName}>{name}</button>
            <button onClick={() => setUser({ name: 'jatin' })}>Login As Jatin</button>
            <button onClick={() => setUser({ name: 'bansari' })}>Login As Bansari</button>
        </div>
    )
}

export default Home


// style = {{ backgroundColor: 'red', height: '100vh', width: '100%' }} ---> inline css in react 