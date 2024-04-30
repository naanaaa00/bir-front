import React from 'react'
import { Navbar } from '../navbar/Navbar'

export const EditPages = () => {
  return (
    <div className='  flex flex-col'>
        <Navbar/>
        <div className='border-2 border-indigo-600 h-55vh w-35vw self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl'>
        <input type="text" placeholder="Input Id" class="input w-full mb-6" />
          <textarea className="textarea textarea-warning w-full mb-6" placeholder="Summary"></textarea>
          <div className='p-2 flex flex-col sm:flex-row sm:justify-around'>
            <input type="text" class="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3 mb-6" placeholder='relatedBookId'/>
            <input type="file" class="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3" />
          </div>
          <div className='grid justify-items-stretch mt-8'>
            <button className='justify-self-center border-2 border-indigo-600 rounded-lg p-2'>Edit!</button>
          </div>
        </div>
    </div>
  )
}
