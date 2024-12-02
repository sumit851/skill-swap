import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@/components/ui/button"
import LoginIcon from '@mui/icons-material/Login';

const NavBar = () => {
  return (
    <nav className="bg-red-500 shadow-md">
      <div className="max-w-7xl bg-yellow-500 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex bg-orange-950 items-center justify-between h-16">
          {/* Left Section: Logo and Search Bar */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="logo">
              <Link href="/">
             
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    priority
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-14 lg:h-14 transition-transform duration-300 hover:scale-105 object-contain"
                  />
               
              </Link>
            </div>
            {/* Search Bar */}
            <div className="ml-4 relative">
              <input
                type="text"
                placeholder="Search..."
                aria-label="Search"
                className="bg-white text-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 lg:w-80 pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <SearchIcon className="text-gray-500" />
              </div>
            </div>
          </div>
          {/* Right Section: Additional Nav Items (Optional) */}
          <div className='flex justify-center gap-2 items-center'>
            {/* Login Button with Icon */}
            <Button 
              asChild 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-300 flex items-center gap-2"
            >
              <Link href="/signup" className="flex items-center">
                <LoginIcon className="w-5 h-5" />
                <span>Signup</span>
              </Link>
            </Button>
            {/* SignUp Button */}
            <Button 
              asChild 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-green-300"
            >
              <Link href="/login">Learn</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;