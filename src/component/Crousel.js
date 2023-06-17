import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pic1 from '../images/match-hour.svg'
import '../style/crousel.css'

const Crousel = () => {
  return (
    <>
      <div className='crohead' >
        <span>LAKHS OF HAPPY COUPLES</span>
        <h2> Matched by <span> Jeevansathi</span></h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <SwiperSlide>
          <div className='width20' >
            <img src={pic1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='width20' >
            <img src={pic1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='width20' >
            <img src={pic1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='width20' >
            <img src={pic1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='width20' >
            <img src={pic1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='width20' >
            <img src={pic1} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Crousel
