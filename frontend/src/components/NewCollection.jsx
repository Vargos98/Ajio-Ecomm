import React from 'react';
import LATEST from "../assets/latest";
import Item from './Item';

const NewCollection = () => {
  return (
    <section>
      <div className='max_padd_container py-12 xl:py-28 xl:w-[88%] mx-auto'>
        {/* Heading */}
        <h3 className='h3 text-center'>Latest Products</h3>
        <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16' />
        
        {/* Items Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {LATEST.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
