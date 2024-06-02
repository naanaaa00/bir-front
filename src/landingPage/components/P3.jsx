import React from 'react'

import Daffa from '../assets/anggota/dafa].png'
import Angga from '../assets/anggota/angga2.png'
import Damar from '../assets/anggota/damar3.png'
import Nana from '../assets/anggota/nana2.png'
import Ocid from '../assets/anggota/ocid.png'

export const P3 = () => {
  return (
    <div id="p3" className=' p-8 m-8 h-full bg-white-A700'>

        <div className='flex flex-col p-4'>
            <span className='text-hijauCustom text-4xl font-bold font-stylish'>Anggota Tim dan Jobdesk</span>
            {/* <span className='font-bold text-4xl text-black-900'>We provide the perfect solution</span>
            <span className='font-bold text-4xl text-black-900'>to your business growth</span> */}
        </div>

        <div className='flex flex-wrap lg:flex lg:justify-evenly lg:p-8'>

          <div className='mt-8  mx-7'>
            <div className='flex flex-col items-start '>

            <div className=' relative'>
              <div className='flex flex-col items-start'>
                <div className='absolute top-0 left-0'>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='w-30 h-32 ml-9'>
                    <path fill="#D7F5DC" d="M53.1,-61C69.1,-49.8,82.7,-33.4,84.8,-15.8C86.9,1.8,77.6,20.6,67,38.5C56.5,56.4,44.7,73.4,27.7,82.2C10.7,91.1,-11.5,91.9,-28.3,83.4C-45.1,74.9,-56.5,57,-64.6,39.2C-72.6,21.3,-77.3,3.4,-76.4,-15.4C-75.4,-34.3,-68.8,-54.2,-55.1,-65.8C-41.4,-77.4,-20.7,-80.8,-1.1,-79.5C18.5,-78.2,37,-72.2,53.1,-61Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className='w-30 h-32 z-50' >

                <img src={Angga} className='w-25 h-28  ml-12 mt-4' alt=""/>
                </div>
              </div>
            </div>


              <span className="text-start font-bold text-4xl mt-3 mb-4 text-black-900 font-abc">Angga Cipta Pranata</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Tim Leader</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Backend Developer</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Create Story</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Scrum</span>
            </div>
            {/* <div  className='flex justify-center mt-8 '>
              <span className='font-bold mr-2 text-black-900'>Learn More</span>
              <img src={Blob} className='mr-5rem'/>
            </div> */}
          </div>

          <div className='mt-8  mx-7'>
            <div className='flex flex-col items-start '>
            

            <div className=' relative'>
              <div className='flex flex-col items-start'>
                <div className='absolute top-0 left-0'>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='w-30 h-32 ml-9'>
                    <path fill="#D7F5DC" d="M53.1,-61C69.1,-49.8,82.7,-33.4,84.8,-15.8C86.9,1.8,77.6,20.6,67,38.5C56.5,56.4,44.7,73.4,27.7,82.2C10.7,91.1,-11.5,91.9,-28.3,83.4C-45.1,74.9,-56.5,57,-64.6,39.2C-72.6,21.3,-77.3,3.4,-76.4,-15.4C-75.4,-34.3,-68.8,-54.2,-55.1,-65.8C-41.4,-77.4,-20.7,-80.8,-1.1,-79.5C18.5,-78.2,37,-72.2,53.1,-61Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <img src={Daffa} className='w-50 h-52 z-50 -mt-20' alt=""/>
              </div>
            </div>


              <span className="text-start font-bold text-4xl mt-3 mb-4 text-black-900 font-abc">Daffa Muhammad Irhamni</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Frontend Developer</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Create Desain With Figma</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Searching Music</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Administrator</span>
            </div>
            {/* <div  className='flex justify-center mt-8 '>
              <span className='font-bold mr-2 text-black-900'>Learn More</span>
              <img src={Blob} className='mr-5rem'/>
            </div> */}
          </div>

          <div className='mt-8  mx-7'>
            <div className='flex flex-col items-start '>
            
            <div className=' relative'>
              <div className='flex flex-col items-start'>
                <div className='absolute top-0 left-0'>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='w-30 h-32 ml-9'>
                    <path fill="#D7F5DC" d="M53.1,-61C69.1,-49.8,82.7,-33.4,84.8,-15.8C86.9,1.8,77.6,20.6,67,38.5C56.5,56.4,44.7,73.4,27.7,82.2C10.7,91.1,-11.5,91.9,-28.3,83.4C-45.1,74.9,-56.5,57,-64.6,39.2C-72.6,21.3,-77.3,3.4,-76.4,-15.4C-75.4,-34.3,-68.8,-54.2,-55.1,-65.8C-41.4,-77.4,-20.7,-80.8,-1.1,-79.5C18.5,-78.2,37,-72.2,53.1,-61Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className='w-30 h-32 z-50' >

                <img src={Nana} className='w-40 h-36  ml-6 -mt-6' alt=""/>
                </div>
              </div>
            </div>

              <span className="text-start font-bold text-4xl mt-3 mb-4 text-black-900 font-abc">Waridatul Jannah</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Frontend Developer</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Create Story</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Administrator</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Scrum</span>
            </div>
            {/* <div  className='flex justify-center mt-8 '>
              <span className='font-bold mr-2 text-black-900'>Learn More</span>
              <img src={Vector} className='mr-5rem'/>
            </div> */}
          </div>

          <div className='mt-8  mx-7'>
            <div className='flex flex-col items-start'>
             
            <div className=' relative'>
              <div className='flex flex-col items-start'>
                <div className='absolute top-0 left-0'>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='w-30 h-32 ml-9'>
                    <path fill="#D7F5DC" d="M53.1,-61C69.1,-49.8,82.7,-33.4,84.8,-15.8C86.9,1.8,77.6,20.6,67,38.5C56.5,56.4,44.7,73.4,27.7,82.2C10.7,91.1,-11.5,91.9,-28.3,83.4C-45.1,74.9,-56.5,57,-64.6,39.2C-72.6,21.3,-77.3,3.4,-76.4,-15.4C-75.4,-34.3,-68.8,-54.2,-55.1,-65.8C-41.4,-77.4,-20.7,-80.8,-1.1,-79.5C18.5,-78.2,37,-72.2,53.1,-61Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className='w-30 h-32 z-50' >

                <img src={Damar} className='w-25 h-28  ml-9 mt-4' alt=""/>
                </div>
              </div>
            </div>

              <span className="text-start font-bold text-4xl mt-3 mb-4 text-black-900 font-abc">Damar Galih Aji Pradana</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Create Desain Web With Figma</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Create Logo Desain</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900">Create Animasi</span>
            </div>
            {/* <div  className='flex justify-center mt-8'>
            <span className='font-bold mr-2 text-black-900'>Learn More</span>
            <img src={Vector} className='mr-5rem'/>
            </div> */}
          </div>

          <div className='mt-8  mx-7'>
            <div className='flex flex-col items-start '>
             
            <div className=' relative'>
              <div className='flex flex-col items-start'>
                <div className='absolute top-0 left-0'>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='w-30 h-32 ml-9'>
                    <path fill="#D7F5DC" d="M53.1,-61C69.1,-49.8,82.7,-33.4,84.8,-15.8C86.9,1.8,77.6,20.6,67,38.5C56.5,56.4,44.7,73.4,27.7,82.2C10.7,91.1,-11.5,91.9,-28.3,83.4C-45.1,74.9,-56.5,57,-64.6,39.2C-72.6,21.3,-77.3,3.4,-76.4,-15.4C-75.4,-34.3,-68.8,-54.2,-55.1,-65.8C-41.4,-77.4,-20.7,-80.8,-1.1,-79.5C18.5,-78.2,37,-72.2,53.1,-61Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className='w-30 h-32 z-50' >

                <img src={Ocid} className='w-25 h-28  ml-7 mt-2' alt=""/>
                </div>
              </div>
            </div>
            
              <span className="text-start font-bold text-4xl mt-3 mb-4 text-black-900 font-abc">Rosyid Ferdiansyah</span>
              <span className="text-start font-bold italic text-2xl font-stylish text-black-900 ">Backend Developer</span>
              <span className="text-start font-bold italic text-2xl text-black-900 font-stylish">Create Logo Desain</span>
              <span className="text-start font-bold italic text-2xl text-black-900 font-stylish">Searching Music</span>
            </div>
            {/* <div className='flex justify-center mt-8'>
            <span className='font-bold mr-2 text-black-900'>Learn More</span>
            <img src={Vector} className='mr-5rem'/>
            </div> */}
          </div>

        </div>
        
    </div>
  )
}
