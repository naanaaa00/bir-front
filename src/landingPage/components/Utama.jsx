import React from 'react';
import bg from '../assets/utama/Group-64.svg';
import { Utama2 } from './Utama2';

export const Utama = () => {
  return (
    <div className="">
      <Utama2 />
      <div className='bg-hijau flex justify-center items-center h-screen w-full'>
        <img 
          src={bg}
          className='w-full h-full absolute inset-0 object-cover hidden sm:block'
          alt="background"
        />
        <div className=' text-center p-8'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-5xl text-black-900 font-stylish'>BUKU INTERAKTIF</h1>
            <h1 className='font-bold text-5xl text-black-900 font-stylish'>REMAJA</h1>
          </div>
          <div className="m-8 relative ">
  <span   className="font-stylish z-99 inline-block px-6 py-1 text-2xl font-bold text-black-900 hover:bg-hijauCustom border-2 border-hijauCustom rounded-lg transition duration-300  hover:text-hijau">
    <a href='/baca'>baca</a>
  </span>
</div>

        </div>
      </div>
    </div>
  );
};
