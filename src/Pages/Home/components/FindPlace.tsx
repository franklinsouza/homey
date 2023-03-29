import Container from "../../../components/Container";
import FindCard from "./FindCard";
import img from '../../../assets/39-2-360x360.jpg';

const FindPlace = () => {
  return (
    <section>
      <Container className="py-16">
        <h2 className="text-center text-3xl font-bold mb-8">
          Find a Place That Fits Your Comfort
        </h2>
        
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-28'>
          <FindCard title='Apartament' cover={img}/>
          <FindCard title='Bed & Breakfast' cover={img}/>
          <FindCard title='Condo' cover={img}/>
          <FindCard title='Apartament' cover={img}/>
          <FindCard title='Bed & Breakfast' cover={img}/>
          <FindCard title='Condo' cover={img}/>
        </div>

        <a href='#' title='Find More Places To Rent' className='mb-20 border border-1 border-[#3b4249] py-2 px-2 font-semibold block text-center w-[225px] mx-auto rounded-[5px] hover:bg-[#3b4249] hover:text-[#fff] duration-300'>
          Find More Places To Rent
        </a>
      </Container>
    </section>
  )
}

export default FindPlace;