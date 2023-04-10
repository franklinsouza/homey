import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from "swiper";
import 'swiper/css';

const Gallery = () => {

  return(
    <>
      <Swiper
        slidesPerView={1}
        modules={[Controller]}
      >
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
      </Swiper>


      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        modules={[Navigation, Controller]}
        navigation={{
          prevEl: '.prev-partnerss',
          nextEl: '.next-partnerss',
        }}
      >
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>


  )
}

export default Gallery;