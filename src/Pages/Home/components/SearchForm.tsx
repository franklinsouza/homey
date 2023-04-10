import { X, User, Minus, Plus, Search, Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './test.css';

const SearchForm = () => {
  const [ mainForm, setMainForm ] = useState(false);
  const [ guestsForm, setGuestsForm ] = useState(false);
  const [ adults, setAdults ] = useState(0);
  const [ cildren, setChildren ] = useState(0);
  const [ startDate, setStartDate] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());

  function guestsCounter (counter, operation) {
    if(counter === 'adults') {
      setAdults( previousAdults => {
        const newAdults = previousAdults + operation;
        return newAdults < 0 ? 0 : newAdults;
      });
    }else {
      setChildren( previousChildren => {
        const newChildren = previousChildren + operation;
        return newChildren < 0 ? 0 : newChildren;
      });
    }
  }

  function guestsFormHandle () {
    setGuestsForm( previousStatus => !previousStatus );
  }

  function mainFormHandle () {
    setMainForm( previousMainForm => !previousMainForm );
  }

  return(
    <>
      <div className='bg-white p-8 rounded-md md:hidden'>
        <h1 className='text-3xl font-bold mb-3'>
          Book & Experience Amazing Places
        </h1>
        <p className='font-light mb-3'>
          Wordpress Theme For Booking and Rental
        </p>
        <form className='relative mb-1'>
          <Search color="#4f5962" size={20} strokeWidth={2} className='absolute top-[14px] left-4 pointer-events-none'/>
          <input 
            type='text' 
            className='form-control pl-11' 
            placeholder='Location'
            autoComplete="off"
            onClick={mainFormHandle}
          />
        </form>
      </div>

      <div className={`${mainForm ? 'top-0' : 'top-full'} duration-200 bg-white p-5 rounded-md w-full h-full fixed right-0 bottom-0 left-0 md:p-7 md:relative md:block`}>

        <span className="flex justify-between items-center text-lg font-bold mb-7 md:hidden">
          Search
          <X size={22} color={'#3b4249'} onClick={mainFormHandle}/>
        </span>

        <div className="hidden mb-8 md:block">
          <span className="font-bold text-3xl mb-4 block">
            Book & Experience Amazing Places
          </span>
          <p className="font-light">
            WordPress Theme For Booking and Rental
          </p>
        </div>

        <form>
          <div className='mb-3'>
            <select className='form-control'>
              <option value='ee'>Athens</option>
              <option value='ee'>Bramptom</option>
              <option value='ee'>Bridgend</option>
            </select>
          </div>

          <div className='grid grid-cols-2 gap-2 mb-3'>
            <div className="relative">
              <span className="font-light text-sm absolute left-12 top-2 z-[1] pointer-events-none">
                Check-in
              </span>
              <Calendar 
                className='absolute top-[12px] left-3 z-[1] pointer-events-none'
                strokeWidth={2}
                color='#4f5962'
              />
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className='form-control pt-8 pl-12 cursor-pointer'
              />
            </div>
            <div className="relative">
              <span className="font-light text-sm absolute left-12 top-2 z-[1] pointer-events-none">
                Check-out
              </span>
              <Calendar 
                className='absolute top-[12px] left-3 z-[1] pointer-events-none'
                strokeWidth={2}
                color='#4f5962'
              />
              <DatePicker
                showIcon
                dateFormat="dd/MM/yyyy"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className='form-control pt-8 pl-12 cursor-pointer'
              />
            </div>
          </div>

          <div className='mb-3 relative'>
            <User color="#4f5962" className='absolute top-[12px] left-3 pointer-events-none'/>
            <input type='text' placeholder="Guests" className='form-control pl-11 cursor-pointer' value={adults + cildren} onClick={guestsFormHandle}/>

            <div className={`${guestsForm ? 'block' : 'hidden'} p-5 border-[1px] border-[#ccc] rounded-md absolute w-full bg-white top-[calc(100%_+_12px)]`}>
              <div className='flex justify-between items-center mb-3'>
                <div className='flex items-center'>
                  <span className='font-bold text-lg w-6'>
                    {adults}
                  </span> 
                  <span className="font-light">
                    Adults
                  </span>
                </div>
                <div className='flex border border-[#54c4d9] w-[88px] h-[44px] rounded-full overflow-hidden'>
                  <button 
                    type="button" 
                    className='flex items-center justify-center w-1/2 cursor-pointer group  hover:bg-[#54c4d9] transition-all'
                    onClick={() => guestsCounter('adults', -1)}
                  >
                    <Minus 
                      color='#54c4d9' 
                      size={20} 
                      strokeWidth={4} 
                      className='group-hover:stroke-slate-100 transition-all'
                    />
                  </button>
                  <button 
                    type="button" 
                    className='flex items-center justify-center w-1/2 cursor-pointer group  hover:bg-[#54c4d9] transition-all'
                    onClick={() => guestsCounter('adults', 1)}
                  >
                    <Plus 
                      color='#54c4d9' 
                      size={20} 
                      strokeWidth={4} 
                      className='group-hover:stroke-slate-100 transition-all'
                    />
                  </button>
                </div>
              </div>

              <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center'>
                  <span className='font-bold text-lg w-6'>
                    {cildren}
                  </span>
                  <span className="font-light">
                    Children
                  </span>
                </div>
                <div className='flex border border-[#54c4d9] w-[88px] h-[44px] rounded-full overflow-hidden'>
                  <button 
                    type="button" 
                    className='flex items-center justify-center w-1/2 cursor-pointer group  hover:bg-[#54c4d9] transition-all'
                    onClick={() => guestsCounter('children', -1)}
                  >
                    <Minus 
                      color='#54c4d9' 
                      size={20} 
                      strokeWidth={4} 
                      className='group-hover:stroke-slate-100 transition-all'
                    />
                  </button>
                  <button 
                    type="button" 
                    className='flex items-center justify-center w-1/2 cursor-pointer group  hover:bg-[#54c4d9] transition-all'
                    onClick={() => guestsCounter('children', 1)}
                  >
                    <Plus 
                      color='#54c4d9' 
                      size={20} 
                      strokeWidth={4} 
                      className='group-hover:stroke-slate-100 transition-all'
                    />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-5">
                <span className="font-light">
                  Pets
                </span>

                <div className="flex items-center gap-x-3">
                  <label className="font-light flex items-center gap-x-1">
                    Yes
                    <input type="radio" name="pets" value="yes" className="w-5 h-5"/>
                  </label>

                  <label className="font-light flex items-center gap-x-1">
                    No
                    <input type="radio" name="pets" value="no" className="w-5 h-5"/>
                  </label>

                </div>
              </div>

              <div className="flex justify-end">
                <button type='button' className='bg-pink text-[#FFF] py-2 px-5 font-semibold rounded-[5px] text-center' onClick={guestsFormHandle}>
                  Apply
                </button>
              </div>
            </div>
          </div>

          <button className='bg-pink text-[#FFF] w-full py-3 font-semibold rounded-[5px] text-center'>
            Search
          </button>
        </form>
      </div>
    </>

  )
}

export default SearchForm;