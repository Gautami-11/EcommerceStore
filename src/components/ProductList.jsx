import ProductCard from './ProductCard';

const ProductList = ({ products, viewMode, addToCart }) => {
  return (
    <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} viewMode={viewMode} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;