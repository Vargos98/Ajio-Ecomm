import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <Link to={`/product/${id}`} className="block w-full max-w-xs p-4 rounded-lg border shadow hover:shadow-md transition">
      <img src={image} alt={name} className="w-full h-64 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="flex gap-4 items-center">
        <p className="text-gray-500 line-through">₹{old_price}.00</p>
        <p className="text-green-600 font-bold">₹{new_price}.00</p>
      </div>
    </Link>
  );
};

export default Item;
