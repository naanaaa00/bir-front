import React from 'react';
import foot from "./assets/Menu.svg";
import ilus from "./assets/Illustration (1).svg";

export const Login2 = () => {
  const bgStyle = {
    backgroundImage: `url(${foot})`, // using template literal to set the background image URL
  };
  
  return (
   <div className='h-screen w-screen'>
      <div className='flex flex-col h-full'>
        <div className='h-full w-full sm:h-3/4 sm:flex sm:justify-between'>

        {/* form */}
          <div className='h-full sm:w-1/2 p-16 ml-8'>
            <div className='border-2 border-hijau2 rounded-xl h-3/4 sm:h-full w-full '>
              <div className='text-center mt-6'>
                <h3 className='text-hijau2 font-bold'>Login to Your</h3>
                <h3 className='text-hijau2 font-bold'>Account</h3>
              </div>
              <form className='flex flex-col items-center px-8 py-32'>
                <div className='relative my-4 w-full'>
                <input
                    type="email"
                    className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white-A700 focus:border-blue-600 peer"
                    placeholder=""
                  />
                  <label
                    htmlFor=""
                    className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-hijau2 peer-focus:dark:text-hijau2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
                  >
                    Email
                  </label>
                  <hr className="border-gray-300 absolute w-full bottom-0 left-0 duration-300 transform translate-y-5 peer-focus:translate-y-0" />
                </div>
                <div className=" relative my-4 w-full">
                  <input
                    type="password"
                    className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-blue-600 peer"
                    placeholder=""
                  />
                  <label
                    htmlFor=""
                    className=" absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-hijau2 peer-focus:dark:text-hijau2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
                  >
                    Password
                  </label>
                  <hr className="border-gray-300 absolute w-full bottom-0 left-0 duration-300 transform translate-y-5 peer-focus:translate-y-0" />

                </div>
                <button className="border border-hijau2 w-24 h-12  text-[18px] mt-16 rounded-lg bg-white-A700 text-emerald-800 hover:bg-emerald-600 hover:text-white-A700 py-2 transition-colors duration-500 flex items-center justify-center !h-8" type="submit">
                  Login
                </button>
                
              </form>
              
            <img src={foot} className='sm:hidden'/>
            </div>
          </div>
          
        {/* image */}
          <div className='hidden sm:block sm:w-1/2 p-16 '>
          <div className='text-center'>
              <h2 className='font-bold text-hijau2 text-xl'>BIR</h2>
              <span className='text-lg'>Buku Interaktif Remaja adalah Sebuah Website yang menyediakan seputar permasalahan remaja masa kini.</span>
          </div>
            <img src={ilus} className='h-full w-full object-contain' />
          </div>

        </div>
        <div className='hidden sm:block sm:h-1/4'>
          <img src={foot} className='h-full w-full'/>
        </div>

      </div>
   </div>
  );
};