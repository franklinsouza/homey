import banner from '../../../assets/39-4.jpg';
import FormAction from './FormAction';
import SearchForm from './SearchForm';

const Banner = () => {
  return (
    <div className='flex h-[600px] justify-center items-center bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${banner})`}}>
      <div className='container mx-auto px-4'>
        {/* <img src={banner}/> */}
        <FormAction />
        <SearchForm />
      </div>
    </div>
  )
}

export default Banner;