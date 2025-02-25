import React from 'react';
import ProductCard from '../molecules/ProductCard';
import '../../styles/organisms/ProductGrid.css';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={products.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
