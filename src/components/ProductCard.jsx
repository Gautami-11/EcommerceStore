const ProductCard = ({ product, viewMode, addToCart }) => {
  return (
    <div className={viewMode === 'grid' ? 'border p-4 rounded-lg' : 'border p-4 rounded-lg flex items-center space-x-4'}>
      <img src={product.thumbnail} alt={product.title} className={viewMode === 'grid' ? 'w-full h-48 object-cover' : 'w-24 h-24 object-cover'} />
      <div>
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.description || 'No description available'}</p>
        <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart({ ...product, id: product.id, name: product.title, image: product.thumbnail })}
          className="mt-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;