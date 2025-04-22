'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaServer, FaDiscord, FaCalendarAlt, FaUsers, FaScroll, FaComments, FaCube, FaImage, FaDragon, FaGem, FaShieldAlt, FaCrown, FaDesktop, FaPuzzlePiece, FaChess, FaTrophy, FaMapMarkedAlt, FaDownload, FaClock } from 'react-icons/fa'
import { useState, useEffect } from 'react'

// Define una imagen de fallback que se usará cuando no existan las imágenes
const fallbackImageUrl = "/images/logo.png";

// Estilos para las animaciones de luciérnagas
const firefliesStyle = `
  .firefly {
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: float 13s infinite, pulse 4s infinite;
  }
  
  .firefly:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  .firefly:nth-child(2) {
    top: 50%;
    left: 20%;
    animation-delay: 1.5s;
  }
  
  .firefly:nth-child(3) {
    top: 30%;
    left: 80%;
    animation-delay: 3s;
  }
  
  .firefly:nth-child(4) {
    top: 75%;
    left: 65%;
    animation-delay: 4.5s;
  }
  
  .firefly:nth-child(5) {
    top: 15%;
    left: 60%;
    animation-delay: 6s;
  }
  
  .firefly:nth-child(6) {
    top: 65%;
    left: 15%;
    animation-delay: 7.5s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-15px) translateX(10px);
    }
    50% {
      transform: translateY(-25px) translateX(-15px);
    }
    75% {
      transform: translateY(-10px) translateX(15px);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.4;
      box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.2);
    }
    50% {
      opacity: 1;
      box-shadow: 0 0 12px 4px rgba(255, 255, 255, 0.6);
    }
  }
`;

