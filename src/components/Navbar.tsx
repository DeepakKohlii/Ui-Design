import React from "react";
import { FaSearch } from "react-icons/fa";

import rows from "../assets/rows.svg";
import columns from "../assets/columns.svg";
import filter from "../assets/filter.svg";
import switchicon from "../assets/switch.svg";
import star from "../assets/star.svg";
import share from "../assets/share.svg";
import download from "../assets/download.svg";
import trash from "../assets/trash.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-4 lg:py-6 flex flex-wrap items-center justify-between">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 w-full lg:w-auto">
        <div className="flex items-center border bg-[#F9FAFB] rounded-md px-2 py-1 w-full lg:w-[300px] mb-4 lg:mb-0">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none bg-[#F9FAFB] text-gray-700 w-full"
          />
        </div>

        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between lg:justify-start lg:space-y-0 lg:space-x-6 text-gray-600">
          <button className="flex items-center space-x-1">
            <img src={rows} alt="Rows" className="w-4 h-4" />
            <span className="text-sm">1/1 Row</span>
          </button>

          <button className="flex items-center space-x-1">
            <img src={columns} alt="Columns" className="w-4 h-4" />
            <span className="text-sm">3/3 Column</span>
          </button>

          <button className="flex items-center space-x-1">
            <img src={filter} alt="Filter" className="w-4 h-4" />
            <span className="text-sm">0 Filter</span>
          </button>

          <button className="flex items-center space-x-1">
            <img src={switchicon} alt="Switch" className="w-4 h-4" />
            <span className="text-sm">Sort</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 w-full lg:w-auto mt-4 lg:mt-0">
        <button className="bg-[#1F2A37] text-white flex items-center px-4 py-2 rounded-lg shadow-md w-full lg:w-auto justify-center lg:justify-start">
          <img src={star} alt="Star" className="w-4 h-4 mr-2" />
          Enrich
        </button>

        <div className="flex items-center space-x-4 text-gray-600 justify-center lg:justify-start w-full lg:w-auto">
          <img src={share} alt="Share" className="w-5 h-5" />
          <img src={download} alt="Download" className="w-5 h-5" />
          <img src={trash} alt="Trash" className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
