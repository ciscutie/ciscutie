import { useToast } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import FBarong from '../assets/Img/Me/FBarong.png';
import { motion } from 'framer-motion';
import { FaRegHandshake } from 'react-icons/fa6';

const About = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,

      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className=' pt-2 flex flex-col  h-[720px]'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        variants={item}
        className='flex justify-center items-center flex-col'
      >
        <h1 className=' text-[30px] md:text-[40px] font-bold text-center font-playpen'>
          ABOUT ME
        </h1>
      </motion.div>
      <div className='md:flex md:flex-row flex flex-col justify-evenly items-center '>
        <motion.div variants={item} className='pl-5'>
          <div className='pt-10 md:pt-1 h-[300px] w-[250px] md:w-[500px] md:h-[600px]  shadow-lg rounded flex flex-col justify-center items-center'>
            <img
              src={FBarong}
              className='shadow w-[500px] h-[600px] rounded mx-3'
            ></img>
          </div>
        </motion.div>

        <div className='flex-1 mx-2 flex items-center justify-center flex-col'>
          <div className='text-justify flex items-center justify-center flex-col my-2  gap-3'>
            <div className='w-[340px] md:w-[800px] h-[480px] my-2'>
              <p className='max-w-full leading-tight flex items-center justify-center flex-col  my-10 md:my-4 md:text-xl text-base'>
                <motion.span variants={item}>
                  &nbsp; So hi I am Francis Charles Gonzales, a student from
                  Technological University of the Philippines - Taguig and im
                  taking Bachelor of Engineering Technology in Electrical
                  Technology. Beyond my academic pursuits, I'm also a passionate
                  aspiring frontend developer with a deep-rooted love for
                  technology.
                </motion.span>
                <br />
                <br />
                <motion.span variants={item}>
                  &nbsp; In my journey into frontend development, I've been
                  actively honing my skills in HTML, CSS, and JavaScript. Having
                  already delved into React, I'm excited to further expand my
                  expertise in this powerful library. Additionally, I'm keen on
                  exploring to broaden my knowledge of frontend frameworks.
                </motion.span>
                <br />
                <br />
                <motion.span variants={item}>
                  {' '}
                  &nbsp; I'm always open to connecting with like-minded
                  individuals, whether it's discussing the latest in frontend
                  development, sharing insights, or collaborating on exciting
                  projects. Feel free to reach out and let's embark on this tech
                  journey together!
                </motion.span>
              </p>
            </div>
          </div>

          <motion.div variants={item} className='flex justify-center pt-3 my-3'>
            <Link
              to='/contact'
              className='bg-transparent text-blue-600 border rounded-full mt-1 mb-1 border-blue-600 hover:bg-blue-600 hover:text-white text-blue font-semibold py-1 px-5'
            >
              <span className='flex flex-row items-center justify-center gap-2'>
                <FaRegHandshake /> Let's Connect
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
