import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "My Work", href: "#work" },
    { label: "Contact me", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Colors
  const linkColor = isDarkMode ? "text-white" : "text-black"
  const contactColor = isDarkMode ? "text-white border-white" : "text-black border-gray-500"
  const mobileMenuBg = isDarkMode ? (isScroll ? "bg-black bg-opacity-70" : "bg-transparent") : "bg-rose-50"
  const navbarBg = isScroll
    ? isDarkMode
      ? "bg-black bg-opacity-70 shadow-sm"
      : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
    : isDarkMode
    ? "bg-transparent"
    : "bg-white bg-opacity-50 shadow-sm"

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${navbarBg}`}
      >
        {/* Logo */}
        <a href="#top" className="transition-all duration-300">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-colors duration-300">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={`font-ovo transition-colors duration-300 ${linkColor}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 transition-colors duration-300">
          {/* Dark mode toggle */}
          <button onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle dark mode">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle dark mode"
              className="w-6"
            />
          </button>

          {/* Contact button */}
          <a
            href="#contact"
            className={`font-ovo hidden lg:flex items-center gap-3 px-10 border rounded-full ml-4 transition-colors duration-300 ${contactColor}`}
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3"/>
          </a>

          {/* Mobile menu button */}
          <button
            className="block md:hidden ml-3"
            aria-label="Open mobile menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Open menu" className="w-6 cursor-pointer"/>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500 ${isMenuOpen ? "right-0" : "-right-64"} ${mobileMenuBg}`}
        >
          <button
            className="absolute right-6 top-6"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close menu" className="w-5 cursor-pointer"/>
          </button>

          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-ovo transition-colors duration-300 ${linkColor}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
