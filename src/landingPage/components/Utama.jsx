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
            <span className='font-bold text-4xl'>BUKU INTERAKTIF</span>
            <span className='font-bold text-4xl'>REMAJA</span>
          </div>
          <div className="m-8 relative ">
  <span className="z-99 inline-block px-6 py-1 text-xl font-bold text-white bg-hijau2 border-2 border-hijau2 rounded-lg transition duration-300 hover:bg-hijau hover:text-black">
    Baca
  </span>
</div>

        </div>
      </div>
    </div>
  );
};
