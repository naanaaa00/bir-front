import React from 'react';

import Logo from '../assets/logo.png'

export const Footer = () => {
  return (
    <div className='bg-hijau flex flex-wrap lg:flex lg:justify-evenly lg:p-8'>
      <div className='p-4 lg:w-1/4'>
        <div className=' p-8 h-full'>

        {/* <img src={Logo} className="w-56 h-48 ml-12 mt-4" alt="" />
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="mt-4">
  <path fill="#20B15A" d="M52.6,-39.4C68.6,-21.9,82.2,0,77.5,16.5C72.7,33,49.7,44.1,27.9,52.5C6.1,60.9,-14.3,66.6,-31.9,60.4C-49.4,54.2,-64.1,36.1,-70.7,14.1C-77.4,-7.9,-76,-33.7,-62.9,-50.5C-49.8,-67.3,-24.9,-75,-3.3,-72.4C18.3,-69.8,36.6,-56.8,52.6,-39.4Z" transform="translate(100 100)" />
</svg> */}

<div className='relative'>
  <div className='flex flex-col items-start'>
    <img src={Logo} className="w-56 h-48 ml-12 mt-4 z-10 relative" alt="" /> {/* Memberikan z-index yang lebih tinggi */}
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-72  ml-16 -mt-10">
      <path fill="#FEFAF6" d="M52.6,-39.4C68.6,-21.9,82.2,0,77.5,16.5C72.7,33,49.7,44.1,27.9,52.5C6.1,60.9,-14.3,66.6,-31.9,60.4C-49.4,54.2,-64.1,36.1,-70.7,14.1C-77.4,-7.9,-76,-33.7,-62.9,-50.5C-49.8,-67.3,-24.9,-75,-3.3,-72.4C18.3,-69.8,36.6,-56.8,52.6,-39.4Z" transform="translate(100 100)" />
    </svg>
  </div>
</div>




          {/* <div className='flex flex-col italic '>
            <span className='text-xl font-semibold text-black-900'>some footer text about the</span>
            <span className='text-xl font-semibold text-black-900'>Agency, Just a little description to</span>
            <span className='text-xl font-semibold text-black-900'>help people understand you better</span>
          </div> */}
        </div>
      </div>
      <div className='p-4 lg:w-1/4'>
        <div className=' p-8 h-full'>
          <h1 className='font-semibold text-4xl mb-6 text-black-900'>Quick Links</h1>
          <div className='flex flex-col italic font-semibold text-xl'>
            <span className='text-black-900'>Services</span>
            <span className='text-black-900'>Portofolio</span>
            <span className='text-black-900'>About Us</span>
            <span className='text-black-900'>Contact Us</span>
          </div>
        </div>
      </div>
      <div className='p-4 lg:w-1/4'>
        <div className=' p-8 h-full'>
          <h1 className='font-semibold text-4xl mb-6 text-black-900'>Address</h1>
          <div className='flex flex-col font-semibold italic text-xl'>
            <span className='text-black-900'>Design Agency Head Office</span>
            <span className='text-black-900'>Airport Road</span>
            <span className='text-black-900'>United Arab Emirate</span>
          </div>
        </div>
      </div>
    </div>
  );
};
