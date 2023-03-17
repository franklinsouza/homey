import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/homey-logo.png'
import { Menu, User } from 'lucide-react';

const Header = () => {
  const menuRef = useRef();
  const optionsRef = useRef();
  const [menu, setMenu] = useState(false);
  const [userOptions, setUserOptions] = useState(false);
  const [dropHeight, setDropHeight] = useState({menu: 0, userOptions: 0});


  function handleMenu() {
    setMenu( previusState => !previusState);
    setUserOptions( previusState => false);
  }

  function handleUserOptions () {
    setUserOptions( previusState => !previusState);
    setMenu( previusState => false);
  }

  useEffect(() => {
    setDropHeight(
      previusDimension => ({
        ...previusDimension, 
        menu: menuRef.current.clientHeight,
        userOptions: optionsRef.current.clientHeight
      })
    );

    console.log(menuRef);
  }, []);
  

  return (
    <header>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center relative'>
        <div className='flex items-center justify-between w-full'>
          <div onClick={handleMenu} className='md:hidden'>
            <Menu color="#4f5962" size={25} strokeWidth={2}/>
          </div>
          <a href='#' className='md:mr-8'>
            <img src={logo} />
          </a>
          <div onClick={handleUserOptions}>
            <User color="#4f5962" size={25} strokeWidth={2}/>
          </div>
          <div 
            style={{'height': `${menu ? dropHeight.menu+'px' : 0}`}} 
            className='ease-in duration-200 absolute top-full bg-white w-full left-0 overflow-hidden'>
            <ul ref={menuRef} className='text-[#4f5962] md:flex md:items-center md:gap-x-8 font-semibold'>
              <li>
                <a href="/" className='px-2 py-1'>
                  Home
                </a>
              </li>
              <li>
                <a href="/" className='px-2 py-1'>
                  Listing
                </a>
              </li>
              <li>
                <a href="/" className='px-2 py-1'>
                  Property
                </a>
              </li>
              <li>
                <a href="/" className='px-2 py-1'>
                  Modules
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{'height': `${userOptions ? dropHeight.userOptions+'px' : 0}`}} 
          className='ease-in duration-200 absolute top-full bg-white w-full left-0 overflow-hidden md:flex md:items-center'>
          <ul ref={optionsRef} className='md:flex md:items-center gap-x-2 text-[#4f5962] font-semibold mr-3'>
            <li>
              <a href="/" className='px-2 py-1'>
                Login
              </a>
            </li>
            <li>
              <a href="/" className='px-2 py-1'>
                Register
              </a>
            </li>
          </ul>

          <a href='/' className='text-rose-400 font-semibold py-2 px-3 border border-rose-400 rounded-[4px]'>
            Become a Host
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;