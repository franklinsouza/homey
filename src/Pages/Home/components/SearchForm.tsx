import { X, User } from "lucide-react";

const SearchForm = () => {
  return(
    <div className='bg-white p-5 absolute top-0 right-0 bottom-0 left-0 w-full'>
      <span className="flex justify-between items-center text-lg font-bold mb-7">
        Search
        <X size={22} color={'#3b4249'}/>
      </span>
      <form>
        <select className='w-full mb-3 bg-white border-[1px] border-[#ccc] rounded-md p-4'>
          <option value='ee'>Athens</option>
          <option value='ee'>Bramptom</option>
          <option value='ee'>Bridgend</option>
        </select>

        <div className='grid grid-cols-2 gap-2 mb-3'>
          <input type='text' placeholder="Text" className='bg-white border-[1px] border-[#ccc] rounded-md py-3 px-4'/>
          <input type='text' placeholder="Text" className='bg-white border-[1px] border-[#ccc] rounded-md py-3 px-4'/>
        </div>

        <div className='mb-3'>
          <User />
          <input type='text' placeholder="Text" className='bg-white border-[1px] border-[#ccc] rounded-md py-3 px-4 w-full'/>
        </div>

        <button className='bg-[#f15e75] text-[#FFF] w-full py-3 font-semibold rounded-[5px] text-center'>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchForm;