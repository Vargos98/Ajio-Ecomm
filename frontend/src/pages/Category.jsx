import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import all_products from '../assets/all_products'
import Item from '../components/Item' // ✅ Make sure this path is correct

const Category = ({ category, banner }) => {
  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div>
        {/* Banner Image */}
        <div>
          <img src={banner} alt="Category Banner" className="block my-7 mx-auto" />
        </div>

        {/* Header and Sort */}
        <div className="flex justify-between items-center mb-6">
          <h5 className="text-lg font-semibold">
            Showing 1–12 <span className="text-gray-500">out of 36 products</span>
          </h5>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Sort by</span>
            <MdOutlineKeyboardArrowDown size={20} />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {all_products.map((item)=>{
            if(category === item.category){
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              )
            }
          })
      }

        </div>
        <div className='mt-16 text-center'>
          <button className='btn_dark_rounded'>Load More</button>
        </div>
      </div>
    </section>
  )
}

export default Category
