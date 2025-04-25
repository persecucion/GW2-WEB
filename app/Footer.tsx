// components/Footer.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaHeart, FaArrowUp, FaEnvelope, FaGlobe, FaCode } from 'react-icons/fa'
import { SiPatreon } from 'react-icons/si'

// Estilo para la animación de la línea en movimiento alrededor del óvalo
const movingBorderAnimation = `
  @keyframes borderRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .oval-border {
    position: relative;
    z-index: 0;
  }
  
  .oval-border::before {
    content: '';
    position: absolute;
    top: -3px;
    bottom: -3px;
    left: -3px;
    right: -3px;
    border-radius: 30px;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(59, 130, 246, 0.8),
      transparent,
      transparent
    );
    animation: borderRotate 4s linear infinite;
    z-index: -1;
  }
  
  .oval-border::after {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    border-radius: 30px;
    background: rgba(0, 4, 40, 0.9);
    z-index: -1;
  }
  
  .top-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 4, 40, 0.7);
  }
  
  .moving-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    overflow: hidden;
    z-index: 60;
  }
  
  .moving-line::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(59, 130, 246, 0.7) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: moveGradient 3s linear infinite;
  }
  
  .footer-divider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, rgba(23, 37, 84, 0.8), rgba(59, 130, 246, 0.8), rgba(23, 37, 84, 0.8));
    z-index: 50;
  }
  
  @keyframes moveGradient {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(50%);
    }
  }
`

const currentYear = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative z-50">
      {/* Divisor del footer - línea distintiva en la parte superior */}
      <div className="footer-divider"></div>
      
      {/* Línea de fondo estática */}
      <div className="top-line"></div>
      
      {/* Línea animada que se mueve */}
      <div className="moving-line"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-black w-full h-full"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/10 via-dark-950 to-primary-950/10 opacity-80"></div>
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        {/* Top footer content with logo and sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
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
              <span className="text-2xl font-bold text-white">GW2</span>
            </div>
            <p className="text-gray-300 mb-6 bg-dark-900/80 p-3 rounded-lg border border-primary-900/20 shadow-inner backdrop-blur-sm">
              Comunidad gaming enfocada en crear experiencias únicas y memorables para todos nuestros miembros.
            </p>
            <div className="flex space-x-4 bg-dark-900/80 p-3 rounded-lg border border-primary-900/20 shadow-md backdrop-blur-sm">
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
          
          {/* Links section - Adding Minecraft category */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-primary-700/50 pb-2 bg-gradient-to-r from-primary-400 to-transparent bg-clip-text text-transparent">Enlaces</h3>
            <nav className="flex flex-col space-y-3 bg-dark-900/80 p-4 rounded-lg border border-primary-900/20 shadow-md backdrop-blur-sm">
              <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                Inicio
              </Link>
              <Link href="/eventos" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                Eventos
              </Link>
              <Link href="/minecraft" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                Minecraft
              </Link>
              <Link href="/legal/privacy" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                Privacidad
              </Link>
              <Link href="/legal/terms" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                Términos
              </Link>
            </nav>
          </div>
          
          {/* Legal section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-secondary-700/50 pb-2 bg-gradient-to-r from-secondary-400 to-transparent bg-clip-text text-transparent">Legal</h3>
            <ul className="space-y-3 bg-dark-900/80 p-4 rounded-lg border border-primary-900/20 shadow-md backdrop-blur-sm">
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
          
          {/* Contact section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-purple-700/50 pb-2 bg-gradient-to-r from-purple-400 to-transparent bg-clip-text text-transparent">Contacto</h3>
            <ul className="space-y-3 bg-dark-900/80 p-4 rounded-lg border border-primary-900/20 shadow-md backdrop-blur-sm">
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
        
        {/* Bottom footer content */}
        <div className="pt-8 border-t border-primary-900/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 bg-dark-900/50 py-1.5 px-4 rounded-full backdrop-blur-sm">
            &copy; {new Date().getFullYear()} GW2.XYZ. Todos los derechos reservados.
          </div>
          <div className="text-sm text-gray-400 whitespace-nowrap bg-dark-900/50 py-1.5 px-4 rounded-full backdrop-blur-sm oval-border">
            Hecho con <span className="text-red-500 mx-1 inline-block"><FaHeart /></span> por <a href="https://twitter.com/juansrd" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 font-medium inline-block">Junsred</a>
          </div>
        </div>
      </div>
      
      <style jsx global>{movingBorderAnimation}</style>
    </footer>
  )
}
