"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaDiscord, FaArrowRight, FaBars, FaTimes, FaPatreon } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Eventos', path: '/events' },
  { name: 'Patreon', path: '/patreon' },
  { name: 'Comunidad', path: '/community' },
  { name: 'Minecraft', path: '/minecraft' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contacto', path: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-md py-3 border-b border-primary-500/30'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Gradient border effect */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/80 to-transparent ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Header background with animated gradient when scrolled */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 opacity-90"></div>
      )}
    
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 relative z-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-primary-400/70 shadow-lg group-hover:shadow-primary-500/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
            <Image
              src="/images/logo.png"
              alt="GW2 Logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40px, 48px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">GW2</span>
            <span className="text-xs text-gray-400 -mt-1 hidden md:block">Community</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`font-medium relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5
                ${pathname === item.path 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
                }
              `}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Active page indicator - gradient pill */}
              {pathname === item.path && (
                <span className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-secondary-600/80 rounded-lg opacity-70"></span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="https://discord.gg/gatitos2"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 border border-primary-500/50 shadow-md hover:shadow-primary-500/20 transition-all duration-300"
          >
            <FaDiscord className="mr-2 text-xl" />
            <span>Únete</span>
            <FaArrowRight className="ml-2 text-sm" />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 border border-primary-500/50 shadow-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - with glass morphism */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-20 bg-dark-950/90 backdrop-blur-lg animate-fadeIn">
          <div className="px-4 py-5 space-y-3 max-h-screen overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-3 px-4 font-medium rounded-lg transition-all duration-300 ${
                  pathname === item.path 
                    ? 'bg-gradient-to-r from-primary-600/90 to-secondary-600/90 text-white border border-primary-500/50 shadow-inner' 
                    : 'text-gray-300 border border-transparent hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-800/50 grid grid-cols-2 gap-3">
              <a
                href="https://discord.gg/gatitos2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3 px-3 rounded-lg text-white font-medium bg-gradient-to-r from-primary-600 to-primary-700 border border-primary-500/50 shadow-md"
              >
                <FaDiscord className="mr-2 text-xl" />
                <span>Discord</span>
              </a>
              <a
                href="https://www.patreon.com/gatitos2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3 px-3 rounded-lg text-white font-medium bg-gradient-to-r from-secondary-600 to-secondary-700 border border-secondary-500/50 shadow-md"
              >
                <FaPatreon className="mr-2 text-xl" />
                <span>Patreon</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
