import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">No Products Found</h1>
      <p className="text-gray-600 text-lg mb-6">Try adjusting your search or filter.</p>
      <button
        onClick={() => navigate('/newcollections')}
        className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
      >
        Back to Collections
        
      </button>
    </div>
  );
};

export default NotFound;