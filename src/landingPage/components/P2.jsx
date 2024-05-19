import React, { useEffect } from 'react';
import Typed from 'typed.js';
import pic1 from '../assets/gatau/Group.svg';

export const P2 = () => {
  useEffect(() => {
    const options = {
      strings: [
        'Temukan berbagai kisah pendek remaja yang penuh inspirasi, emosi, dan petualangan di platform kami. Dengan tema-tema yang dekat dengan kehidupan remaja masa kini, kami menghadirkan cerita-cerita tentang kesehatan mental, bullying, asmara, cita-cita, pertemanan, dan banyak lagi.'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      startDelay: 1000,
      backDelay: 1000,
      loop: false,
      showCursor: true,
      cursorChar: '|',
    };

    const typed = new Typed('#typed-text', options);

    // Cleanup function to destroy the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='h-full w-full md:h-screen bg-hijau grid gap-8 justify-center items-center md:grid-cols-2 lg:grid-cols-2 box-border p-8'>
      <div className='h-auto p-8 text-balance'>
        <h1 className='font-extrabold text-4xl text-black-900'>ABOUT BIR</h1>
        <p id="typed-text" className='text-xl overflow-auto mt-4 tracking-wide text-black-900'></p>
      </div>
      <div className='h-full p-8 md:flex md:justify-center md:items-center'>
        <img
          src={pic1}
          className='md:w-auto md:h-auto lg:w-auto lg:h-auto sm:mx-auto'
          alt=''
        />
      </div>
    </div>
  );
}
