import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import { AnimatePresence, motion } from 'framer-motion';

import DarkMode from './DarkMode';

import { useColorMode } from '@chakra-ui/react';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [menuBurger, setMenuBurger] = useState(false);
  const toggleBurger = () => {
    setMenuBurger(!menuBurger);
  };
  const closeBurger = () => {
    setMenuBurger(false);
  };

  const motionBurger = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };
  const portLink = [
    <Link to='/ciscutie'>Home</Link>,
    <Link to='/contact'>Contact</Link>,
    <Link to='/about'>About</Link>,
    <Link to='/project'>Projects</Link>,
  ];
  return (
    <div className='flex justify-between items-center font-lato text-[18px]'>
      {/* Mobile View */}
      <div className='md:hidden'>
        <div
          className={`flex flex-col cursor-pointer ${menuBurger ? 'open' : ''}`}
          onClick={toggleBurger}
        >
          {/* Burger Design */}
          <span className='text-xl'>
            {' '}
            <GiHamburgerMenu />
          </span>
        </div>
        {/* Render menu items conditionally */}
        <AnimatePresence>
          {menuBurger && (
            <motion.div
              variants={motionBurger}
              initial='initial'
              animate='animate'
              exit='exit'
              className='z-[1000] pt-2 left-0 top-0 fixed font-semibold bg-slate-600 h-screen w-full
              '
            >
              <div className='flex flex-row justify-between mx-1'>
                <p onClick={closeBurger}>Close</p>
                <DarkMode
                  colorMode={colorMode}
                  toggleColorMode={toggleColorMode}
                />
              </div>
              <div className='flex flex-col justify-center items-center pt-[150px] text-[40px]'>
                {/*Link here dont forget */}
                <ul>
                  {portLink.map((mobileview, mobileKey) => (
                    <li key={mobileKey} onClick={closeBurger}>
                      {mobileview}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className='pl-1 text-xl hover:text-red-700 font-sedgwick'>Cisss</p>

      {/* Desktop View */}

      <div className='hidden md:flex gap-3 justify-start items-center'>
        <ul className='flex flex-row gap-4 '>
          {portLink.map((deskview, deskKey) => (
            <li
              key={deskKey}
              className=' hover:text-blueviolet text-md hover:text-xl hover:font-sedgwick'
            >
              {deskview}
            </li>
          ))}
        </ul>
      </div>
      <DarkMode colorMode={colorMode} toggleColorMode={toggleColorMode} />
    </div>
  );
};

export default Navbar;
