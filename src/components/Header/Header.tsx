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
        <div className='py-4 flex justify-between items-center relative'>
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
              <ul ref={menuRef} className='text-[#4f5962] md:flex md:items-center md:gap-x-8 font-medium'>
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
          </div>

          <div style={{'height': `${userOptions ? dropHeight.userOptions+'px' : 0}`}} 
            className='ease-in duration-200 absolute top-full bg-white w-full left-0 overflow-hidden md:flex md:items-center'>
            <ul ref={optionsRef} className='font-medium text-[#4f5962]  px-4 md:flex md:items-center md:gap-x-2 md:mr-3'>
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
        </div>
      </Container>
    </header>
  )
  
}

export default Header;