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
          <h1 className='text-4xl font-bold mb-6'>WEB LOGO</h1>
          <div className='flex flex-col italic '>
            <span className='text-xl font-semibold '>some footer text about the</span>
            <span className='text-xl font-semibold'>Agency, Just a little description to</span>
            <span className='text-xl font-semibold'>help people understand you better</span>
          </div>
          <div className='flex mt-6'>
            <img src={Fb} className='mr-4'/>
            <img src={Twitter} className='mr-4'/>
            <img src={Linked} className='mr-4'/>
            <img src={Ig}/>
          </div>
        </div>
      </div>
      <div className='p-4 lg:w-1/4'>
        <div className=' p-8 h-full'>
          <h1 className='font-semibold text-4xl mb-6'>Quick Links</h1>
          <div className='flex flex-col italic font-semibold text-xl'>
            <span>Services</span>
            <span>Portofolio</span>
            <span>About Us</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
      <div className='p-4 lg:w-1/4'>
        <div className=' p-8 h-full'>
          <h1 className='font-semibold text-4xl mb-6'>Address</h1>
          <div className='flex flex-col font-semibold italic text-xl'>
            <span>Design Agency Head Office</span>
            <span>Airport Road</span>
            <span>United Arab Emirate</span>
          </div>
        </div>
      </div>
    </div>
  );
};
