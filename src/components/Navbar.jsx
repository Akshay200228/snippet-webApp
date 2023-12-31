import { useEffect, useState } from 'react';
import { ace2, close, menu } from '../assets';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateButton((prevAnimateButton) => !prevAnimateButton);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className="fixed top-0 z-50 flex items-center justify-between w-full py-4 text-primary dark:text-white navbar backdrop-filter backdrop-blur-lg bg-opacity-70"
      data-aos='fade-down' data-aos-delay='200'
    >
      <img
        src={ace2}
        alt="logo"
        className="w-[124px] h-[32px]"
      />
      <ul className="items-center justify-end hidden space-x-4 sm:flex ">
        <li>
          <Link 
            to="/" 
            className="font-poppins font-normal cursor-pointer text-[16px] hover:text-purple-400 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/docs" 
            className="font-poppins font-normal cursor-pointer text-[16px] hover:text-purple-400 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="font-poppins font-normal cursor-pointer text-[16px] hover:text-purple-400 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="font-poppins font-normal cursor-pointer text-[16px] hover:text-purple-400 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <ThemeToggle  
            className="font-poppins font-normal cursor-pointer text-[16px] hover:text-purple-400 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          />
        </li>
      </ul>
      <div className="hidden mr-20 space-x-4 sm:flex text-primary dark:text-white">
        <button
          type="button"
          className={`py-4 px-6 font-poppins font-medium text-[14px] bg-purple-gradient rounded-[10px] outline-none ${animateButton ? 'animate-pulse' : ''
            }`}
        >
          Get Started
        </button>
        <button className="px-4 py-2 text-sm bg-gray-400 rounded-2xl hover:bg-purple-100 dark:hover:bg-gray-600">
          Login
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-end flex-1 mr-14 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prevToggle) => !prevToggle);
          }}
        />

        {toggle && (
          <div className="mr-10 flex flex-col items-center p-6 bg-black-gradient absolute top-full right-0 mt-2 mx-4 min-w-[140px] rounded-xl sidebar">
            <ul className="flex flex-col items-start justify-end flex-1 mb-4 list-none">
              <li className='mb-2'>
                <Link to="/" className='font-poppins font-normal cursor-pointer text-[16px] text-white'>
                  Home
                </Link>
              </li>
              <li className='mb-2'>
                <Link to="/docs" className='font-poppins font-normal cursor-pointer text-[16px] text-white'>
                  Docs
                </Link>
              </li>
              <li className='mb-2'>
                <Link to="/about" className='font-poppins font-normal cursor-pointer text-[16px] text-white'>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className='font-poppins font-normal cursor-pointer text-[16px] text-white'>
                  Contact
                </Link>
              </li>
              <li>
                <ThemeToggle className='font-poppins font-normal cursor-pointer text-[16px]'/>
              </li>
            </ul>

            <div className="flex flex-col items-center">
              <button
                type="button"
                className="py-3 px-2 font-poppins font-medium text-[14px] text-primary bg-purple-gradient rounded-[10px] outline-none"
              >
                Get Started
              </button>
              <button className="px-8 py-2 mt-4 text-sm text-white bg-gray-500 rounded-2xl hover:bg-gray-600">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
