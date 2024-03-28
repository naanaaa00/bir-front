import React from 'react'

import Activity from '../assets/what/Activity.svg'
import Heart from '../assets/what/Heart.svg'
import Vector from '../assets/what/Vector.svg'
import Work from '../assets/what/Work.svg'

export const P3 = () => {
  return (
    <div className=' p-8 m-8 h-full'>

        <div className='flex flex-col p-8'>
            <span className='text-hijau2 text-2xl font-bold mb-4'>WHAT WE DO</span>
            <span className='font-bold text-4xl'>We provide the perfect solution</span>
            <span className='font-bold text-4xl'>to your business growth</span>
        </div>

        <div className='flex flex-col mt-8 md:flex-row md:justify-between '>

          <div className='mt-8  mx-7'>
            <div className='flex flex-col items-start '>
            <img src={Activity} className='w-30 h-32' alt="Activity Icon"/>
              <span className="text-start font-bold text-4xl mt-3 mb-4">Grow Your Business</span>
              <span className="text-start font-bold italic text-xl">We help identify the best ways to</span>
              <span className="text-start font-bold italic text-xl">improve your businedd</span>
            </div>
            <div  className='flex justify-center mt-8 '>
              <span className='font-bold mr-2'>Learn More</span>
              <img src={Vector} className='mr-5rem'/>
            </div>
          </div>

          <div className='mt-8  mx-7'>
            <div className='flex flex-col items-start'>
              <img src={Heart}  className='w-30 h-32'/>
              <span className="text-start font-bold text-4xl mt-3 mb-4">Grow Your Business</span>
              <span className="text-start font-bold italic text-xl">We help identify the best ways to</span>
              <span className="text-start font-bold italic text-xl">improve your businedd</span>
            </div>
            <div  className='flex justify-center mt-8'>
            <span className='font-bold mr-2'>Learn More</span>
            <img src={Vector} className='mr-5rem'/>
            </div>
          </div>

          <div className='mt-8  mx-7'>
            <div className='flex flex-col items-start '>
              <img src={Work}  className='w-30 h-32'/>
              <span className="text-start font-bold text-4xl mt-3 mb-4">Grow Your Business</span>
              <span className="text-start font-bold italic text-xl">We help identify the best ways to</span>
              <span className="text-start font-bold italic text-xl">improve your businedd</span>
            </div>
            <div className='flex justify-center mt-8'>
            <span className='font-bold mr-2'>Learn More</span>
            <img src={Vector} className='mr-5rem'/>
            </div>
          </div>

        </div>
    </div>
  )
}
