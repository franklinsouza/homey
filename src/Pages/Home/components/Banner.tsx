import banner from '../../../assets/19.jpg';
import Container from '../../../components/Container';
import SearchForm from './SearchForm';

const Banner = () => {
  return (
    <div className='flex h-[600px] justify-center items-center bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${banner})`}}>
      <Container>
        <div className='md:max-w-[480px]'>
          <SearchForm />
        </div>
      </Container>
    </div>
  )
}

export default Banner;