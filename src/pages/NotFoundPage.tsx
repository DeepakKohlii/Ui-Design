import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 mt-4">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
