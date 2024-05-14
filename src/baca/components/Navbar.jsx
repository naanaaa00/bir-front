import React from 'react'
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaHome } from "react-icons/fa";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  
export const Navbar = () => {
  return (
    <Disclosure as="nav" className="fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="  w-full h-10vh mt-4">
              <div className="hidden sm:block sm:ml-6  justify-end">
                <div className=" flex my-1.5 justify-between">
                  <a href='/' className=''>
                    <FaHome className='text-4xl'/>
                  </a>
                  <a href="/login" className={classNames("border-2 rounded-lg border-hijau2 py-2 px-6 font-bold mr-4 hover:bg-hijau2 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium transition duration-300")}>
                    Login
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Mobile menu button */}
                <Disclosure.Button className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>


            <Disclosure.Panel className="sm:hidden  flex justify-center items-center shadow-md bg-hijau h-30vh">
          
          <div className="space-y-1 px-2 pb-3 pt-2 text-center">
            <a href="#" className=" text-gray-700 hover:bg-yellow-300  block rounded-md px-3 py-2 text-base font-medium">
              Login
            </a>
            <a href="#" className="text-gray-700 hover:bg-yellow-300  block rounded-md px-3 py-2 text-base font-medium">
              Home
            </a>
            
          </div>
        </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
