"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaServer, FaDiscord, FaShieldAlt, FaChevronDown, 
  FaGamepad, FaGem, FaCube, FaTrophy, FaUsers, 
  FaCode, FaCalendarAlt, FaCrown, FaMapMarkedAlt
} from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Definimos constantes para información del servidor
const SERVER_IP = "play.gatewaymc.net";
const SERVER_VERSION = "1.21.4";

export default function MinecraftPage() {
  const [isCopied, setIsCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 text-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Modernizado y optimizado */}
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-40 pb-0 md:pt-36 md:pb-0 lg:h-screen lg:justify-between">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900"></div>
          
          {/* Imagen de fondo */}
          <Image 
            src="/images/minecraft-bg.jpg" 
            alt="Minecraft Background"
            fill
            priority
            className="object-cover object-center opacity-30"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-60 bg-gradient-to-b from-primary-950/60 via-dark-950/50 to-dark-950/90"></div>
          
          {/* Particle effect overlay */}
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>

          {/* Decorative orbs */}
          <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-primary-900/20 blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-secondary-900/20 blur-[120px]"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto text-center flex flex-col justify-start max-w-screen-xl flex-1">
          {/* Text Content */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 bg-gradient-to-r from-primary-900/60 to-secondary-900/60 backdrop-blur-md rounded-full border border-primary-500/20">
                <span className="text-primary-400 text-sm font-medium">✨ SERVIDOR MINECRAFT</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-primary-200 uppercase tracking-tight mb-4">
              GATITOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">CRAFT</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-medium">Minecraft SMP</span> con plugins y economía
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Únete a nuestra comunidad Minecraft con economía, protección de terrenos, y mucho más. 
              Compatible con cuentas premium y no premium.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button 
                onClick={copyToClipboard} 
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary-900/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <FaServer className="text-xl relative z-10" />
                <span className="relative z-10">{isCopied ? '¡IP Copiada!' : SERVER_IP}</span>
              </button>
              
              <a 
                href="https://discord.gg/gatitos2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#5865F2] to-[#4752c4] hover:from-[#4752c4] hover:to-[#3c46a3] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-900/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <FaDiscord className="text-xl relative z-10" />
                <span className="relative z-10">Únete a Discord</span>
              </a>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 px-4 py-1.5 rounded-full text-sm font-bold mx-2 text-amber-950 shadow-md shadow-amber-500/10">Premium</div>
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 px-4 py-1.5 rounded-full text-sm font-bold mx-2 text-white shadow-md shadow-slate-500/10">No-Premium</div>
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 px-4 py-1.5 rounded-full text-sm font-bold mx-2 text-emerald-100 shadow-md shadow-emerald-500/10">{SERVER_VERSION}</div>
            </div>
          </div>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 bg-dark-800/50 backdrop-blur-sm rounded-full border border-primary-500/30 shadow-lg">
          <FaChevronDown className="text-xl text-primary-400" />
        </div>
      </section>

      {/* Resto de secciones - no cambiamos el contenido */}
      <section className="py-20 relative">
        {/* Server Info - With enhanced design */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 bg-gradient-to-r from-primary-900/60 to-secondary-900/60 backdrop-blur-md rounded-full border border-primary-500/20">
                <span className="text-primary-400 text-sm font-medium">⚙️ CARACTERÍSTICAS</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-primary-200">
              INFORMACIÓN DEL SERVIDOR
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Todo lo que necesitas saber sobre nuestro servidor Minecraft
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-primary-900/40 shadow-xl shadow-primary-900/5 hover:shadow-primary-900/10 transition-all hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-gradient-to-br from-primary-600/20 to-primary-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-600/30 group-hover:to-primary-900/30 transition-all">
                <FaMapMarkedAlt className="text-3xl text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-100">Protección de Terrenos</h3>
              <p className="text-gray-400">
                Protege tus construcciones con el sistema de claims. Reclama territorio fácilmente con la pala dorada.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-primary-900/40 shadow-xl shadow-primary-900/5 hover:shadow-primary-900/10 transition-all hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-gradient-to-br from-primary-600/20 to-primary-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-600/30 group-hover:to-primary-900/30 transition-all">
                <FaCube className="text-3xl text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-100">Economía & Tiendas</h3>
              <p className="text-gray-400">
                Sistema económico con tiendas de jugadores. Compra, vende y comercia con otros jugadores.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-primary-900/40 shadow-xl shadow-primary-900/5 hover:shadow-primary-900/10 transition-all hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-gradient-to-br from-primary-600/20 to-primary-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-600/30 group-hover:to-primary-900/30 transition-all">
                <FaUsers className="text-3xl text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-100">Comunidad Activa</h3>
              <p className="text-gray-400">
                Juega con una comunidad amigable y activa. Eventos regulares y proyectos comunitarios.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-primary-900/40 shadow-xl shadow-primary-900/5 hover:shadow-primary-900/10 transition-all hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-gradient-to-br from-primary-600/20 to-primary-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-600/30 group-hover:to-primary-900/30 transition-all">
                <FaCalendarAlt className="text-3xl text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-100">Eventos Regulares</h3>
              <p className="text-gray-400">
                Participa en eventos semanales con premios y diversión garantizada para todos los jugadores.
              </p>
            </div>
            
            {/* Card 5 */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-primary-900/40 shadow-xl shadow-primary-900/5 hover:shadow-primary-900/10 transition-all hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-gradient-to-br from-primary-600/20 to-primary-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-600/30 group-hover:to-primary-900/30 transition-all">
                <FaCode className="text-3xl text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-100">Plugins Exclusivos</h3>
              <p className="text-gray-400">
                Disfrutarás de plugins customizados para mejorar tu experiencia de juego sin afectar la esencia vanilla.
              </p>
            </div>
            
            {/* Card 6 */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-primary-900/40 shadow-xl shadow-primary-900/5 hover:shadow-primary-900/10 transition-all hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="500">
              <div className="bg-gradient-to-br from-primary-600/20 to-primary-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-600/30 group-hover:to-primary-900/30 transition-all">
                <FaTrophy className="text-3xl text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-100">Rangos & Recompensas</h3>
              <p className="text-gray-400">
                Sistema de rangos por tiempo de juego con recompensas especiales y acceso a zonas exclusivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería del Servidor - Nueva sección */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-850 to-dark-900"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 bg-gradient-to-r from-primary-900/60 to-secondary-900/60 backdrop-blur-md rounded-full border border-primary-500/20">
                <span className="text-primary-400 text-sm font-medium">📸 IMÁGENES</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-primary-200">
              GALERÍA DEL SERVIDOR
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Echa un vistazo a nuestro mundo y las creaciones de nuestra comunidad
            </p>
          </div>
          
          {/* Grid de imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Imagen 1 */}
            <div className="rounded-2xl overflow-hidden aspect-video relative group transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-dark-900/80" data-aos="fade-up" data-aos-delay="0">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
              <Image 
                src="/images/minecraft/gallery-1.jpg" 
                alt="Spawn del servidor" 
                width={600} 
                height={338}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
              <div className="absolute bottom-0 left-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-bold text-xl">Spawn Principal</h3>
              </div>
            </div>
            
            {/* Imagen 2 */}
            <div className="rounded-2xl overflow-hidden aspect-video relative group transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-dark-900/80" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
              <Image 
                src="/images/minecraft/gallery-2.jpg" 
                alt="Ciudad de jugadores" 
                width={600} 
                height={338}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
              <div className="absolute bottom-0 left-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-bold text-xl">Ciudad de Jugadores</h3>
              </div>
            </div>
            
            {/* Imagen 3 */}
            <div className="rounded-2xl overflow-hidden aspect-video relative group transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-dark-900/80" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
              <Image 
                src="/images/minecraft/gallery-3.jpg" 
                alt="Eventos especiales" 
                width={600} 
                height={338}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
              <div className="absolute bottom-0 left-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-bold text-xl">Eventos Especiales</h3>
              </div>
            </div>
          </div>
          
          {/* CTA para más imágenes */}
          <div className="text-center" data-aos="fade-up">
            <a 
              href="https://discord.gg/gatitos2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600/30 to-primary-700/30 hover:from-primary-600/40 hover:to-primary-700/40 text-primary-300 font-medium rounded-xl transition-all"
            >
              Ver más imágenes en Discord <FaChevronDown className="text-sm" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Changelogs - Nueva sección */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-850 to-dark-900"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 bg-gradient-to-r from-primary-900/60 to-secondary-900/60 backdrop-blur-md rounded-full border border-primary-500/20">
                <span className="text-primary-400 text-sm font-medium">📝 ACTUALIZACIONES</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-primary-200">
              CHANGELOG
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mantente al día con las novedades y cambios en nuestro servidor
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline de cambios */}
            <div className="relative border-l-2 border-primary-800/50 pl-10 ml-6 space-y-12">
              {/* Punto destacado - Próxima apertura */}
              <div className="relative" data-aos="fade-up">
                <div className="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 border-4 border-dark-950 flex items-center justify-center pulse-animation">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-6 border border-primary-600/30 shadow-xl shadow-primary-900/5">
                  <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-amber-900 font-bold text-sm px-3 py-1 rounded-full inline-block mb-3">¡PRÓXIMAMENTE!</div>
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    Gran Apertura - 28 de Abril 2024
                  </h3>
                  <p className="text-gray-400 mb-4">
                    ¡Estamos preparando todo para el lanzamiento oficial del servidor! Únete a nosotros en esta nueva aventura con muchas sorpresas.
                  </p>
                  <ul className="space-y-1 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Mundo completamente nuevo con biomas espectaculares</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Sistema económico mejorado con tiendas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Plugins exclusivos para mejorar la experiencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Evento de inauguración con premios especiales</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Update 1 - Preparación */}
              <div className="relative" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-800 to-primary-900 border-4 border-dark-950 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                </div>
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-6 border border-primary-900/40 shadow-xl shadow-primary-900/5">
                  <div className="text-gray-500 text-sm mb-3">15 de Abril, 2024</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-200">
                    Fase de Preparación
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Hemos comenzado a configurar los sistemas básicos del servidor y realizar pruebas de rendimiento.
                  </p>
                  <ul className="space-y-1 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Instalación de los plugins esenciales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Configuración del spawn principal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Pruebas de optimización para minimizar lag</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Update 2 - Planificación */}
              <div className="relative" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-800 to-primary-900 border-4 border-dark-950 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                </div>
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-6 border border-primary-900/40 shadow-xl shadow-primary-900/5">
                  <div className="text-gray-500 text-sm mb-3">1 de Abril, 2024</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-200">
                    Planificación Inicial
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Inicio del proyecto GatitosCraft con la selección de características y planificación.
                  </p>
                  <ul className="space-y-1 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Selección de plugins y características principales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Definición de reglas y sistema de moderación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Creación de canales de Discord para la comunidad</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action - Modern Design */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/80 to-dark-900"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-dark-800 to-dark-900 p-8 md:p-12 rounded-3xl border border-primary-500/20 shadow-2xl shadow-primary-900/10" data-aos="fade-up">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-8 md:mb-0 md:mr-8">
                <div className="inline-block mb-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-primary-900/60 to-secondary-900/60 backdrop-blur-md rounded-full border border-primary-500/20">
                    <span className="text-primary-400 text-sm font-medium">🚀 ÚNETE AHORA</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-primary-200">
                  ¿Listo para unirte a la aventura?
                </h2>
                <p className="text-xl text-gray-400 mb-4">
                  Ven a explorar, construir y hacer amigos en nuestro servidor Minecraft.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaGamepad className="text-primary-400" /> Supervivencia
                  </div>
                  <div className="flex items-center gap-1">
                    <FaShieldAlt className="text-primary-400" /> Anti-grief
                  </div>
                  <div className="flex items-center gap-1">
                    <FaGem className="text-primary-400" /> Economía
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCrown className="text-primary-400" /> Rangos
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <div className="flex flex-col gap-4">
                  <div 
                    className="relative px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary-900/20 overflow-hidden group"
                    onClick={copyToClipboard}
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <FaServer className="text-xl" />
                    <span className="whitespace-nowrap">{isCopied ? '¡IP Copiada!' : SERVER_IP}</span>
                  </div>
                  
                  <a 
                    href="https://discord.gg/gatitos2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-[#5865F2] to-[#4752c4] hover:from-[#4752c4] hover:to-[#3c46a3] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-900/20 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <FaDiscord className="text-xl" />
                    <span>Únete a Discord</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Añadimos estilos globales para animaciones */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
      `}</style>
      
      <Footer />
    </div>
  );
}
