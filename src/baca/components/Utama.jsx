import React from 'react'

import Perias from '../assets/Group.svg';

export const Utama = () => {
  return (
    <div className='h-screen  py-20 px-7 '>
      <div className='h-full border-2 border-indigo-600 rounded-lg overflow-auto grid grid-cols-3 gap-2'>
  <img src={Perias} className='w-16 mb-5 place-self-start'/>
  <img src={Perias} className='w-16 mb-5 place-self-end '/>
</div>

    </div>
  )
}
