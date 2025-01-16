import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-slate-300 text-white w-64 h-full p-4 fixed">
      <ul>
        <li className="py-2"><Link to="/">Home</Link></li>
        <li className="py-2"><Link to="/about">About</Link></li>
        <li className="py-2"><Link to="/contact">Contact</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
