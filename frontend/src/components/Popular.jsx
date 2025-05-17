import React from 'react';
import { POPULAR } from '../assets/data';
import Item from './Item';

const Popular = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-2">Popular Products</h3>
        <hr className="mb-6" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {POPULAR.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
