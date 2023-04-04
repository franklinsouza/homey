import Container from "../../../../components/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

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
            <img src='https://demo02.gethomey.io/wp-content/uploads/2018/10/logo-2.jpg' className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://demo02.gethomey.io/wp-content/uploads/2018/10/logo-2.jpg' className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://demo02.gethomey.io/wp-content/uploads/2018/10/logo-2.jpg' className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://demo02.gethomey.io/wp-content/uploads/2018/10/logo-2.jpg' className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://demo02.gethomey.io/wp-content/uploads/2018/10/logo-2.jpg' className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://demo02.gethomey.io/wp-content/uploads/2018/10/logo-2.jpg' className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://demo02.gethomey.io/wp-content/uploads/2018/10/logo-2.jpg' className="mx-auto"/>
          </SwiperSlide>
        </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default OurPartners;