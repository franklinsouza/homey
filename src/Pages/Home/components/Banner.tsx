import banner from '../../../assets/39-4.jpg';
import Container from '../../../components/Container';
import SearchForm from './SearchForm';

const Banner = () => {
  return (
    <div className='flex h-[600px] justify-center items-center bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${banner})`}}>
      <Container>
        <SearchForm />
      </Container>
    </div>
  )
}

export default Banner;