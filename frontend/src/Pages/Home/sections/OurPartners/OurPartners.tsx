import Container from "../../../../components/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

import partner01 from '../../../../assets/logo-1.jpg';
import partner02 from '../../../../assets/logo-6.jpg';
import partner03 from '../../../../assets/logo-2.jpg';
import partner04 from '../../../../assets/logo-3.jpg';
import partner05 from '../../../../assets/logo-4.jpg';
import partner06 from '../../../../assets/logo-5.jpg';

const OurPartners = () => {
  return(
    <section className="bg-[#F7F8F9]">
      <Container className="py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-5">
            Our Partners
          </h2>
          <p className='font-normal'>
            We only work with the best companies around the globe
          </p>
        </div>
        <div>
        <div className="flex gap-x-1 justify-end mb-3">            
          <button type="button" className="prev-partner border border-[#f58d9d] text-[#f58d9d] text-center text-xs font-medium px-3 py-1 rounded-sm disabled:opacity-50 hover:bg-[#f58d9d] hover:text-white duration-200">
            Prev
          </button>
          <button type="button" className="next-partner border border-[#f58d9d] text-[#f58d9d] text-center text-xs font-medium px-3 py-1 rounded-sm disabled:opacity-50 hover:bg-[#f58d9d] hover:text-white duration-200">
            Next
          </button>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            768 : {
              slidesPerView: 3,
            },
            960 : {
              slidesPerView: 4,
            }
          }}
          pagination={{clickable: true}}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.prev-partner',
            nextEl: '.next-partner',
          }}
        >
          <SwiperSlide>
            <img src={partner01} className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={partner02} className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={partner03} className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={partner04} className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={partner05} className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={partner06} className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={partner01} className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={partner02} className="mx-auto"/>
          </SwiperSlide>
        </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default OurPartners;