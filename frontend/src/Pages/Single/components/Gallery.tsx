import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller, Thumbs } from "swiper";
import 'swiper/css';

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return(
    <>
      <Swiper
        slidesPerView={1}
        modules={[Controller, Thumbs]}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
      >
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-2-1140x760.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-3-1140x760.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/19-1140x760.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/16-4-1140x760.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/15-2-1140x760.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/13-12-1140x760.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/13-6-1140x760.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/13-8-1140x760.jpg" />
        </SwiperSlide>
      </Swiper>


      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        modules={[Navigation, Controller, Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        navigation={{
          prevEl: '.prev-partnerss',
          nextEl: '.next-partnerss',
        }}
      >
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-1-120x80.jpg" className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-2-120x80.jpg" className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/28-3-120x80.jpg" className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/19-120x80.jpg" className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/16-4-120x80.jpg" className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/15-2-120x80.jpg" className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/13-12-120x80.jpg" className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/13-6-120x80.jpg" className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://demo01.gethomey.io/wp-content/uploads/2018/10/13-8-120x80.jpg" className='object-cover w-full h-full' />
        </SwiperSlide>
      </Swiper>
    </>


  )
}

export default Gallery;