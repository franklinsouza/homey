// @ts-nocheck

import { Calendar, Facebook, Heart, Instagram, Linkedin, Twitter, User, Youtube } from "lucide-react";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SideBar = ( ) => {
  const [ startDate, setStartDate] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());

  return(
    <div className="bg-white">
      <span className="bg-[#4F5962] text-white text-2xl font-medium w-full block p-4">
        $525.00 
        <span className="text-sm">
          / Night
        </span>
      </span>

      <div>
        <form className='p-5'>
          <div className="flex gap-x-2 mb-2">
            <div className="relative">
              <span className="font-light text-sm absolute left-10 top-2 z-[1] pointer-events-none">
                Arrive
              </span>
              <Calendar 
                className='absolute top-[10px] left-4 z-[1] pointer-events-none'
                strokeWidth={2}
                color='#4f5962'
                size={17}
              />
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className='form-control pt-8 px-4 cursor-pointer'
              />
            </div>
            <div className="relative">
              <span className="font-light text-sm absolute left-10 top-2 z-[1] pointer-events-none">
                Depart
              </span>
              <Calendar 
                className='absolute top-[10px] left-4 z-[1] pointer-events-none'
                strokeWidth={2}
                color='#4f5962'
                size={17}
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
                className='form-control pt-8 px-4 cursor-pointer'
              />
            </div>
          </div>

          <div className="relative">
            <User 
              strokeWidth={2} color='#4f5962'size={17} 
              className='absolute top-[14px] left-4 z-[1] pointer-events-none'
            />
            <input className='form-control mb-2 pl-10' type="text" placeholder="Guests"/>
          </div>

          <textarea className="form-control mb-2" placeholder='Intruduce yourself to the host'></textarea>

          <button className='bg-pink text-white font-bold w-full rounded-sm py-2'>
            Instant Booking
          </button>
        </form>

        <span className="separator-line"></span>

        <div className='p-5'>
          <button 
            className='border border-[#d8dce1] text-sm text-sm text-[#949ca5] font-bold w-full rounded-sm py-2 mb-2 flex justify-center items-center'>
           <Heart size={15} className="mr-1"/> 
           Add to Favorite
          </button>
          <button className='border border-[#d8dce1] text-sm text-[#949ca5] font-bold w-full rounded-sm py-2 mb-2'>
            Contact the host
          </button>
          <button className='text-sm text-[#949ca5] font-bold w-full rounded-sm py-2'>
            Pint this page
          </button>
        </div>
      </div>

      <ul className="flex items-center justify-center gap-x-7 bg-[#F2F3F4] py-5">
        <li>
          <a href="#">
            <Facebook fill='#949ca5' strokeWidth={0} size={20}/>
          </a>
        </li>
        <li>
          <a href="#">
            <Twitter fill='#949ca5' strokeWidth={0} size={20}/>
          </a>
        </li>
        <li>
          <a href="#">
            <Linkedin fill='#949ca5' strokeWidth={0} size={20}/>
          </a>
        </li>
        <li>
          <a href="#">
            <Instagram color='#949ca5'  size={20}/>
          </a>
        </li>
        <li>
          <a href="#">
            <Youtube color='#949ca5' size={20}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar;