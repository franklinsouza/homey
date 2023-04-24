import Container from "../../../../components/Container";
import TrendingDestinationsCard from "./TrendingDestinationsCard";
import la from '../../../../assets/los-angeles-2-360x360.png';
import mi from '../../../../assets/miami-beach-3-360x360.png';
import ny from '../../../../assets/new-york-2-360x360.png';
import sf from '../../../../assets/san-fracisco-2-360x360.jpg';

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
          <TrendingDestinationsCard 
            title='Los Angeles' 
            cover={la}
          />
          <TrendingDestinationsCard 
            title='Miami' 
            cover={mi}
          />
          <TrendingDestinationsCard 
            title='New York' 
            cover={ny} 
          />
          <TrendingDestinationsCard 
            title='San Francisco' 
            cover={sf}
          />
        </div>
      </Container>
    </section>
  )
}

export default TrendingDestinations;