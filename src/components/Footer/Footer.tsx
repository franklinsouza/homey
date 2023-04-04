import Container from "../Container";
import logo from '../../assets/homey-logo.png'
import { ChevronRight, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return(
    <footer>
      <Container className="pt-24 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 mb-24">
          <div className="col-span-1 mb-8 md:pr-4">
            <a className='mb-5 block'>
              <img src={logo} />
            </a>
            <p className='font-light text-sm mb-6'>
              Homey is a powerful booking platform that lets you run a residential or commercial rental business online with no hassle
            </p>
            <a href='#' title="Read more here!" className="font-bold text-sm flex items-center">
              <span>Read more</span>
              <ChevronRight size={15} color="#3b4249" className='group-hover:stroke-[#54c4d9] duration-300'/>
            </a>
          </div>

          <div className="col-span-1 mb-8 md:pl-8">
            <h3 className="text-lg font-bold mb-3">
              Explore
            </h3>
            <ul className='flex flex-col gap-y-4 text-sm font-bold'>
              <li>
                <a href='#' className="flex items-center group">
                  <ChevronRight size={15} color="#3b4249" className='group-hover:stroke-[#54c4d9] duration-300'/>
                  <span className='group-hover:text-[#54c4d9] duration-300'>
                    Apartament
                  </span>
                </a>
              </li>
              <li>
                <a href='#' className="flex items-center group">
                  <ChevronRight size={15} color='#3b4229' className='group-hover:stroke-[#54c4d9] duration-300'/>
                  <span className='group-hover:text-[#54c4d9] duration-300'>
                    Bed & Breakfast
                  </span>
                </a>
              </li>
              <li>
                <a href='#' className="flex items-center group">
                  <ChevronRight size={15} color='#3b4229' className='group-hover:stroke-[#54c4d9] duration-300'/>
                  <span className='group-hover:text-[#54c4d9] duration-300'>
                    Condo
                  </span>
                </a>
              </li>
              <li>
                <a href='#' className="flex items-center group">
                  <ChevronRight size={15} color='#3b4229' className='group-hover:stroke-[#54c4d9] duration-300'/>
                  <span className='group-hover:text-[#54c4d9] duration-300'>
                    House
                  </span>
                </a>
              </li>
              <li>
                <a href='#' className="flex items-center group">
                  <ChevronRight size={15} color='#3b4229' className='group-hover:stroke-[#54c4d9] duration-300'/>
                  <span className='group-hover:text-[#54c4d9] duration-300'>
                    Loft
                  </span>
                </a>
              </li>
              <li>
                <a href='#' className="flex items-center group">
                  <ChevronRight size={15} color='#3b4229' className='group-hover:stroke-[#54c4d9] duration-300'/>
                  <span className='group-hover:text-[#54c4d9] duration-300'>
                    Studio
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-3">
              Newsletter Sign Up
            </h3>

            <form className="flex gap-x-6 mb-4">
              <input type='text' className="form-control" placeholder="Enter your email"/>
              <button className='text-white bg-[#F15E75] font-semibold px-6 rounded-md'>
                Submit
              </button>
            </form>

            <p className='font-light text-sm mb-6'>
              Homey is a powerful booking platform that lets you run a residential or commercial rental business online with no hassle
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-col items-center md:flex-row">
          <p className='font-light text-xs mb-6 text-center md:mb-0 md:text-left'>
            Homey - All rights reserved - Designed and Developed by Favethemes
          </p>

          <ul className="flex items-center gap-x-5">
            <li>
              <a href="#">
                <Facebook fill='#3b4249' strokeWidth={0} size={20}/>
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter fill='#3b4249' strokeWidth={0} size={20}/>
              </a>
            </li>
            <li>
              <a href="#">
                <Linkedin fill='#3b4249' strokeWidth={0} size={20}/>
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram color='#3b4249'  size={20}/>
              </a>
            </li>
            <li>
              <a href="#">
                <Youtube color='#3b4249' size={20}/>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;