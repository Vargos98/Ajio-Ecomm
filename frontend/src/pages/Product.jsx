import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import ProductHd from '../components/ProductHd';
import ProductDisplay from '../components/ProductDisplay';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <section>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
      </div>
    </section>
  );
};

export default Product;
