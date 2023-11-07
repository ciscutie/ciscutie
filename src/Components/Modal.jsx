import React, { useState } from 'react';
import { BiSolidDownload } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';

const Modal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const resumeDownload =
    'https://drive.google.com/uc?export=download&id=1_xw20DBOIPyiANa4UbsBqp7Ulm3V5Asn';

  const resumeView =
    'https://drive.google.com/file/d/1_xw20DBOIPyiANa4UbsBqp7Ulm3V5Asn/view?usp=drive_link';
  return (
    <div className=''>
      <button
        onClick={handleOpen}
        className='bg-transparent border-blueviolet w-[150px] hover:text-white text-blueviolet shadow-lg border rounded-full  hover:bg-violet-800   font-semibold py-1'
      >
        Resume
      </button>
      {open && (
        //backdrop here
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          {/* Modal Container */}
          <div className='bg-white z-[100] w-[280px] h-[280px] p-4 rounded-lg text-center relative'>
            <h2 className='font-bold text-[20px] text-black'>
              YOU CAN VIEW OR
              <br />  DOWNLOAD MY RESUME
            </h2>
            <div className='text-white'>
              <div className='flex flex-col gap-5 py-5 items-center justify-evenly text-base'>
                <a
                  href={resumeDownload}
                  className=' bg-blue-600 w-[200px] border rounded-full mt-1 border-blue-600 hover:bg-blue-700 text-blue  py-1 px-3'
                  target='_blank'
                  download
                >
                  <span className='flex flex-row items-center justify-center gap-2'>
                    Download <BiSolidDownload />
                  </span>
                </a>
                <a
                  href={resumeView}
                  className='border bg-blueviolet hover:bg-violet-900 w-[200px]   rounded-full  py-1 px-3  '
                  target='_blank'
                >
                  <span className='flex items-center  flex-row justify-center gap-2'>
                    View now <BsEye />
                  </span>
                </a>
                <button
                  className='bg-red-600 border w-[200px] 0 0 rounded-full  py-1 px-3  hover:bg-red-700'
                  onClick={handleClose}
                >
                  Close now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
