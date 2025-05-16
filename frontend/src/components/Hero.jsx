// components/Hero.jsx

import React from 'react';
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-hero bg-no-repeat bg-cover bg-center pt-28">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-start h-full">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-snug max-w-2xl mb-5 sm:mb-6">
          Digital Shopping Hub Junction
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-xl mb-5 sm:mb-6">
          Discover the best deals and the widest range of products all in one place. Your ultimate shopping destination awaits—anytime, anywhere.
        </p>

        {/* Rating */}
        <div className="flex flex-wrap items-center gap-3 mb-5 sm:mb-6">
          <div className="flex text-yellow-400 text-xl sm:text-2xl">
            {[...Array(4)].map((_, index) => (
              <MdStar key={index} />
            ))}
          </div>
          <div className="text-lg sm:text-xl font-semibold text-white">
            176k <span className="text-gray-300 font-normal">Excellent Reviews</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/shop"
            className="bg-white text-black text-center font-medium rounded-full px-6 py-3 text-base sm:text-lg hover:bg-gray-200 transition-all duration-300"
          >
            Shop Now
          </NavLink>
          <NavLink
            to="/offers"
            className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-secondary rounded-full text-base sm:text-lg hover:bg-secondary-dark transition-all duration-300"
          >
            <MdOutlineLocalOffer className="text-xl sm:text-2xl" />
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
