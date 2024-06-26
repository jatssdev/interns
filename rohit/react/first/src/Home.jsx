import React from 'react'
import './Home.css'
import MainImg from './p.bmp'
import BgImg from './bg.bmp'
const Home = () => {
    let MainstyleObj = { backgroundColor: 'red', }
    return (
        <>
            <section style={{ backgroundImage: `url(${BgImg})` }} >
                <div style={MainstyleObj} className='home'>
                    <h1>Home Page</h1>
                </div>
                <h2>Dusra element</h2>
                <img src={MainImg} alt="" />
            </section>
        </>

    )
}

export default Home
