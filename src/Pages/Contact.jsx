import { useRef, useState, useEffect } from 'react';
import ContactUndraw from '../assets/Img/Undraw/Undraw2.svg';
import { useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { addDoc, collection } from 'firebase/firestore';
import { dbForm } from '../Config/Firebase';

const Contact = () => {
  const righty = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const righty2 = {
    hidden: { x: 20, y: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);
  const toast = useToast();
  const inputRef = useRef(null);
  const handleSubmit = async () => {
    event.preventDefault();
    // Check if the form is valid before submitting
    if (isFormValid) {
      // Create a data object to save in Firestore
      const data = {
        email: email,
        message: message,
      };

      try {
        // Add a new document to Firestore
        await addDoc(collection(dbForm, 'messages'), data);
        // Handle success
        console.log('Your message has successfully sent to firestore database!');
        // You can also reset the form or perform other actions here
      } catch (error) {
        // Handle errors
        console.error('Error writing message: ', error);
      }
    } else {
      // Handle invalid form data, e.g., display an error message to the user
      console.log('Form data is not valid. Please double check your input.');
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    console.log('Email:', newEmail);
    // Email validation
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValid = newEmail.length > 0 && validEmail.test(newEmail);
    console.log(isEmailValid);
    // Update the form validity state
    setIsFormValid(isEmailValid && message.length > 0);

    if (!validEmail.test(newEmail)) {
      setEmailError('Invalid Email Address');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (event) => {
    const newMessage = event.target.value;
    console.log('Message:', newMessage);

    setMessage(newMessage);

    // Update the form validity state
    setIsFormValid(email.length > 0 && newMessage.length > 0);
  };
  useEffect(() => {
    // Check the validity of the form when the component mounts
    setIsFormValid(email.length > 0 && message.length > 0);
  }, []); // Empty dependency array to run this effect only once

  return (
    <motion.div
      variants={righty}
      initial='hidden'
      animate='visible'
      className='flex flex-col font-playpen'
    >
      <div className='text-center  text-2xl font-bold'>
        <motion.h1 variants={righty2} className='py-2'>
          Have some questions?
        </motion.h1>
        <motion.div
          variants={righty2}
          className='flex items-center flex-row justify-center md:text-2xl text-base'
        >
          <p>Email me at</p>
          <p>
            &nbsp;
            <a href='mailto:kaycis25@gmail.com' target='_blank'>
              kaycis25@gmail.com
            </a>
          </p>
        </motion.div>
      </div>

      <div className='flex flex-col md:flex md:flex-row'>
        <motion.div variants={righty2}>
          <img src={ContactUndraw} className='md:block hidden' />
        </motion.div>
        <motion.div
          variants={righty2}
          className=' flex justify-center items-center flex-col md:flex md:flex-col md:justify-center md:items-center  pt-[150px] h-[400px] w-[300px] md:w-[500px] md:h-[500px]'
        >
          <h1 className='text-center text-base md:text-lg font-semibold pl-[80px] md:pl-[1px]'>
            Contact Form
          </h1>
          <form
            className='rounded-lg flex justify-center items-center md:pl-[0px] pl-[50px] mx-1 md:text-lg text-base
            '
            id='form'
            onSubmit={handleSubmit}
          >
            <div className='mb-3'>
              <label className='block'>Email:</label>
              <input
                ref={inputRef}
                placeholder='Enter your email'
                className='active:border-blue-600 md:w-[400px] rounded-md pb-2 mb-1 border-2 border-black w-[340px]'
                onChange={handleEmailChange}
              ></input>
              {!emailError ? (
                <p className='text-red-700 pt-1'>{emailError}</p>
              ) : null}

              <label className='flex content-start pt-5 font-medium'>
                Leave a message:
              </label>
              <textarea
                className='md:w-[400px] md:h-[400px] w-[340px] h-[300px] rounded border-2 border-black'
                value={message}
                placeholder='Leave a message...'
                onChange={handleMessageChange}
              ></textarea>

              <div className='flex flex-col'>
                {isFormValid ? (
                  <button
                    type='submit'
                    className='bg-blueviolet text-white rounded-full my-[20px]  py-2 px-6 cursor-pointer'
                    onClick={() => {
                      const promiseMessage = new Promise((resolve, reject) => {
                        setTimeout(() => resolve(200), 5000);
                      });

                      // Will display the loading toast until the promise is either resolved
                      // or rejected.
                      toast.promise(promiseMessage, {
                        success: {
                          title: 'I received your message',
                          description: 'Thank you',
                        },
                        error: {
                          title: 'Message rejected',
                          description: 'Something wrong',
                        },
                        loading: {
                          title: 'Message pending',
                          description: 'Please wait',
                        },
                      });
                    }}
                  >
                    Submit
                  </button>
                ) : null}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
