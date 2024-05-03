import React from 'react'
import { Navbar } from '../navbar/Navbar'

export const EditBook = () => {
  return (
    <div className=' flex flex-col'>
    <Navbar />
    <div className='self-center h-screen'>
      <div className='border-2 border-indigo-600 h-sc w-35vw self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl'>
        <input type="text" placeholder="Input Id" class="input w-full mb-6" />
        <textarea className="textarea textarea-warning w-full mb-6" placeholder="Summary"></textarea>
        <input type="text" placeholder="Tittle" class="input w-full mb-6" />
        <div className='p-2 flex sm:justify-around'>
          <input type="file" class="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3" />
          <input type="file" class="file-input file-input-bordered file-input-xs w-full max-w-xs" />
        </div>
        <div className='grid justify-items-stretch mt-8'>
          <button className='justify-self-center border-2 border-indigo-600 rounded-lg p-2'>Edit!</button>
        </div>
      </div>
    </div>

    <div className='h-60vh overflow-x-auto overflow-auto border-2 border-indigo-600 self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl -mt-14'>
    <table class="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>tittle</th>
        <th>summary</th>
        <th>file</th>
        <th>fileImage</th>
      </tr>
      </thead>
      <tbody>
      <tr className='hover'>
        <th></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    </div>    
    </div>
  )
}
