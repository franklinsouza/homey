import { Bed, ChevronRight, Home, MapPin, ShowerHead, Star, User} from "lucide-react";
import Container from "../../components/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Gallery from "./components/Gallery";
import Details from "./components/Details";
import Calendar from "react-calendar";
import './calendar.css';
import SideBar from "./components/SideBar";

const Single = () => {


  return(
    <div className="bg-[#F7F8F9]">
      <Header />

      <Container className="flex mt-6 mb-16 lg:gap-x-7">
        <main className="bg-white w-full lg:w-[68%]">  
          <Gallery />
          <div className="p-10">
            <ul className="flex items-center font-medium text-sm mb-6">
              <li className="flex items-center">
                <a href="#" className="text-pink">
                  Home
                </a>
                <ChevronRight size={13} className="mx-1"/>
              </li>
              <li className="flex items-center">
                <a href="#" className="text-pink">
                  Apartament
                </a>
                <ChevronRight size={13} className="mx-1"/>
              </li>
              <li>
                <span>
                  Modern Apartament With Pool
                </span>
              </li>
            </ul>

            <div>
              <h1 className="font-bold text-2xl mb-2">
                Modern Apartment With Pool
              </h1>
              <div className="flex items-center gap-x-2">
                <address className="text-sm flex items-center">
                  <MapPin  size={17}/>
                  984 1st Avenue, New York, NY 10022
                </address>
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
                    <span className='text-sm mt-1 block text-[#949ca5]'>
                      Good
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul className="text-center text-sm grid grid-cols-4 border-[#d8dce1] border-dotted border-y-[1px]">
            <li className="flex flex-col items-center py-7 px-5 border-[#d8dce1] border-dotted border-r-[1px]">
              <Home color="#d8dce1" size={35} className="mb-5"/>
              <span className="mb-1">Type</span>
              <p className="font-semibold">
                Entire Place / Apartment
              </p>
            </li>
            <li className="flex flex-col items-center py-7 px-5 border-[#d8dce1] border-dotted border-r-[1px]">
              <User color="#d8dce1" size={35} className="mb-5"/>
              <span className="mb-1">Accomodation</span>
              <p className="font-semibold">
                4 {'>'} Guests
              </p>
            </li>
            <li className="flex flex-col items-center py-7 px-5 border-[#d8dce1] border-dotted border-r-[1px]">
              <Bed color="#d8dce1" size={35} className="mb-5"/>
              <span className="mb-1">Bedrooms</span>
              <p className="font-semibold">
                2 Bedrooms / 2 beds
              </p>
            </li>
            <li className="flex flex-col items-center py-7 px-5">
              <ShowerHead color="#d8dce1" size={35} className='mb-5'/>
              <span className="font-light mb-1">Bathrooms</span>
              <p className="font-semibold">
                2 full
              </p>
            </li>
            
          </ul>

          <div className="p-10">
            <h2 className="font-bold text-xl mb-6">
              About this listing
            </h2>

            <p className="text-[0.938rem] leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est quam, volutpat et arcu eu, pharetra congue augue. Integer vel nibh eu eros interdum commodo. Vivamus finibus fringilla libero, id consectetur purus sollicitudin vel. Proin dapibus ante et pharetra luctus. Ut lacinia ante ut nunc pellentesque auctor. Proin laoreet erat sed ornare molestie. Fusce vehicula ut nulla facilisis vulputate. Quisque vel purus ac lectus tempus viverra. Maecenas at sem at erat pellentesque hendrerit nec in massa. Vestibulum nec lacinia dui, a congue ex. Vivamus ac ultri
            </p>
          </div>

          <span className="separator-line"></span>

          <Details />

          <Details />

          <Details />

          <Details />

          <div>
            <iframe className='w-full h-[600px]' id="gmap_canvas" src="https://maps.google.com/maps?width=740&amp;height=600&amp;hl=en&amp;q=%20+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>

          <Details />

          <span className="separator-line"></span>

          <div className="p-10">
            <Calendar showDoubleView={true} locale='us' className='mb-5'/>

            <div className="flex text-sm items-center justify-center gap-x-3 font-medium">
              <span className=" flex items-center before:w-3 before:h-3 before:bg-[#E4F4D9] before:block before:mr-2 before:rounded-sm">
                Available
              </span>
              <span className=" flex items-center before:w-3 before:h-3 before:bg-[#FFEEDB] before:block before:mr-2 before:rounded-sm">
                Pending
              </span>
              <span className=" flex items-center before:w-3 before:h-3 before:bg-[#FDD2D2] before:block before:mr-2 before:rounded-sm">
                Booked
              </span>
            </div>
          </div>
          
        </main>

        <aside className="hidden lg:block lg:grow">
          <SideBar />
        </aside>
      </Container>

      <Footer />
    </div>
  )
}

export default Single;