import React, { useContext, useState } from 'react'
import { MainContext } from '../App'
import MyImg from '../assets/bgimg.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://slidemodel.com/wp-content/uploads/60560-01-e-commerce-powerpoint-template-16x9-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://slidemodel.com/wp-content/uploads/7756-01-e-commerce-slide-design-for-powerpoint-16x9-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://slidemodel.com/wp-content/uploads/60560-01-e-commerce-powerpoint-template-16x9-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://slidemodel.com/wp-content/uploads/7756-01-e-commerce-slide-design-for-powerpoint-16x9-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://slidemodel.com/wp-content/uploads/60560-01-e-commerce-powerpoint-template-16x9-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://slidemodel.com/wp-content/uploads/7756-01-e-commerce-slide-design-for-powerpoint-16x9-1.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
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