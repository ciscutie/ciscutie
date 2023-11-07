import React from 'react';
import HTML5 from '../assets/Img/Tech/html.svg';
import CSS3 from '../assets/Img/Tech/css.svg';
import Javascript from '../assets/Img/Tech/js.svg';
import Reactjs from '../assets/Img/Tech/react.svg';
import Node from '../assets/Img/Tech/node js.svg';
import ChakraUI from '../assets/Img/Tech/chakraui.png';
import Tailwind from '../assets/Img/Tech/Tailwind.png';
import Bootstrap from '../assets/Img/Tech/bootstrap.svg';
import UYum from '../assets/Img/Projects/U-Yum.png';
import { BsGlobe2, BsGithub } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';

import { SiTailwindcss, SiFirebase, SiCss3 } from 'react-icons/si';
import { motion } from 'framer-motion';
import GroceryBuddy from '../assets/Img/Projects/Grocery Buddy.png';

const Project = () => {
  const upy = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const upy2 = {
    hidden: { x: 0, y: -20, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };

  const BuddyCode = 'https://github.com/ciscutie/grocery-buddy';
  const BuddyLive = 'https://ciscutie.github.io/grocery-buddy/';
  const UyumLive = 'https://ciscutie.github.io/Uyum/';
  const UyumCode = 'https://github.com/ciscutie/Uyum';
  return (
    <motion.div initial='hidden' animate='visible' variants={upy}>
      <div className='flex flex-col my-2'>
        <motion.h1
          variants={upy2}
          className='text-center text-[30px] font-bold'
        >
          My Projects
        </motion.h1>
        <div className='gap-3 flex flex-col items-center justify-center md:flex md:flex-col md:justify-evenly mt-2'>
          <motion.div
            variants={upy2}
            className='h-[570px] w-[340px] md:h-[350px] md:w-[1500px] border rounded shadow-xl bg-slate-300  flex flex-row'
          >
            <div className='flex flex-col md:flex md:justify-evenly md:flex-row gap-[4px] md:gap-[150px]'>
              <div className='flex items-center justify-center rounded '>
                <img
                  src={GroceryBuddy}
                  alt='Grocery Buddy'
                  className='md:h-[340px] md:w-[600px] w-[340px] p-2 rounded'
                />
              </div>
              <div className='flex flex-col gap-10 slate-800 text-black'>
                <div className='flex flex-col text-black'>
                  <h1 className='text-center font-bold text-base md:text-3xl pt-2 md:pt-5'>
                    Grocery Buddy
                  </h1>
                  <p className='text-center py-2 md:py-1 text-base md:text-xl'>
                    Grocery Buddy is a user-friendly and efficient mobile
                    application designed <br />
                    to simplify your grocery shopping experience.
                    <br />
                  </p>
                </div>
                <div className='flex flex-row gap-2 justify-center text-sm md:text-lg'>
                  <span className='border border-slate-700 py-1 px-5 rounded-lg flex justify-center items-center gap-2'>
                    <FaReact />
                    React{' '}
                  </span>{' '}
                  <span className='border border-slate-700 py-1 px-5 rounded-lg flex justify-center items-center gap-2'>
                    <SiCss3 />
                    CSS
                  </span>{' '}
                </div>

                <div className='flex justify-center gap-5 pt-1 md:pt-2 text-sm md:text-lg'>
                  <button className='py-1 px-4 bg-slate-500 hover:bg-slate-200 rounded-lg'>
                    <a
                      href={BuddyCode}
                      target='_blank'
                      className='flex justify-center items-center gap-2 text-base'
                    >
                      <BsGithub /> View Code
                    </a>
                  </button>
                  <button className='py-1 px-4 bg-slate-400 hover:bg-slate-200 rounded-lg'>
                    <a
                      href={BuddyLive}
                      target='_blank'
                      className='flex justify-center items-center gap-2 text-base'
                    >
                      <BsGlobe2 /> Live Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={upy2}
            className='h-[520px] w-[340px] md:h-[350px] md:w-[1500px] border rounded shadow-xl bg-yellow-300  flex flex-row'
          >
            <div className='flex flex-col md:flex md:justify-evenly md:flex-row gap-[4px] md:gap-[150px]'>
              <div className='flex items-center justify-center rounded '>
                <img
                  src={UYum}
                  alt='Cook Food Book'
                  className='md:h-[340px] md:w-[600px] w-[320px] p-2 rounded'
                />
              </div>
              <div className='flex flex-col gap-10 text-yellow-800'>
                <div className='flex flex-col'>
                  <h1 className='text-center font-bold text-base md:text-3xl pt-2 md:pt-5'>
                    U-Yum
                  </h1>
                  <p className='text-center py-2 md:py-1 text-base md:text-xl'>
                    A random clicker filipino dishes app that let's you decide
                    on what to cook next <br />
                    "Find your culinary inspiration with a random Filipino dish
                    suggestion."
                  </p>
                </div>
                <div className='flex flex-row gap-2 justify-center text-sm md:text-lg'>
                  <span className='border border-yellow-700 py-1 px-5 rounded-lg flex justify-center items-center gap-2'>
                    <FaReact />
                    React{' '}
                  </span>{' '}
                  <span className='border border-yellow-700 py-1 px-5 rounded-lg flex justify-center items-center gap-2'>
                    <SiTailwindcss />
                    Tailwind
                  </span>{' '}
                  <span className='border border-yellow-700 py-1 px-4 rounded-lg flex justify-center items-center gap-2'>
                    <SiFirebase />
                    Firebase
                  </span>
                </div>

                <div className='flex justify-center gap-5 pt-1 md:pt-2 text-sm md:text-lg'>
                  <button className='py-1 px-4 bg-yellow-500 hover:bg-yellow-200 rounded-lg'>
                    <a
                      href={UyumCode}
                      target='_blank'
                      className='flex justify-center items-center gap-2 text-base'
                    >
                      <BsGithub /> View Code
                    </a>
                  </button>
                  <button className='py-1 px-4 bg-yellow-400 hover:bg-yellow-200 rounded-lg'>
                    <a
                      href={UyumLive}
                      target='_blank'
                      className='flex justify-center items-center gap-2 text-base'
                    >
                      <BsGlobe2 /> Live Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.h1 variants={upy2} className='text-[30px] text-center font-bold'>
        Skills
      </motion.h1>
      <motion.div variants={upy2} className='logos'>
        <div className='logos-slide flex'>
          <img src={HTML5} />
          <img src={CSS3} />
          <img src={Bootstrap} />
          <img src={Javascript} />
          <img src={Tailwind} />
          <img src={Node} />
          <img src={Reactjs} />
          <img src={ChakraUI} />
          <img src={HTML5} />
          <img src={CSS3} />
          <img src={Bootstrap} />
          <img src={Javascript} />
          <img src={Tailwind} />
          <img src={Node} />
          <img src={Reactjs} />
          <img src={ChakraUI} className='h-[170px] mx-[11.4px]' />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
