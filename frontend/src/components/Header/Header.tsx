// @ts-nocheck

import { useContext, useState } from 'react';
import logo from '../../assets/homey-logo.png'
import { Menu, User } from 'lucide-react';
import Container from '../Container';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
  const { data, userLogOut, setModal } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const [userOptions, setUserOptions] = useState(false);

  function handleMenu() {
    setMenu( previusState => !previusState);
    setUserOptions( previusState => false);
  }
  
  function handleUserOptions () {
    setUserOptions( previusState => !previusState);
    setMenu( previusState => false);
  }    

  function handleClickLogin() {
    setModal(prevState => ({...prevState, login: true}));
  }

  function handleClickRegister() {
    setModal(prevState => ({...prevState, register: true}));
  }


  return (
    <>
      <header className='bg-white'>
        <Container>
          <div className='py-4 flex items-center relative'>
            <div className='flex items-center justify-between w-full lg:justify-start'>
              <div onClick={handleMenu} className='lg:hidden'>
                <Menu color="#4f5962" size={25} strokeWidth={2}/>
              </div>
              <Link to={'/'}  className='lg:mr-8'>
                <img src={logo} />
              </Link>
              <nav
                className={`${menu ? 'block' : 'hidden'} ease-in duration-300 z-[1] absolute top-full bg-white w-full left-0 overflow-hidden lg:block lg:relative lg:w-auto`}>
                <ul className='text-[#4f5962] lg:flex lg:items-center lg:gap-x-6 font-bold text-sm'>
                  <li>
                    <Link to={'/'} className='p-4 block'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={'/listing'} className='p-4 block'>
                      Listing
                    </Link>
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
              </nav>

              <div
                className={`${userOptions ? 'block' : 'hidden'} ease-in duration-200 z-[1] absolute top-full bg-white w-full left-0 overflow-hidden lg:flex lg:items-center lg:w-auto lg:relative lg:ml-auto`}>
                <ul className='font-semibold text-[#4f5962] px-4 lg:px-0 text-sm lg:flex lg:items-center lg:gap-x-5'>
                  {data.id ? 
                    <>                  
                      <li>
                        Olá, {data.username}
                      </li>
                      <li>
                        <Link to={'/addlisting'} className='text-rose-400 font-semibold py-2 px-3 text-center border border-rose-400 rounded-[4px] block my-4'>
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button className='text-rose-400 font-semibold py-2 px-3 text-center border border-rose-400 rounded-[4px] block my-4' onClick={userLogOut}>
                          Logout
                        </button>
                      </li>
                    </>
                  : <>
                      <li>
                        <span 
                          className='py-4 block cursor-pointer' 
                          onClick={handleClickLogin}
                        >
                          Login
                        </span>
                      </li>
                      <li>
                        <span 
                          className='py-4 block cursor-pointer'
                          onClick={handleClickRegister}
                        >
                          Register
                        </span>
                      </li>
                      <li>
                        <a href='/' className='text-rose-400 font-semibold py-2 px-3 text-center border border-rose-400 rounded-[4px] block my-4'>Become a Host</a>
                      </li>
                    </>
                  }

                </ul>
              </div>

              <div onClick={handleUserOptions} className='lg:hidden'>
                <User color="#4f5962" size={25} strokeWidth={2}/>
              </div>
            </div>


          </div>
        </Container>
      </header>
    </>
  )
  
}

export default Header;