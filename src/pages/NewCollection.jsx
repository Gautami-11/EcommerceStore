
//   const [products, setProducts] = useState([]);
//   const [viewMode, setViewMode] = useState("grid");

//   useEffect(() => {
//     fetch('https://api.mercadolibre.com/sites/MLA/search?q=joyas')
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4 mt-24">
//         <h2 className="text-2xl font-bold">Jewellery Collection</h2>
//         <div>
//           <button onClick={() => setViewMode("grid")} className="px-3 py-1 mr-2 border">Grid</button>
//           <button onClick={() => setViewMode("list")} className="px-3 py-1 border">List</button>
//         </div>
//       </div>

//       <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" : "space-y-6"}>
//         {products.map(product => (
//           <div key={product.id} className="border p-4 rounded shadow">
//             <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-2" />
//             <h3 className="text-lg font-semibold">{product.title}</h3>
//             <p className="text-sm text-gray-600">{product.description}</p>
//             <p className="text-pink-600 font-bold mt-2">${product.price}</p>
//             <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-200">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import data from '../data/jewellery.json'; // Make sure this path is correct

const NewCollection = () => {
  const [products, setProducts] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    setProducts(data);
  }, []);

  const toggleView = () => setIsGrid(!isGrid);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 mt-28">
        <h1 className="text-2xl font-bold">Jewellery Collection</h1>
        <button
          onClick={toggleView}
          className="bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700 transition"
        >
          Switch to {isGrid ? 'List' : 'Grid'} View
        </button>
      </div>

      <div className={`grid gap-6 ${isGrid ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
        {products.map((product, index) => {
          const imageArray = product.images?.split('~');
          const imageUrl = imageArray?.[0]?.trim();

          return (
            <div
              key={product.sku || index}
              className={`border rounded p-4 shadow ${isGrid ? '' : 'flex gap-4'}`}
            >
              <img
                src={imageUrl}
                alt={product.title}
                className={`${
                  isGrid ? 'w-full h-86' : 'w-32 h-32'
                } object-cover mb-2 ${isGrid ? '' : 'mb-0'}`}
              />
              <div className={`${isGrid ? '' : 'flex flex-col justify-between'}`}>
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="mt-2 font-bold text-pink-600">₹{product.price}</p>
                <p className="text-xs text-gray-600">
                  {Array.isArray(product.tags)
                    ? product.tags.join(', ')
                    : product.tags || 'No tags available'}
                </p>
                <div className="text-xs text-gray-400">SKU: {product.sku}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
