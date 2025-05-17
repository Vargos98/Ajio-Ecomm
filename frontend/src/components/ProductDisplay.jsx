import React from 'react';
import product_rt_1 from '../assets/product_rt_1.png';
import product_rt_2 from '../assets/product_rt_2.png';
import product_rt_3 from '../assets/product_rt_3.png';
import product_rt_4 from '../assets/product_rt_4.png';
import { MdStar } from 'react-icons/md';

const ProductDisplay = ({ product }) => {
  return (
    <section>
      <div>
        {/* Small Preview Images */}
        <div>
          <img src={product_rt_1} alt="productImg" className='max-h-[99px]' />
          <img src={product_rt_2} alt="productImg" className='max-h-[99px]' />
          <img src={product_rt_3} alt="productImg" className='max-h-[99px]' />
          <img src={product_rt_4} alt="productImg" className='max-h-[99px]' />
        </div>

        {/* Main Product Image */}
        <div>
          <img src={product.image} alt="productImg" className='max-h-[400px]' />
        </div>

        {/* Product Name */}
        <div>
          <h3>{product.name}</h3>
          <div>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>{111}</p>
          </div>
          <div>
            <div>{product.old_price}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
