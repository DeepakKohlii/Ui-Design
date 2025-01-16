import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import userIcon from "../assets/user-03.svg";

const Header: React.FC = () => {
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(false);

  const toggleAutoSave = () => {
    setIsAutoSaveEnabled((prev) => !prev);
  };

  return (
    <header className="fixed top-0 z-10 flex items-center justify-between p-4 border-b border-gray-300 bg-white shadow w-full">

      <div className="flex items-center">
        <IoArrowBack className="text-xl mr-4" />
        <span className="text-lg font-medium">Name of the file</span>
      </div>

      <div className="flex items-center">
        <label
          className="flex items-center cursor-pointer mr-4"
          onClick={toggleAutoSave}
        >
          <input
            type="checkbox"
            checked={isAutoSaveEnabled}
            onChange={toggleAutoSave}
            className="hidden"
          />
          <span className="relative">
            <span
              className={`block w-10 h-6 rounded-full shadow-inner transition-colors duration-300 ${
                isAutoSaveEnabled ? "bg-green-500" : "bg-gray-600"
              }`}
            ></span>
            <span
              className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
                isAutoSaveEnabled ? "translate-x-4" : ""
              }`}
            ></span>
          </span>
          <span className="ml-3 text-[#0E9F6E] text-sm">Auto Save</span>
        </label>

        <div className="w-8 h-8 rounded-full bg-[#FEECDC] flex items-center justify-center">
          <img src={userIcon} alt="User Icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
