import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
// import user from '../assets/user.svg'
import Navbar from './Navbar'
import { MdMenu, MdClose } from 'react-icons/md'
import { FaShoppingCart } from "react-icons/fa"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const mobileNavClasses = `
    flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white 
    rounded-3xl shadow-md w-64 ring-1 ring-slate-900/5 
    transition-all duration-300 medium-10
    ${menuOpen ? "right-8" : "-right-[100%]"}
  `

  return (
    <header className='fixed top-0 left-0 mx-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10 '>
      <div className='px-4 flex justify-between items-center py-3 max-xs:px-2'>

        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" height={66} width={88} />
          </Link>
        </div>

        {/* Navbar - Desktop */}
        <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-10" />

        {/* Right side - Desktop Login + Cart */}
        <div className='hidden md:flex items-center gap-x-6 bold-16'>
          <NavLink to="/cart-page" className="flex items-center relative">
            <FaShoppingCart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-secondary text-white medium-14 flex items-center justify-center">0</span>
          </NavLink>

          <NavLink to="/login" className="btn_secondary_rounded flex items-center gap-x-2 medium-10">
            {/* <img src={user} height={19} width={19} alt="User" /> */}
            <span>Login</span>
          </NavLink>
        </div>

        {/* Navbar - Mobile */}
        <Navbar containerStyles={mobileNavClasses} />

        {/* Toggle Button + Cart + Login - Mobile */}
        <div className='md:hidden flex items-center gap-x-3 bold-16'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen ? (
              <MdMenu className="cursor-pointer hover:text-secondary p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary" />
            ) : (
              <MdClose className="cursor-pointer hover:text-secondary p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary" />
            )}
          </button>

          <NavLink to="/cart-page" className="flex items-center relative">
            <FaShoppingCart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-secondary text-white medium-14 flex items-center justify-center">0</span>
          </NavLink>

          <NavLink to="/login" className="btn_secondary_rounded flex items-center gap-x-2 medium-10">
            {/* <img src={user} height={19} width={19} alt="User" /> */}
            <span>Login</span>
          </NavLink>
        </div>

      </div>
    </header>
  )
}

export default Header
