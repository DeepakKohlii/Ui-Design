import React from "react";
import { Link } from "react-router-dom";
import tableIcon from "../assets/table.svg";
import PuzzleIcon from "../assets/puzzle.svg";
import Icon from "../assets/Icon.svg";
import CreditCard from "../assets/credit-card.svg";
import Coins from "../assets/coins.svg";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white w-16 h-full fixed flex justify-between flex-col py-6 shadow-md">
      <ul className="flex flex-col items-center space-y-8">
        <li>
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            <img src={tableIcon} alt="Table" className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-600 hover:text-blue-500">
            <img src={PuzzleIcon} alt="Puzzle" className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">
            <img src={Icon} alt="Icon" className="w-6 h-6" />
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col items-center space-y-18">
        <li className="mb-8">
          <Link to="/data" className="text-gray-600 hover:text-blue-500">
            <img src={CreditCard} alt="Icon" className="w-6 h-6" />
          </Link>
        </li>
        <li className="mb-14">
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">
            <img src={Coins} alt="Icon" className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
