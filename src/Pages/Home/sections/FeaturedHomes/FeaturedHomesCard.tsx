import { Bed, ShowerHead, User, Star } from 'lucide-react';
import img from '../../../../assets/39-2-360x360.jpg';
import { Link } from 'react-router-dom';

const FeaturedHomesCard = () => {
  return(
    <div className='overflow-hidden rounded-md bg-white'>
      <header className='relative w-full h-[180px] flex items-end pb-6 overflow-hidden'>
        <Link to={'/single'} className='before:opacity-70 before:w-full before:h-full before:absolute before:top-0 before:bg-gradient-to-b before:from-transparent before:z-[1] before:to-[#202020] group'>
          <img src={img} alt='Cover' className='absolute z-0 top-0 w-full h-full object-cover group-hover:scale-110 duration-500'/> 
        </Link>
        <span className='absolute z-[2] uppercase text-white bg-[#7ACDDB] text-[0.8rem] top-4 left-4 py-[3px] px-[8px] rounded-[3px]'>
          Featured
        </span> 
        <div className='px-4 z-[3]'>
          <span className='text-white flex'>
            <sup className='font-light relative top-[-2px] text-base mr-1'>
              $
            </sup>
            <div className='text-2xl font-normal'>
              350.000
            </div>
            <sub className='font-light text-lg relative bottom-[-2px] ml-1'>
              /night
            </sub>
          </span>
        </div>
      </header>
      <div className='py-5 px-6'>
        <div className='mb-4'>
          <h2 className='text-lg font-bold'>
            <Link to={'/single'} title='City Penthouse In Central City'>
              City Penthouse In Central City
            </Link>
            <address className='text-sm text-[#949ca5] font-light'>
              4432 Nautilus Dr, Miami Beach, FL 33140
            </address>
          </h2>
        </div>
        <ul className='flex gap-x-3 gap-y-1 text-sm font-light mb-4 flex-wrap'>
          <li className='flex items-center'>
            <Bed size={18} className='mr-1'/>
            <span>
              2 Bedrooms
            </span>
          </li>
          <li className='flex items-center'>
            <ShowerHead size={18} className='mr-1'/>
            <span>
              2 Baths
            </span>
          </li>
          <li className='flex items-center'>
            <User size={18} className='mr-1'/>
            <span>
              4 Guests
            </span>
          </li>
          <li className='flex items-center'>
            <span>Apartament</span>
          </li>
        </ul>
        <div>
          <ul className='flex items-center gap-x-1'>
            <li>
              <Star fill='#F8B42B' color='#F8B42B' size={15}/>
            </li>
            <li>
              <Star fill='#F8B42B' color='#F8B42B' size={15}/>
            </li>
            <li>
              <Star fill='#F8B42B' color='#F8B42B' size={15}/>
            </li>
            <li>
              <Star fill='#F8B42B' color='#F8B42B' size={15}/>
            </li>
            <li>
              <Star color='#949ca5' size={15}/>
            </li>
            <li>
              <span className='font-light text-sm mt-1 block text-[#949ca5]'>
                Good
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FeaturedHomesCard;