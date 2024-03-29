import React from 'react';
import raise from '../assets/frame-14/raise.svg';
import rating from '../assets/frame-14/rating.svg';
import timeline from '../assets/frame-14/timeline.svg';
import project from '../assets/frame-14/project-plan.svg';

import { Subscribe } from './Subscribe';

export const P4 = () => {
  return (
    <div>
    <div className='h-full bg-hmuda flex flex-wrap justify-center items-center lg:justify-evenly p-8'>

      <div className='w-48 p-4 text-center'>
        <img src={project} className='mx-auto mb-3' style={{ width: '100px', height: '100px' }} />
        <span className='block'>Completed Projects</span>
        <span className='block text-hfont font-bold text-4xl italic'>100 +</span>
      </div>

      <div className='w-48 p-4 text-center'>
        <img src={rating} className='mx-auto mb-3' style={{ width: '100px', height: '100px' }} />
        <span className='block'>Customer Satisfaction</span>
        <span className='block text-hfont font-bold text-4xl italic'>20 %</span>
      </div>

      <div className='w-48 p-4 text-center'>
        <img src={raise} className='mx-auto mb-3' style={{ width: '100px', height: '100px' }} />
        <span className='block'>Raised by Clients</span>
        <span className='block text-hfont font-bold text-4xl italic'> $10M</span>
      </div>

      <div className='w-48 p-4 text-center'>
        <img src={timeline} className='mx-auto mb-3' style={{ width: '100px', height: '100px' }} />
        <span className='block'>Years in Business</span>
        <span className='block text-hfont font-bold text-4xl italic'>2 yrs</span>
      </div>
    </div>
    <Subscribe/>
    </div>
  );
};
