import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className="w-full max-w-xs p-4 rounded-lg border shadow hover:shadow-md transition">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="w-full h-64 object-cover mb-4 rounded" />
      </Link>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="flex gap-4 items-center">
        <p className="text-gray-500 line-through">₹{old_price}.00</p>
        <p className="text-green-600 font-bold">₹{new_price}.00</p>
      </div>
    </div>
  );
};

export default Item;
