import React from 'react'
import { Navbar } from '../navbar/Navbar'

export const DeletePages = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
       
        <div className='border-2 border-indigo-600 self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl'>
          <input type="text" placeholder="ID Pages" class="input w-2/4 mr-6" />
          <button className='-mr-12 border-2 border-indigo-600 rounded-lg p-4  '>Submit!</button>
        </div>

    </div>
  )
}