export default function MinecraftPage() {
  const [ipCopied, setIpCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('survival');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIpCopied(true);
    setTimeout(() => setIpCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-dark-950">
      {/* Hero Section with parallax effect */}
      <div className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900"></div>
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {/* Animated background cubes */}
            <div className="relative w-full h-full">
              <div className="absolute top-1/4 left-1/4 animate-float-slow">
                <FaCube className="text-primary-400/20 text-[250px]" />
              </div>
              <div className="absolute bottom-1/3 right-1/4 animate-float">
                <FaCube className="text-primary-600/10 text-[180px]" />
              </div>
              <div className="absolute top-1/2 right-1/3 animate-float-reverse">
                <FaCube className="text-secondary-500/15 text-[120px]" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/70 to-dark-950"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 opacity-30">
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Server logo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 p-1 shadow-xl shadow-primary-900/50">
                  <div className="w-full h-full bg-dark-900 rounded-lg flex items-center justify-center">
                    <FaCube className="text-5xl md:text-7xl text-primary-400" />
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg border-2 border-dark-950">
                  v1.21.4
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
              <span className="text-primary-400">MC.</span>GW2<span className="text-primary-400">.</span>GG
            </h1>
            
            <div className="mb-6">
              <div className="inline-block bg-dark-900/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-800/50 shadow-inner">
                <p className="text-xl md:text-2xl text-gray-300">
                  La mejor experiencia Minecraft <span className="text-primary-400 font-medium">survival</span> y <span className="text-primary-400 font-medium">minijuegos</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">
              <button 
                onClick={() => copyToClipboard('mc.gw2.gg')} 
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-primary-900/30 border border-primary-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 transform group-hover:translate-y-0 translate-y-full"></span>
                <FaServer className="text-2xl relative z-10" />
                <span className="relative z-10 text-lg">{ipCopied ? '¡IP Copiada!' : 'mc.gw2.gg'}</span>
              </button>
              
              <a 
                href="https://discord.gg/gatitos2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative overflow-hidden px-8 py-4 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#5865F2]/20 border border-[#4752c4]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4752c4] to-[#5865F2] transition-all duration-300 transform group-hover:translate-y-0 translate-y-full"></span>
                <FaDiscord className="text-2xl relative z-10" />
                <span className="relative z-10 text-lg">Únete al Discord</span>
              </a>
              
              <a 
                href="#minecraft-modpack" 
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-900/30 border border-green-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 transform group-hover:translate-y-0 translate-y-full"></span>
                <FaServer className="text-2xl relative z-10" />
                <span className="relative z-10 text-lg">SMP Vanilla</span>
              </a>
            </div>
            
            <div className="flex justify-center mt-16">
              <div className="w-12 h-12 rounded-full bg-dark-900/80 backdrop-blur-sm border border-primary-800 flex items-center justify-center animate-bounce">
                <a href="#server-info" className="text-primary-400 hover:text-primary-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky player count banner */}
      <div className="sticky top-20 z-30">
        <div className="bg-gradient-to-r from-primary-900/80 to-dark-900/80 backdrop-blur-md py-3 border-y border-primary-800/50 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Servidor online</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-primary-400" />
                  <span className="text-white font-medium">125 jugadores online</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <FaClock className="text-primary-400" />
                  <span className="text-white font-medium">Próximo evento: 3h 24m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Server Info */}
      <section id="server-info" className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-white relative">
              <span className="relative z-10">Nuestro Servidor</span>
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary-500/20 -z-0 transform -rotate-1"></div>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3">
              Una experiencia Minecraft única con múltiples modalidades de juego, economía balanceada y constantes actualizaciones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-800 rounded-2xl border border-primary-800 overflow-hidden shadow-xl shadow-primary-900/5 group hover:shadow-primary-900/20 transition-all hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-900/50 flex items-center justify-center group-hover:bg-primary-800/50 transition-colors">
                    <FaServer className="text-2xl text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Información Técnica</h3>
                    <p className="text-sm text-gray-400">Características de nuestro servidor</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Versión</span>
                    <span className="font-medium text-primary-400">1.21.4 (Premium)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">IP del servidor</span>
                    <button 
                      onClick={() => copyToClipboard('mc.gw2.gg')}
                      className="font-mono bg-dark-700 px-3 py-1 rounded text-primary-400 hover:bg-dark-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      mc.gw2.gg
                    </button>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Hardware</span>
                    <span className="font-medium">Dedicado 32GB RAM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Antilag</span>
                    <span className="font-medium">Sistema optimizado</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Dificultad</span>
                    <span className="font-medium">Normal</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Uptime</span>
                    <span className="font-medium">99.9%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-800 rounded-2xl border border-primary-800 overflow-hidden shadow-xl shadow-primary-900/5 group hover:shadow-primary-900/20 transition-all hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-primary-600 to-purple-600"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-900/50 flex items-center justify-center group-hover:bg-primary-800/50 transition-colors">
                    <FaPuzzlePiece className="text-2xl text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Modos de Juego</h3>
                    <p className="text-sm text-gray-400">Variedad para todos los gustos</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                      <FaDragon className="text-lg text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Survival avanzado</h4>
                      <p className="text-sm text-gray-400">Mundo abierto con economía y protección de terrenos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                      <FaGem className="text-lg text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">SkyBlock</h4>
                      <p className="text-sm text-gray-400">Crea tu imperio desde una pequeña isla flotante</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                      <FaChess className="text-lg text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Minijuegos PvP</h4>
                      <p className="text-sm text-gray-400">Variedad de minijuegos competitivos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkedAlt className="text-lg text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Dimensiones especiales</h4>
                      <p className="text-sm text-gray-400">Mundo de recursos que se reinicia periódicamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-800 rounded-2xl border border-primary-800 overflow-hidden shadow-xl shadow-primary-900/5 group hover:shadow-primary-900/20 transition-all hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-purple-600 to-secondary-500"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-900/50 flex items-center justify-center group-hover:bg-primary-800/50 transition-colors">
                    <FaCrown className="text-2xl text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Beneficios Premium</h3>
                    <p className="text-sm text-gray-400">Apoya nuestro servidor</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-lg text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Protección avanzada</h4>
                      <p className="text-sm text-gray-400">Más terrenos disponibles para proteger</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                      <FaTrophy className="text-lg text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Rangos especiales</h4>
                      <p className="text-sm text-gray-400">Títulos personalizados y cosméticos exclusivos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                      <FaDesktop className="text-lg text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Comandos exclusivos</h4>
                      <p className="text-sm text-gray-400">Funcionalidades extra para mejorar tu experiencia</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-dark-700">
                  <a 
                    href="/patreon" 
                    className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-medium rounded-lg transition-all"
                  >
                    Ver todos los beneficios <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Changelogs - Enhanced Version */}
      <section className="py-16" id="changelogs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-white relative">
              <span className="relative z-10">Actualizaciones</span>
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary-500/20 -z-0 transform -rotate-1"></div>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3">
              Mantente al día con todas las novedades y mejoras de nuestro servidor
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-gradient-to-b from-primary-600 via-primary-800 to-dark-800 transform md:-translate-x-0.5"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Update 1 */}
                <div className="relative md:flex items-start">
                  {/* Date for mobile */}
                  <div className="mb-4 md:hidden">
                    <div className="bg-primary-900 text-primary-400 px-3 py-1 rounded-full inline-block font-medium text-sm">
                      20 de Abril, 2025
                    </div>
                  </div>
                  
                  {/* Left side (date) for desktop */}
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <div className="bg-primary-900 text-primary-400 px-3 py-1 rounded-full inline-block font-medium">
                      20 de Abril, 2025
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-2">v1.2.0</h3>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-dark-800 border-4 border-primary-600 rounded-full transform md:-translate-x-1/2 flex items-center justify-center shadow-lg shadow-primary-900/20">
                    <FaScroll className="text-primary-400" />
                  </div>
                  
                  {/* Right side (content) */}
                  <div className="pl-16 md:pl-8 md:w-1/2">
                    {/* Title only for mobile */}
                    <h3 className="text-2xl font-bold text-white mt-2 md:hidden">v1.2.0</h3>
                    
                    <div className="bg-dark-800 rounded-xl p-5 border border-primary-800 shadow-lg shadow-primary-900/5 hover:shadow-primary-900/10 transition-all">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Añadido nuevo mundo de recursos que se reinicia cada 30 días con biomas especiales y mejoras en la generación</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Implementado sistema de misiones diarias con recompensas progresivas y desafíos especiales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Nuevo minijuego: Survival Games con mapas temáticos y sistema de ítems especiales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 font-bold">*</span> 
                          <span>Mejorado el rendimiento del servidor con optimizaciones en el spawn y áreas comunes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 font-bold">*</span> 
                          <span>Balanceados los precios de la economía y mejorado el sistema de comercio entre jugadores</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1 font-bold">-</span> 
                          <span>Eliminado bug que permitía duplicar items en cofres compartidos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Update 2 */}
                <div className="relative md:flex items-start">
                  {/* Date for mobile */}
                  <div className="mb-4 md:hidden">
                    <div className="bg-primary-900 text-primary-400 px-3 py-1 rounded-full inline-block font-medium text-sm">
                      5 de Abril, 2025
                    </div>
                  </div>
                  
                  {/* Left side (date) for desktop */}
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <div className="bg-primary-900 text-primary-400 px-3 py-1 rounded-full inline-block font-medium">
                      5 de Abril, 2025
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-2">v1.1.5</h3>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-dark-800 border-4 border-primary-600 rounded-full transform md:-translate-x-1/2 flex items-center justify-center shadow-lg shadow-primary-900/20">
                    <FaScroll className="text-primary-400" />
                  </div>
                  
                  {/* Right side (content) */}
                  <div className="pl-16 md:pl-8 md:w-1/2">
                    {/* Title only for mobile */}
                    <h3 className="text-2xl font-bold text-white mt-2 md:hidden">v1.1.5</h3>
                    
                    <div className="bg-dark-800 rounded-xl p-5 border border-primary-800 shadow-lg shadow-primary-900/5 hover:shadow-primary-900/10 transition-all">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Añadido sistema de matrimonio entre jugadores con ceremonias y beneficios compartidos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Nuevo minijuego: Parkour extremo con 5 niveles de dificultad creciente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Implementado sistema de mascotas exclusivas para patrocinadores</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 font-bold">*</span> 
                          <span>Balanceada la economía - ajustados precios de venta de items raros</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 font-bold">*</span> 
                          <span>Mejorado el sistema de protección de terrenos con más opciones de personalización</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Update 3 */}
                <div className="relative md:flex items-start">
                  {/* Date for mobile */}
                  <div className="mb-4 md:hidden">
                    <div className="bg-primary-900 text-primary-400 px-3 py-1 rounded-full inline-block font-medium text-sm">
                      20 de Marzo, 2025
                    </div>
                  </div>
                  
                  {/* Left side (date) for desktop */}
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <div className="bg-primary-900 text-primary-400 px-3 py-1 rounded-full inline-block font-medium">
                      20 de Marzo, 2025
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-2">v1.1.0</h3>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-dark-800 border-4 border-primary-600 rounded-full transform md:-translate-x-1/2 flex items-center justify-center shadow-lg shadow-primary-900/20">
                    <FaScroll className="text-primary-400" />
                  </div>
                  
                  {/* Right side (content) */}
                  <div className="pl-16 md:pl-8 md:w-1/2">
                    {/* Title only for mobile */}
                    <h3 className="text-2xl font-bold text-white mt-2 md:hidden">v1.1.0</h3>
                    
                    <div className="bg-dark-800 rounded-xl p-5 border border-primary-800 shadow-lg shadow-primary-900/5 hover:shadow-primary-900/10 transition-all">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Lanzamiento oficial del servidor GW2 Minecraft con todos los modos de juego</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Implementados 5 rangos iniciales para jugadores con progresión basada en tiempo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Añadida tienda del servidor con beneficios para supporters sin romper la economía</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 font-bold">+</span> 
                          <span>Sistema de protección de terrenos con GriefPrevention para asegurar tus construcciones</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <a 
                  href="#full-changelog" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-800 hover:bg-dark-700 text-primary-400 font-medium rounded-lg border border-primary-900 transition-colors"
                >
                  Ver historial completo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-16 bg-dark-900 border-y border-primary-900/50 relative overflow-hidden" id="gallery">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary-500/30 rounded-full filter blur-[100px]"></div>
          <div className="absolute top-10 right-10 w-80 h-80 bg-purple-600/20 rounded-full filter blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-white relative">
              <span className="relative z-10">Galería del Servidor</span>
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary-500/20 -z-0 transform -rotate-1"></div>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3">
              Explora algunos de los increíbles lugares y construcciones de nuestro mundo
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl bg-dark-800 border border-primary-900/60 shadow-lg shadow-primary-900/5 hover:shadow-primary-900/20 transition-all hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-700">
                    <FaCube className="text-7xl text-primary-400/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-1">Construcción Destacada #{i+1}</h3>
                  <p className="text-gray-400 text-sm">Creada por: {['MasterBuilder', 'CubeWizard', 'ArchitectMC', 'DesignPro', 'CreativeGenius', 'BlockArtist'][i]}</p>
                </div>
                <div className="absolute inset-0 bg-primary-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-dark-900/80 text-white font-medium px-4 py-2 rounded-lg backdrop-blur-sm border border-primary-500">
                    Ver imagen
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="#full-gallery" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              <FaImage className="text-lg" />
              <span>Ver Galería Completa</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Community & Forum CTA */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-primary-900 to-dark-900 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Únete a nuestra comunidad</h2>
              <p className="text-gray-300 mb-6 md:pr-12">
                Participa en discusiones, comparte tus creaciones, encuentra amigos para jugar y mantente al día con todas las novedades de nuestro servidor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://discord.gg/gatitos2" target="_blank" rel="noopener noreferrer" 
                  className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all">
                  <FaDiscord className="text-xl" />
                  <span>Discord</span>
                </a>
                <Link href="#forum-section" 
                  className="px-6 py-3 bg-white text-primary-900 hover:bg-gray-200 font-bold rounded-lg flex items-center justify-center gap-2 transition-all">
                  <FaComments className="text-xl" />
                  <span>Foro Comunitario</span>
                </Link>
              </div>
            </div>
            <div className="relative h-60 md:h-80 rounded-lg overflow-hidden bg-dark-800 flex items-center justify-center border border-primary-700">
              <FaUsers className="text-primary-400 opacity-20 text-9xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-dark-900/80 px-6 py-4 rounded-lg text-center">
                  <h3 className="text-white font-bold text-xl mb-2">¡Únete a +500 jugadores!</h3>
                  <p className="text-gray-300">Nuestra comunidad crece día a día</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Forum Section */}
      <section id="forum-section" className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Foro Comunitario</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos trabajando en la integración de un foro completo. Mientras tanto, puedes utilizar nuestro Discord para todas las discusiones.
          </p>
          <div className="mt-8">
            <div className="bg-dark-800 max-w-lg mx-auto p-6 rounded-lg border border-primary-800">
              <h3 className="text-xl font-medium text-white mb-4">¿Quieres un foro?</h3>
              <p className="text-gray-300 mb-4">
                Deja tu voto para priorizar la implementación del foro en nuestra plataforma.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded transition-all">
                  ¡Sí, lo quiero!
                </button>
                <button className="px-6 py-2 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded transition-all">
                  No es prioritario
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                También puedes sugerir características para el foro en nuestro Discord.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-800 rounded-xl p-6 border border-primary-800">
            <h3 className="text-xl font-bold text-white mb-4">Alternativas temporales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-dark-700 rounded-lg">
                <h4 className="text-lg font-medium text-primary-400 mb-2">Discord Foro</h4>
                <p className="text-gray-300 mb-3">
                  Utilizamos los canales de foro en Discord para organizar discusiones por temas.
                </p>
                <a href="https://discord.gg/gatitos2" target="_blank" rel="noopener noreferrer" 
                  className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-1">
                  Acceder <span aria-hidden="true">→</span>
                </a>
              </div>
              
              <div className="p-4 bg-dark-700 rounded-lg">
                <h4 className="text-lg font-medium text-primary-400 mb-2">Página de Sugerencias</h4>
                <p className="text-gray-300 mb-3">
                  Puedes enviar tus ideas y sugerencias para mejorar el servidor.
                </p>
                <Link href="/minecraft/sugerencias" 
                  className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-1">
                  Acceder <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary-900/30 rounded-lg border border-primary-700">
              <h4 className="text-lg font-medium text-white mb-2">Integración con plataformas externas</h4>
              <p className="text-gray-300">
                Estamos evaluando la integración con soluciones como XenForo, Discourse o MyBB 
                mediante una implementación de iframe o subdominios. ¡Pronto más novedades!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-white relative">
            <span className="relative z-10">Preguntas Frecuentes</span>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary-500/20 -z-0 transform -rotate-1"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3">
            Todo lo que necesitas saber para empezar en nuestro servidor
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-dark-800 rounded-xl overflow-hidden border border-primary-800 shadow-xl">
          <div className="divide-y divide-dark-700">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿Cómo me uno al servidor?</h3>
              <p className="text-gray-300">
                Simplemente usa la IP <span className="font-mono bg-dark-700 px-2 py-1 rounded text-primary-400">mc.gw2.gg</span> en Minecraft Java Edition. 
                Asegúrate de tener la versión 1.21.4 para disfrutar de todas las características del servidor.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿El servidor es premium?</h3>
              <p className="text-gray-300">
                Sí, nuestro servidor requiere cuentas originales de Minecraft. Esto nos permite ofrecer una experiencia más 
                segura y mantener la calidad de nuestra comunidad.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿Qué mods o plugins tiene el servidor?</h3>
              <p className="text-gray-300">
                Utilizamos una selección cuidadosa de plugins para mejorar la experiencia sin alterar demasiado el juego base. 
                Entre ellos están EssentialsX, WorldGuard, GriefPrevention y algunos plugins personalizados exclusivos.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿Cómo puedo proteger mis construcciones?</h3>
              <p className="text-gray-300">
                Usamos el sistema GriefPrevention. Al colocar un cofre, automáticamente se crea una reclamación. 
                Para expandirla, usa un palo de oro y sigue las instrucciones en el chat.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿Puedo apoyar económicamente al servidor?</h3>
              <p className="text-gray-300">
                ¡Por supuesto! Tenemos varias opciones para apoyar el proyecto. Puedes conseguir beneficios a través de 
                nuestro Patreon o la tienda del servidor sin afectar el balance del juego.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vanilla SMP */}
      <section id="minecraft-modpack" className="py-16 bg-dark-900 border-y border-primary-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/20 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-600/20 rounded-full filter blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-white relative">
              <span className="relative z-10">Servidor SMP Vanilla</span>
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-green-500/20 -z-0 transform -rotate-1"></div>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3">
              Una experiencia Minecraft pura y sin modificaciones
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-dark-800 rounded-xl p-6 border border-green-800 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-green-900/50 flex items-center justify-center">
                      <FaCube className="text-2xl text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">SMP Vanilla</h3>
                      <p className="text-sm text-gray-400">Versión 1.21.4 - Actualizado recientemente</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-300">
                      Nuestro servidor es completamente Survival Multiplayer (SMP) vanilla. No necesitas descargar ningún mod o paquete adicional,
                      sólo usa tu cliente original de Minecraft y disfruta de la experiencia auténtica.
                    </p>
                    
                    <div className="bg-dark-700 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Características del servidor:</h4>
                      <ul className="space-y-1 text-gray-300">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">•</span> Experiencia Vanilla sin modificaciones
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">•</span> Economía y protección de terrenos
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">•</span> Comunidad activa y amistosa
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">•</span> Mundo abierto sin restricciones
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">•</span> Eventos regulares y recompensas
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => copyToClipboard('mc.gw2.gg')} 
                    className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaServer className="text-lg" />
                    <span>{ipCopied ? '¡IP Copiada!' : 'Copiar IP del servidor'}</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-dark-800 rounded-xl p-6 border border-primary-800 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Guía para principiantes</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Instala Minecraft</h4>
                      <p className="text-sm text-gray-300">Asegúrate de tener Minecraft Java Edition versión 1.21.4 instalado.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Inicia el juego</h4>
                      <p className="text-sm text-gray-300">Abre Minecraft y selecciona "Multijugador" en el menú principal.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Añade nuestro servidor</h4>
                      <p className="text-sm text-gray-300">Haz clic en "Añadir servidor" e introduce nuestra IP: <span className="font-mono bg-dark-700 px-2 py-1 rounded text-primary-400">mc.gw2.gg</span>.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-400 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">¡Comienza a jugar!</h4>
                      <p className="text-sm text-gray-300">Selecciona nuestro servidor en la lista y haz clic en "Unirse al servidor".</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-dark-700">
                  <div className="flex items-center gap-4 text-gray-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
                    </svg>
                    <p className="text-sm">
                      Si tienes problemas para conectarte, visita nuestro <a href="https://discord.gg/gatitos2" className="text-primary-400 hover:text-primary-300">Discord</a> para obtener ayuda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center py-12 md:py-16 px-6 bg-gradient-to-r from-primary-900 to-primary-800 rounded-xl shadow-2xl relative overflow-hidden">
          {/* Background particles */}
          <div className="absolute inset-0 opacity-30">
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para comenzar tu aventura?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Únete a cientos de jugadores en el servidor Minecraft de GW2 y forma parte de nuestra creciente comunidad
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => copyToClipboard('mc.gw2.gg')} 
                className="px-8 py-4 bg-white hover:bg-gray-200 text-primary-900 font-bold rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <FaServer className="text-xl" />
                <span>{ipCopied ? '¡IP Copiada!' : 'Copiar IP del servidor'}</span>
              </button>
              
              <a href="https://discord.gg/gatitos2" target="_blank" rel="noopener noreferrer" 
                className="px-8 py-4 bg-dark-900 hover:bg-dark-800 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <FaDiscord className="text-xl" />
                <span>Únete a la comunidad</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Style component for animations */}
      <style jsx global>
        {firefliesStyle}
      </style>
    </main>
  )
} 
