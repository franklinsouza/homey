import Container from "../../../../components/Container";
import FeaturedHomesCard from "./FeaturedHomesCard";
// import img from '../../../assets/39-2-360x360.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

const FeaturedHomes = () => {
  return (
    <section className="bg-[#F7F8F9]">
      <Container className="py-24">
        <div className="mb-8">
          <h2 className="text-center text-3xl font-bold mb-5">
            Featured Homes
          </h2>
          <p className='text-center font-normal'>
            Hand-picked selection of quality places
          </p>
        </div>

        <div className="">
          <div className="flex gap-x-1 justify-end mb-3">            
            <button type="button" className="prev border border-[#f58d9d] text-[#f58d9d] text-center text-xs font-medium px-3 py-1 rounded-sm disabled:opacity-50 hover:bg-[#f58d9d] hover:text-white duration-200">
              Prev
            </button>
            <button type="button" className="next border border-[#f58d9d] text-[#f58d9d] text-center text-xs font-medium px-3 py-1 rounded-sm disabled:opacity-50 hover:bg-[#f58d9d] hover:text-white duration-200">
              Next
            </button>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              530 : {
                slidesPerView: 2,
              },
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
              prevEl: '.prev',
              nextEl: '.next',
            }}
          >
            <SwiperSlide>
              <FeaturedHomesCard/>
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedHomesCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedHomesCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedHomesCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedHomesCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedHomesCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedHomesCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedHomesCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedHomesCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedHomes;