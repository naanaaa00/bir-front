import React from 'react';

import Ig from '../assets/footer/ig.svg';
import Fb from '../assets/footer/fb.svg';
import Linked from '../assets/footer/linked.svg';
import Twitter from '../assets/footer/twit.svg';

export const Footer = () => {
  return (
    <div className='bg-hijau flex flex-wrap lg:flex lg:justify-evenly lg:p-8'>
      <div className='p-4 lg:w-1/4'>
        <div className=' p-8 h-full'>
          <h1 className='text-4xl font-bold mb-6 text-black-900' >WEB LOGO</h1>
          <div className='flex flex-col italic '>
            <span className='text-xl font-semibold text-black-900'>some footer text about the</span>
            <span className='text-xl font-semibold text-black-900'>Agency, Just a little description to</span>
            <span className='text-xl font-semibold text-black-900'>help people understand you better</span>
          </div>
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
