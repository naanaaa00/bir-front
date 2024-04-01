import React from 'react';
import pic1 from '../assets/gatau/Group.svg';

export const P2 = () => {
  return (
    <div 
        className='h-full w-full md:h-screen bg-hijau grid gap-8 justify-center items-center md:grid-cols-2 lg:grid-cols-2  box-border p-8 '>
        
        <div className='h-auto p-8 text-balance '>
            <h1 className='font-extrabold text-4xl'>ABOUT BIR</h1>
            <p className='text-xl overflow-auto mt-4 tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='h-full  p-8 md:flex md:justify-center md:items-center'>
            <img
                src={pic1}
                className='md:w-auto md:h-auto lg:w-auto lg:h-auto sm:mx-auto'
                alt=''
            />
        </div>

    </div>
  )
}
