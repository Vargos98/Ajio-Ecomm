import React from 'react';

const NewsLetter = () => {
  return (
    <section className="max_padd_container py-12 xl:py-28 bg-white">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-y-6 px-4">
        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Get Exclusive Offers in Your Email
        </h3>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-600 uppercase font-medium">
          Subscribe to our newsletter and stay updated
        </p>

        {/* Input and Button */}
        <div className="flex w-full max-w-xl mt-4 ring-1 ring-gray-300 rounded-full overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-primary transition">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
