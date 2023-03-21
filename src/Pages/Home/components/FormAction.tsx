import { Search } from "lucide-react";

const FormAction = () => {
  return (
    <div className='bg-white p-8 rounded-md'>
      <h1 className='text-3xl font-bold mb-3'>
        Book & Experience Amazing Places
      </h1>
      <p className='font-light mb-3'>
        Wordpress Theme For Booking and Rental
      </p>
      <form className='relative mb-1'>
        <Search color="#4f5962" size={20} strokeWidth={2} className='absolute top-[17px] left-4 pointer-events-none'/>
        <input 
          type='text' 
          className='border-[1px] border-[#ccc] rounded-md w-full py-4 pl-11 pr-4' placeholder='Location'
        />
      </form>
    </div>
  )
}

export default FormAction;