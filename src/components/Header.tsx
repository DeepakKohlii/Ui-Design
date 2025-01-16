import React from 'react';
import { IoArrowBack } from 'react-icons/io5'; 

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Left Section: Back Arrow and Title */}
      <div className="flex items-center">
        <IoArrowBack className="text-xl mr-4" />
        <span className="text-lg font-medium">Name of the file</span>
      </div>
      
      {/* Right Section: Auto Save Toggle and User Icon */}
      <div className="flex items-center">
        <label className="flex items-center cursor-pointer mr-4">
          <input type="checkbox" className="hidden" />
          <span className="relative">
            <span className="block w-10 h-6 bg-gray-600 rounded-full shadow-inner"></span>
            <span className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition"></span>
          </span>
          <span className="ml-3 text-green-500 font-medium">Auto Save</span>
        </label>
        
        {/* User Icon */}
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-white text-sm">U</span> 
        </div>
      </div>
    </header>
  );
};

export default Header;
