import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">My App</h1>
        <div>
          <Link className="mx-2" to="/">Home</Link>
          <Link className="mx-2" to="/about">About</Link>
          <Link className="mx-2" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
