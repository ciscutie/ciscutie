import React from 'react';
import Typewriter from 'typewriter-effect';
import Undraw from '../assets/Img/Undraw/Undraw.svg';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';
import { FaGithub, FaLinkedin, FaFacebookMessenger } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const lefty = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const lefty2 = {
    hidden: { x: -20, y: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };
  const roles = [
    'a Frontend Developer',
    'a Gamer',
    'an Electrical Technologist',
  ]; // stating my roles
  let roleIndex = 0;
  const typeLoop = (typewriter) => {
    typewriter
      .typeString(`Hi, i am Francis and i am a ${roles[roleIndex]}`)
      .pauseFor(1000)
      .deleteChars(roles[roleIndex].length)
      .pauseFor(500)
      .callFunction(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        typeLoop(typewriter);
      })

      .start();
  };
  return (
    <motion.div
      variants={lefty}
      initial='hidden'
      animate='visible'
      className='flex flex-col md:flex-row justify-evenly'
    >
      <div className='flex items-center justify-center flex-col md:flex md:items-center md:justify-center md:flex-col flex-1 h-[730px] md:h-[730px] mb-2'>
        ,
        <motion.p
          variants={lefty2}
          className='md:text-5xl text-4xl font-kanit text-blueviolet'
        >
          Hi, i am Francis
        </motion.p>
        <div>
          <motion.p
            variants={lefty2}
            className='text-blueviolet font-bold font-kanit text-2xl md:text-5xl'
          >
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 8,
              }}
            />
          </motion.p>
        </div>
        <br />
        <p className='text-lg md:text-xl leading-7 font-kanit text-center pt-2'>
          <motion.p variants={lefty2}>
            I'm a Frontend Developer from Philippines.
          </motion.p>
          <motion.p variants={lefty2}>
            I enjoy designing and building website.
          </motion.p>
        </p>
        <motion.div
          variants={lefty2}
          className='pt-4 md:pt-[50px] flex justify-evenly flex-row gap-3'
        >
          <Link
            to='/about'
            className='bg-blueviolet  text-center w-[150px] text-white border rounded-full border-blueviolet hover:bg-violet-600 hover:text-white font-semibold py-1'
          >
            More info
          </Link>
          <Modal></Modal>
        </motion.div>
        <motion.div
          variants={lefty2}
          className='flex flex-row pt-5 justify-evenly gap-3 items-center'
        >
          <a
            href='https://www.linkedin.com/in/ciscutie/'
            target='_blank'
            className='w-8 h-8'
          >
            <FaLinkedin
              className='text-blue-900 text-3xl hover:text-blue-600'
              title='Linkedin'
            />
          </a>
          <a
            href='https://github.com/ciscutie'
            target='_blank'
            className='w-8 h-8'
          >
            <FaGithub
              className='text-black text-3xl hover:text-gray-800'
              title='GitHub'
            />
          </a>
          <a  href='https://www.facebook.com/ciskyuthanna/'
            target='_blank'
            className='w-8 h-8'>
            {' '}
            <FaFacebookMessenger
              className='text-blue-600 text-3xl hover:text-blue-500'
              title='github'
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        variants={lefty2}
        className='flex-1 h-[730px] md:flex md:justify-center'
      >
        <img
          src={Undraw}
          className='md:w-full md:h-auto hidden md:block w-[80%] mx-auto bottom-[50%]'
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
