'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaServer, FaDiscord, FaCalendarAlt, FaUsers, FaScroll, FaComments, FaCube, FaImage, FaDragon, FaGem, FaShieldAlt, FaCrown, FaDesktop, FaPuzzlePiece, FaChess, FaTrophy, FaMapMarkedAlt, FaDownload, FaClock } from 'react-icons/fa'
import { useState, useEffect } from 'react'

// Define una imagen de fallback que se usará cuando no existan las imágenes
const fallbackImageUrl = "/images/logo.png";

// Estilos para las animaciones de luciérnagas y efectos luminosos
const firefliesStyle = `
  .firefly {
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    filter: blur(1px);
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8), 0 0 20px 6px rgba(255, 255, 255, 0.4);
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
    width: 4px;
    height: 4px;
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
    width: 2px;
    height: 2px;
  }
  
  .firefly:nth-child(6) {
    top: 65%;
    left: 15%;
    animation-delay: 7.5s;
  }

  .firefly:nth-child(7) {
    top: 40%;
    left: 35%;
    animation-delay: 2.5s;
    width: 4px;
    height: 4px;
  }
  
  .firefly:nth-child(8) {
    top: 85%;
    left: 75%;
    animation-delay: 5.5s;
  }
  
  .firefly:nth-child(9) {
    top: 25%;
    left: 90%;
    animation-delay: 8.5s;
    width: 2px;
    height: 2px;
  }

  .firefly:nth-child(10) {
    top: 55%;
    left: 45%;
    animation-delay: 6.2s;
  }

  .firefly:nth-child(11) {
    top: 70%;
    left: 25%;
    animation-delay: 3.7s;
    width: 2px;
    height: 2px;
  }

  .firefly:nth-child(12) {
    top: 10%;
    left: 50%;
    animation-delay: 9.5s;
  }
  
  .glow-effect {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.15;
    background: radial-gradient(circle, rgba(var(--glow-color-rgb), 0.8) 0%, rgba(var(--glow-color-rgb), 0.1) 70%, rgba(var(--glow-color-rgb), 0) 100%);
    animation: pulse-glow 8s infinite ease-in-out;
  }

  .hero-glow-1 {
    --glow-color-rgb: 59, 130, 246;
    width: 40vw;
    height: 40vw;
    left: -10vw;
    top: -10vh;
    animation-delay: 0s;
  }

  .hero-glow-2 {
    --glow-color-rgb: 139, 92, 246;
    width: 50vw;
    height: 50vw;
    right: -15vw;
    bottom: -15vh;
    animation-delay: 3s;
  }

  .hero-glow-3 {
    --glow-color-rgb: 16, 185, 129;
    width: 30vw;
    height: 30vw;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    animation-delay: 6s;
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
      box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.2), 0 0 12px 6px rgba(255, 255, 255, 0.1);
    }
    50% {
      opacity: 1;
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6), 0 0 30px 15px rgba(255, 255, 255, 0.2);
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.1;
      transform: scale(1);
    }
    50% {
      opacity: 0.2;
      transform: scale(1.1);
    }
  }

  .minecraft-glass-panel {
    backdrop-filter: blur(10px);
    background: rgba(17, 24, 39, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  }

  .premium-badge {
    background: linear-gradient(135deg, #ffd700 0%, #ffbb00 100%);
    color: #333;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.4);
  }

  .non-premium-badge {
    background: linear-gradient(135deg, #64748b 0%, #475569 100%);
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 10px rgba(100, 116, 139, 0.4);
  }

  .shimmer-text {
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
    background-size: 200% auto;
    animation: shimmer 3s infinite;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    display: inline-block;
  }

  @keyframes shimmer {
    to {
      background-position: 200% center;
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
          <div className="absolute inset-0 bg-dark-950"></div>
          
          {/* Glow effects */}
          <div className="glow-effect hero-glow-1"></div>
          <div className="glow-effect hero-glow-2"></div>
          <div className="glow-effect hero-glow-3"></div>
          
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
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 p-1 shadow-xl shadow-primary-900/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-300/10 to-primary-100/20"></div>
                  <div className="w-full h-full bg-dark-900 rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <FaCube className="text-5xl md:text-7xl text-primary-400 relative z-10 drop-shadow-glow" />
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg border-2 border-dark-950">
                  v1.21.4
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white drop-shadow-glow">
              <span className="text-primary-400 relative">
                MC<span className="absolute -top-3 -right-2 text-xs text-yellow-300">★</span>
              </span>
              <span>GW2</span>
              <span className="text-primary-400">.</span>
              <span className="shimmer-text">GG</span>
            </h1>
            
            <div className="mb-6">
              <div className="inline-block minecraft-glass-panel px-5 py-3 rounded-full border border-primary-800/50 shadow-inner">
                <p className="text-xl md:text-2xl text-gray-300">
                  La mejor experiencia Minecraft <span className="text-primary-400 font-medium">survival</span> con <span className="text-primary-400 font-medium">plugins</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="premium-badge px-4 py-1 rounded-full text-sm font-bold">
                Premium
              </div>
              <div className="non-premium-badge px-4 py-1 rounded-full text-sm font-bold">
                No-Premium
              </div>
              <div className="px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-green-600 to-green-800 text-white">
                16GB RAM
              </div>
              <div className="px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                Plugins SMP
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
                href="#minecraft-map" 
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-900/30 border border-green-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 transform group-hover:translate-y-0 translate-y-full"></span>
                <FaMapMarkedAlt className="text-2xl relative z-10" />
                <span className="relative z-10 text-lg">Mapa del Servidor</span>
              </a>
            </div>
            
            <div className="flex justify-center mt-16">
              <div className="w-12 h-12 rounded-full minecraft-glass-panel flex items-center justify-center animate-bounce">
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
      
      {/* Server Info */}
      <section id="server-info" className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-white relative">
              <span className="relative z-10">Nuestro Servidor</span>
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary-500/20 -z-0 transform -rotate-1"></div>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3">
              Una experiencia Minecraft única con plugins SMP, economía balanceada y una comunidad activa
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
                    <span className="font-medium text-primary-400">1.21.4</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Tipo de cuenta</span>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded premium-badge">Premium</span>
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded non-premium-badge">No-Premium</span>
                    </div>
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
                    <span className="font-medium">Dedicado 16GB RAM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Tipo de servidor</span>
                    <span className="font-medium">SMP con Plugins</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Antilag</span>
                    <span className="font-medium">Sistema optimizado</span>
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
      
      {/* Changelogs - Simplified Version */}
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
            <div className="bg-dark-800 rounded-2xl overflow-hidden border border-primary-800 shadow-xl">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-primary-900/50 flex items-center justify-center">
                    <FaScroll className="text-2xl text-primary-400" />
                  </div>
                  <div>
                    <div className="bg-primary-900 text-primary-400 px-3 py-1 rounded-full inline-block font-medium">
                      Próximamente - 2024
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-1">Preparación para Lanzamiento Público</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="minecraft-glass-panel p-5 rounded-xl">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary-900/70 flex items-center justify-center mr-3 flex-shrink-0">
                        <FaServer className="text-primary-400" />
                      </span>
                      Estado del Servidor
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Estamos finalizando los preparativos para el lanzamiento público de nuestro servidor Minecraft SMP. 
                      Actualmente nos encontramos en fase beta con acceso limitado para testers mientras completamos la configuración.
                    </p>
                    <div className="bg-dark-900/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse mr-2"></div>
                        <span className="text-yellow-400 font-medium">En desarrollo activo</span>
                      </div>
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-300">Configuración básica del servidor completada</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-300">Plugins SMP instalados y configurados</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-300">Soporte para cuentas Premium y No-Premium</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-2">⟳</span>
                          <span className="text-gray-300">Optimización final del rendimiento</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-2">⟳</span>
                          <span className="text-gray-300">Preparación de zonas spawn y bienvenida</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1 bg-dark-750 p-5 rounded-xl border border-primary-900/50">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <span className="w-7 h-7 rounded-full bg-purple-900/70 flex items-center justify-center mr-2 flex-shrink-0">
                          <FaCalendarAlt className="text-purple-400 text-sm" />
                        </span>
                        Próximas Etapas
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span> 
                          <span>Fase Beta: Acceso limitado para testers (Actual)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span> 
                          <span>Lanzamiento Público: Apertura del servidor a todos los jugadores</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span> 
                          <span>Actualización 1.0: Primeros eventos y recompensas</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex-1 bg-dark-750 p-5 rounded-xl border border-primary-900/50">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <span className="w-7 h-7 rounded-full bg-blue-900/70 flex items-center justify-center mr-2 flex-shrink-0">
                          <FaDiscord className="text-blue-400 text-sm" />
                        </span>
                        Mantente Informado
                      </h4>
                      <p className="text-gray-300 mb-3">
                        Para conocer la fecha exacta de lanzamiento y todas las novedades, únete a nuestro Discord oficial.
                      </p>
                      <a 
                        href="https://discord.gg/gatitos2" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
                      >
                        Unirse al Discord <span className="ml-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>
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
              <h3 className="text-xl font-bold text-white mb-2">¿El servidor acepta cuentas no premium?</h3>
              <p className="text-gray-300">
                ¡Sí! Nuestro servidor acepta tanto cuentas premium (originales) como no premium. 
                Todos los jugadores tienen acceso a las mismas características y funcionalidades del servidor.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿Qué plugins tiene el servidor?</h3>
              <p className="text-gray-300">
                Utilizamos una selección cuidadosa de plugins SMP para mejorar la experiencia de juego sin alterar demasiado la esencia vanilla. 
                Entre ellos están EssentialsX, WorldGuard, GriefPrevention y otros plugins que mejoran la jugabilidad manteniendo el espíritu del juego.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿Cómo puedo proteger mis construcciones?</h3>
              <p className="text-gray-300">
                Usamos el sistema GriefPrevention. Al colocar un cofre, automáticamente se crea una reclamación. 
                Para expandirla, usa un palo de oro y sigue las instrucciones en el chat del juego.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿El servidor tiene mapa web?</h3>
              <p className="text-gray-300">
                Sí, contamos con un mapa interactivo que muestra el mundo del servidor en tiempo real. 
                Puedes acceder a él desde la sección <a href="#minecraft-map" className="text-primary-400 hover:text-primary-300">Mapa del Servidor</a> en nuestra web.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿Cuánta RAM tiene el servidor?</h3>
              <p className="text-gray-300">
                El servidor cuenta con 16GB de RAM dedicada, lo que garantiza un rendimiento óptimo incluso con muchos jugadores conectados simultáneamente.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Servidor SMP con Plugins */}
      <section id="minecraft-map" className="py-16 bg-dark-900 border-y border-primary-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-500/20 rounded-full filter blur-[100px]"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-[100px]"></div>
          
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-2/3 h-1/3 bg-gradient-radial from-primary-500/5 to-transparent"></div>
          
          {/* Particles */}
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-white relative">
              <span className="relative z-10">Servidor SMP con Plugins</span>
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-primary-500/20 via-green-500/20 to-primary-500/20 -z-0 transform -rotate-1"></div>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3">
              Una experiencia Minecraft optimizada con plugins y soporte para cuentas premium y no premium
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="minecraft-glass-panel rounded-xl p-6 border border-primary-800/50 shadow-xl relative overflow-hidden group transition-all duration-300 hover:shadow-primary-900/30 hover:border-primary-700/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900/0 to-secondary-900/20 opacity-80"></div>
                  
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/0 via-primary-400/0 to-primary-300/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-900 to-dark-900 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-600/5 to-primary-400/10"></div>
                        <FaCube className="text-2xl text-primary-400 drop-shadow-glow" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">SMP con Plugins</h3>
                        <p className="text-sm text-gray-400">Versión 1.21.4 - Premium y No-Premium</p>
                      </div>
                    </div>
                    
                    <div className="space-y-5 mb-6">
                      <p className="text-gray-300">
                        Nuestro servidor SMP ofrece una experiencia de juego mejorada con plugins cuidadosamente 
                        seleccionados que mantienen la esencia del juego vanilla mientras añaden funcionalidades útiles.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                        <div className="minecraft-glass-panel p-3 rounded-lg flex items-start gap-2">
                          <div className="w-8 h-8 rounded-lg bg-green-900/70 flex items-center justify-center flex-shrink-0">
                            <FaServer className="text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">Dedicado 16GB</h4>
                            <p className="text-xs text-gray-400">Hardware optimizado</p>
                          </div>
                        </div>
                        
                        <div className="minecraft-glass-panel p-3 rounded-lg flex items-start gap-2">
                          <div className="w-8 h-8 rounded-lg bg-blue-900/70 flex items-center justify-center flex-shrink-0">
                            <FaShieldAlt className="text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">Anti-Grief</h4>
                            <p className="text-xs text-gray-400">Protección de terrenos</p>
                          </div>
                        </div>
                        
                        <div className="minecraft-glass-panel p-3 rounded-lg flex items-start gap-2">
                          <div className="w-8 h-8 rounded-lg bg-purple-900/70 flex items-center justify-center flex-shrink-0">
                            <FaGem className="text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">Economía</h4>
                            <p className="text-xs text-gray-400">Sistema de comercio</p>
                          </div>
                        </div>
                        
                        <div className="minecraft-glass-panel p-3 rounded-lg flex items-start gap-2">
                          <div className="w-8 h-8 rounded-lg bg-red-900/70 flex items-center justify-center flex-shrink-0">
                            <FaMapMarkedAlt className="text-red-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">Mapa Web</h4>
                            <p className="text-xs text-gray-400">Visualiza el mundo</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mt-2">
                        <div className="premium-badge px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
                          <span className="text-xs">★</span>Premium
                        </div>
                        <div className="non-premium-badge px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
                          <span className="text-xs">★</span>No-Premium
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => copyToClipboard('mc.gw2.gg')} 
                      className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-400/0 via-primary-300/10 to-primary-400/0 group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                      <FaServer className="text-lg relative z-10" />
                      <span className="relative z-10">{ipCopied ? '¡IP Copiada!' : 'Copiar IP del servidor'}</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-dark-800 rounded-xl overflow-hidden shadow-xl border border-primary-800/30 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-850 via-dark-900 to-dark-800 opacity-50"></div>
                  
                  <div className="p-0 relative">
                    <div className="aspect-video bg-dark-900/50 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-900/90">
                        <FaCube className="text-8xl text-primary-500/10" />
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Link href="/minecraft/map" className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-primary-900/50">
                          <FaMapMarkedAlt />
                          <span>Ver Mapa Interactivo</span>
                        </Link>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900 to-transparent">
                        <h3 className="text-white font-bold">Mapa del Servidor</h3>
                        <p className="text-sm text-gray-300">Explora el mundo en tiempo real</p>
                      </div>
                    </div>
                    
                    <div className="p-5 relative">
                      <h3 className="text-lg font-bold text-white mb-3">Cómo Conectarse</h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 bg-primary-900/70 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary-400 font-bold text-sm">1</span>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm">Abre Minecraft Java Edition 1.21.4</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 bg-primary-900/70 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary-400 font-bold text-sm">2</span>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm">Haz clic en "Multijugador" y luego en "Añadir servidor"</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 bg-primary-900/70 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary-400 font-bold text-sm">3</span>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm">Introduce la IP: <span className="font-mono bg-dark-700 px-2 py-0.5 rounded text-primary-400">mc.gw2.gg</span></p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 bg-primary-900/70 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary-400 font-bold text-sm">4</span>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm">¡Listo! Conéctate y comienza tu aventura</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <a 
                          href="https://discord.gg/gatitos2" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-1.5"
                        >
                          <FaDiscord />
                          Unirse a nuestra comunidad
                          <span className="text-lg leading-none">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="py-16 px-6 md:px-12 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>
            </div>
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-transparent rounded-full filter blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-500/10 to-transparent rounded-full filter blur-[80px]"></div>
            
            {/* Particles/fireflies */}
            <div className="absolute inset-0">
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
            
            {/* Minecraft-like blocks */}
            <div className="absolute -bottom-16 -left-16 text-primary-700/10 transform rotate-12">
              <FaCube className="w-32 h-32" />
            </div>
            <div className="absolute -top-20 -right-20 text-primary-700/10 transform -rotate-12">
              <FaCube className="w-40 h-40" />
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-glow">
                ¿Listo para comenzar tu aventura?
              </h2>
              
              <div className="flex justify-center gap-2 mb-6">
                <div className="premium-badge px-3 py-1 rounded-full text-sm font-bold">Premium</div>
                <div className="non-premium-badge px-3 py-1 rounded-full text-sm font-bold">No-Premium</div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Únete a nuestra comunidad Minecraft SMP con plugins y forma parte de un mundo en constante crecimiento. 
                Acepta tanto cuentas premium como no premium.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => copyToClipboard('mc.gw2.gg')} 
                  className="px-8 py-4 bg-white hover:bg-gray-200 text-primary-900 font-bold rounded-xl flex items-center justify-center gap-2 transition-all relative overflow-hidden group shadow-xl shadow-primary-950/20"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-300/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <FaServer className="text-xl relative z-10" />
                  <span className="relative z-10">{ipCopied ? '¡IP Copiada!' : 'Copiar IP del servidor'}</span>
                </button>
                
                <a href="https://discord.gg/gatitos2" target="_blank" rel="noopener noreferrer" 
                  className="px-8 py-4 bg-dark-900 hover:bg-dark-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary-950/20 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-600/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <FaDiscord className="text-xl relative z-10" />
                  <span className="relative z-10">Únete a la comunidad</span>
                </a>
                
                <Link href="/minecraft/map"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary-950/20 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-green-400/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <FaMapMarkedAlt className="text-xl relative z-10" />
                  <span className="relative z-10">Ver mapa</span>
                </Link>
              </div>
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
