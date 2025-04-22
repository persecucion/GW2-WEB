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
          ? 'bg-dark-900 py-3 shadow-2xl border-b border-primary-800'
          : 'bg-dark-900 py-4'
      }`}
    >
      {/* Borde inferior */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-primary-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
    
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 relative z-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-primary-400 shadow-lg">
            <Image
              src="/images/logo.png"
              alt="GW2 Logo"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-primary-400">GW2</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`font-medium relative py-2
                ${pathname === item.path ? 'text-primary-400' : 'text-gray-300'}
              `}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Indicador de página activa */}
              {pathname === item.path && (
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://discord.gg/gatitos2"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-5 py-2.5 rounded-full text-white font-medium bg-primary-600 border border-primary-500"
          >
            <FaDiscord className="mr-2 text-xl" />
            <span>Únete</span>
            <FaArrowRight className="ml-2" />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-full bg-primary-600 border border-primary-500 shadow-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-dark-800 border-t border-primary-800 shadow-lg"
        >
          <div className="px-4 py-5 space-y-3 relative z-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-2.5 px-4 font-medium rounded-lg ${
                  pathname === item.path 
                    ? 'bg-primary-600 text-white border border-primary-500 shadow-inner' 
                    : 'text-gray-300 border border-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-gray-800 flex gap-3">
              <a
                href="https://discord.gg/gatitos2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-3 rounded-lg text-white font-medium bg-primary-600 border border-primary-500 shadow-md"
              >
                <FaDiscord className="mr-2 text-xl" />
                <span>Discord</span>
              </a>
              <a
                href="https://www.patreon.com/gatitos2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-3 rounded-lg text-white font-medium bg-secondary-600 border border-secondary-500 shadow-md"
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
