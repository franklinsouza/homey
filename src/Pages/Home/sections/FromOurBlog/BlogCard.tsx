import { Calendar, User } from 'lucide-react';
import img from '../../../../assets/39-2-360x360.jpg';

const BlogCard = () => {
  return (
    <div className='overflow-hidden rounded-md bg-white'>
      <header className='relative w-full h-[235px] flex items-end pb-6 overflow-hidden'>
        <a href='#' className=' before:opacity-70 before:w-full before:h-full before:absolute before:top-0 before:bg-gradient-to-b before:from-transparent before:z-[1] before:to-[#202020] group'> 
          <img src={img} alt='Cover' className='absolute z-0 top-0 w-full h-full object-cover group-hover:scale-110 duration-500'/> 
        </a>
      </header>

      <div className='py-5 px-6'>
        <h2 className='text-lg font-bold mb-5'>
          <a href='#' title='City Penthouse In Central City'>
            Here’s What People Are Saying About Rentals
          </a>
        </h2>
        <p className='text-sm font-light mb-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…
        </p>

        <div className='flex justify-between text-sm font-light'>
          <span className='flex items-center'>
            <Calendar size={15} className='mr-1'/>
            2 months ago
          </span>
          <span className='flex items-center'>
            <User size={15} className='mr-1'/>
            <span className='text-[#f15e75]'>By User</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;