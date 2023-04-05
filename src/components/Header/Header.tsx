import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/homey-logo.png'
import { Menu, User } from 'lucide-react';
import Container from '../Container';

const Header = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);
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
    if(menuRef.current && menuRef.current) {
      setDropHeight(
        previusDimension => ({
          ...previusDimension, 
          menu: menuRef.current!.clientHeight + 20,
          userOptions: optionsRef.current!.clientHeight + 20
        })
      );
    }
  }, []);
    

  return (
    <header>
      <Container>
        <div className='py-4 flex items-center relative'>
          <div className='flex items-center justify-between w-full lg:justify-start'>
            <div onClick={handleMenu} className='lg:hidden'>
              <Menu color="#4f5962" size={25} strokeWidth={2}/>
            </div>
            <a href='#' className='lg:mr-8'>
              <img src={logo} />
            </a>

            <div 
              // style={{'height': `${menu ? dropHeight.menu+'px' : 0}`}} 
              className={`${menu ? 'h-['+dropHeight.menu+']px' : 'h-[0px] lg:h-auto'} ease-in duration-300 z-[1] absolute top-full bg-white w-full left-0 overflow-hidden lg:relative lg:w-auto`}>
              <ul ref={menuRef} className='text-[#4f5962] lg:flex lg:items-center lg:gap-x-6 font-medium text-sm'>
                <li>
                  <a href="/" className='p-4 block'>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className='p-4 block'>
                    Listing
                  </a>
                </li>
                <li>
                  <a href="/" className='p-4 block'>
                    Property
                  </a>
                </li>
                <li>
                  <a href="/" className='p-4 block'>
                    Modules
                  </a>
                </li>
              </ul>
            </div>

            <div 
              // style={{'height': `${userOptions ? dropHeight.userOptions+'px' : 0}`}} 
              className={`${userOptions ? 'h-['+dropHeight.userOptions+']px' : 'h-[0px] lg:h-auto'} ease-in duration-200 z-[1] absolute top-full bg-white w-full left-0 overflow-hidden lg:flex lg:items-center lg:w-auto lg:relative lg:ml-auto`}>
              <ul ref={optionsRef} className='font-medium text-[#4f5962] px-4 text-sm lg:flex lg:items-center lg:gap-x-5 lg:mr-3'>
                <li>
                  <a href="/" className='py-4 block'>
                    Login
                  </a>
                </li>
                <li>
                  <a href="/" className='py-4 block'>
                    Register
                  </a>
                </li>
                <li>
                  <a href='/' className='text-rose-400 font-semibold py-2 px-3 text-center border border-rose-400 rounded-[4px] block my-4'>Become a Host</a>
                </li>
              </ul>
            </div>

            <div onClick={handleUserOptions} className='lg:hidden'>
              <User color="#4f5962" size={25} strokeWidth={2}/>
            </div>
          </div>


        </div>
      </Container>
    </header>
  )
  
}

export default Header;