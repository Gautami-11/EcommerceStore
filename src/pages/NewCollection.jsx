import { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';

const NewCollection = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isGrid, setIsGrid] = useState(true);
   const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const toggleView = () => setIsGrid(!isGrid);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
    if (filtered.length === 0) {
      navigate('/notfound'); 
    }
  };

  return (
    <div className="textfont min-h-screen overflow-y-auto custom-scrollbar-hide">
      <div className="flex flex-wrap justify-between items-center mb-6 p-5 mt-28 gap-4">
        <h1 className="text-2xl font-bold">Jewellery Collection</h1>

        <div className="flex items-center gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded shadow-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-pink-600 text-white px-4 py-1 rounded shadow hover:bg-pink-700 transition"
          >
            Search
          </button>
          <button
            onClick={toggleView}
            className="bg-gray-700 text-white px-4 py-1 rounded shadow hover:bg-gray-800 transition"
          >
            {isGrid ? 'List View' : 'Grid View'}
          </button>
        </div>
      </div>

     
        <div className={`grid gap-6 px-5 ${isGrid ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20' : 'grid-cols-1 mb-10'}`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`border border-rose-200 p-4 ${isGrid ? '' : 'flex gap-4'}`}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className={`${isGrid ? 'w-80 h-80' : 'w-32 h-32'} object-cover mb-2 ${isGrid ? '' : 'mb-0'}`}
              />
              <div className={`${isGrid ? '' : 'flex flex-col justify-between'}`}>
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="mt-2 font-bold text-pink-600">₹{product.price * 85}</p>
                <div className="text-xs text-gray-400">Rating: {product.rating} ⭐</div>
                <div className="text-xs text-gray-400">ID: {product.id}</div>
              </div>
            </div>
          ))}
        </div>
    

      <Footer />
    </div>
  );
};

export default NewCollection;
