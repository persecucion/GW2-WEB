// components/Footer.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaHeart, FaArrowUp, FaEnvelope, FaGlobe, FaCode } from 'react-icons/fa'
import { SiPatreon } from 'react-icons/si'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative">
      {/* Gradiente de fondo y efectos visuales */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/30 rounded-full mix-blend-multiply filter blur-[110px]"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-secondary-600/30 rounded-full mix-blend-multiply filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-[90px]"></div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Borde superior con gradiente */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      {/* Contenido del Footer */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-primary-400/50 shadow-lg shadow-primary-900/30">
                <Image
                  src="/images/logo.png"
                  alt="GW2 Logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <span className="text-2xl font-bold text-gradient-animate">GW2</span>
            </div>
            <p className="text-gray-300 mb-6 backdrop-blur-sm bg-dark-800/30 p-3 rounded-lg border border-white/5 shadow-inner">
              Comunidad gaming enfocada en crear experiencias únicas y memorables para todos nuestros miembros.
            </p>
            <div className="flex space-x-4 bg-dark-800/50 p-3 rounded-lg border border-white/5 shadow-md">
              <a 
                href="https://discord.gg/gatitos2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors transform hover:scale-110"
                aria-label="Discord"
              >
                <FaDiscord size={22} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={22} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube size={22} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors transform hover:scale-110"
                aria-label="Twitch"
              >
                <FaTwitch size={22} />
              </a>
              <a 
                href="/patreon" 
                className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110"
                aria-label="Patreon"
              >
                <SiPatreon size={22} />
              </a>
            </div>
          </div>
          
          {/* Enlaces */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-primary-700/50 pb-2 bg-gradient-to-r from-primary-400 to-transparent bg-clip-text text-transparent">Enlaces</h3>
            <ul className="space-y-3 bg-dark-800/30 backdrop-blur-sm p-4 rounded-lg border border-white/5 shadow-md">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/patreon" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  Patreon
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  Comunidad
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-secondary-700/50 pb-2 bg-gradient-to-r from-secondary-400 to-transparent bg-clip-text text-transparent">Legal</h3>
            <ul className="space-y-3 bg-dark-800/30 backdrop-blur-sm p-4 rounded-lg border border-white/5 shadow-md">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-secondary-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-secondary-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-secondary-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-purple-700/50 pb-2 bg-gradient-to-r from-purple-400 to-transparent bg-clip-text text-transparent">Contacto</h3>
            <ul className="space-y-3 bg-dark-800/30 backdrop-blur-sm p-4 rounded-lg border border-white/5 shadow-md">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center">
                    <FaEnvelope className="text-purple-400 text-xs" />
                  </div>
                  Formulario de Contacto
                </Link>
              </li>
              <li>
                <a 
                  href="https://discord.gg/gatitos2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center">
                    <FaDiscord className="text-purple-400 text-xs" />
                  </div>
                  Discord
                </a>
              </li>
              <li>
                <a href="mailto:contacto@gw2.com" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center">
                    <FaEnvelope className="text-purple-400 text-xs" />
                  </div>
                  contacto@gw2.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright y Créditos */}
        <div className="pt-6 mt-6 border-t border-gray-800 flex flex-col-reverse sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-center sm:text-left mt-4 sm:mt-0 bg-dark-800/30 py-1 px-3 rounded-lg border border-white/5">
            &copy; {currentYear} GW2. Todos los derechos reservados.
          </p>
          <div className="flex items-center bg-dark-800/30 py-2 px-4 rounded-lg border border-white/5 shadow-md">
            <span className="text-gray-400 flex items-center">
              Hecho con <FaHeart className="mx-1 text-red-500 animate-pulse" /> por{' '}
              <a href="https://github.com/Junsred" className="text-primary-400 ml-1 hover:underline hover:text-primary-300">
                Junsred
              </a>
            </span>
            <button 
              onClick={scrollToTop} 
              className="ml-6 p-2 rounded-full bg-primary-900/30 text-primary-400 hover:bg-primary-800/40 hover:text-primary-300 transition-colors transform hover:scale-110 shadow-md"
              aria-label="Volver arriba"
            >
              <FaArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
