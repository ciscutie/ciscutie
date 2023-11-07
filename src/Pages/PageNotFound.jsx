import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='flex items-center flex-col justify-center h-[95vh]'>
      <h1 className='text-2xl '>Page is not Found!</h1>

      <Link to='/ciscutie' className='rounded-full bg-blueviolet py-1 px-5 my-2' >
        Back to homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
