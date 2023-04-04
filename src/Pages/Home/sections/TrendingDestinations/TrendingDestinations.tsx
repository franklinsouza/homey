import Container from "../../../../components/Container";
import TrendingDestinationsCard from "./TrendingDestinationsCard";
import img from '../../../../assets/39-2-360x360.jpg';

const TrendingDestinations = () => {
  return (
    <section>
      <Container className='py-24'>
        <div className="mb-8">
          <h2 className="text-center text-3xl font-bold mb-5">
            Trending Destinations
          </h2>
          <p className='text-center font-normal'>
            Explore our selection of the best places around the world
          </p>
        </div>

        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          <TrendingDestinationsCard title='Los Angeles' cover={img}/>
          <TrendingDestinationsCard title='Miami' cover={img}/>
          <TrendingDestinationsCard title='New York' cover={img}/>
          <TrendingDestinationsCard title='San Francisco' cover={img}/>
        </div>
      </Container>
    </section>
  )
}

export default TrendingDestinations;