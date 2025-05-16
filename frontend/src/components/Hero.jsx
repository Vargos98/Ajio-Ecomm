import React from 'react'
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-hero bg-no-repeat bg-cover bg-center relative pt-28">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 flex flex-col justify-center items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-2xl leading-snug mb-4 sm:mb-6">
          Digital Shopping Hub Junction
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-5 sm:mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet cupiditate 
          consequuntur blanditiis alias aut quo vitae, adipisci rem animi atque ut soluta odio. 
          Quo fuga obcaecati voluptas est dolore minus tenetur culpa. Quidem natus nostrum iusto quam.
        </p>

        {/* Ratings */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5 sm:mb-6">
          <div className="flex text-yellow-400 text-lg sm:text-xl">
            {[...Array(4)].map((_, index) => (
              <MdStar key={index} />
            ))}
          </div>
          <div className="text-base sm:text-lg font-semibold text-white">
            176k <span className="text-gray-300 font-normal">Excellent Reviews</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/shop"
            className="bg-white text-black text-center font-medium rounded-full px-6 py-3 hover:bg-gray-200 transition-all duration-300"
          >
            Shop Now
          </NavLink>
          <NavLink
            to="/offers"
            className="flex items-center justify-center gap-x-2 px-6 py-3 text-white bg-secondary rounded-full hover:bg-secondary-dark transition-all duration-300"
          >
            <MdOutlineLocalOffer className="text-xl sm:text-2xl" />
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Hero
