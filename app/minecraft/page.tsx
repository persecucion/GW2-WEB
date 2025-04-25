'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaServer, FaDiscord, FaMapMarkedAlt, FaCube, FaUsers, FaCalendarAlt, FaCode, FaTrophy, FaHistory, FaGamepad, FaChess, FaScroll, FaComments, FaImage, FaDragon, FaGem, FaShieldAlt, FaCrown, FaDesktop, FaPuzzlePiece, FaDownload, FaClock, FaChevronDown } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';

// Define una imagen de fallback que se usará cuando no existan las imágenes
const fallbackImageUrl = "/images/logo.png";

// Define servidor con puerto 
const serverIP = "mc.gatewaymc.net:25565";

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

// Estilos adicionales para el diseño mejorado
const enhancedStyles = `
  .minecraft-bg-pattern {
    background-image: url('https://www.deviantart.com/ivan2294/download/211539520/minecraft_tile_background-d3j4js0.png');
    background-repeat: repeat;
    background-size: 200px;
    opacity: 0.1;
  }
  
  .hero-bg-image {
    background-image: linear-gradient(to bottom, rgba(10, 10, 18, 0.7), rgba(17, 24, 39, 0.9)), url('https://i.imgur.com/xdXITU5.jpeg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  
  .glassmorphism {
    background: rgba(17, 24, 39, 0.7);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
  
  .shine-effect {
    position: relative;
    overflow: hidden;
  }
  
  .shine-effect:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(30deg);
    animation: shine 6s infinite;
  }
  
  @keyframes shine {
    0% {
      transform: rotate(30deg) translate(-200%, -100%);
    }
    100% {
      transform: rotate(30deg) translate(200%, 100%);
    }
  }
  
  .crystal-button {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .crystal-button:hover {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  .card-hover-effect {
    transition: all 0.3s ease;
  }
  
  .card-hover-effect:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.2);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #60a5fa 0%, #9333ea 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  
  .gradient-border {
    position: relative;
    border-radius: inherit;
  }
  
  .gradient-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #3b82f6, #9333ea, #16a34a, #3b82f6);
    border-radius: inherit;
    z-index: -1;
    animation: gradient-border-animation 6s linear infinite;
  }
  
  @keyframes gradient-border-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default function MinecraftPage() {
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('survival');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <main className="bg-dark-950 text-white min-h-screen">
        <div className="min-h-screen pt-16">
          {/* Hero Section - Enhanced with better gradients */}
          <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Enhanced background with better gradients */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-dark-900/90"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-dark-950/50 to-dark-950/90"></div>
              <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-dark-950 to-transparent"></div>
              
              {/* Enhanced glow effects */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full filter blur-[120px]"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-600/10 rounded-full filter blur-[120px]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary-500/5 rounded-full filter blur-[80px] animate-pulse-slow"></div>
              
              {/* Particles */}
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
                <div className="firefly"></div>
                <div className="firefly"></div>
              </div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-6 relative">
                  {/* Enhanced logo effect */}
                  <div className="inline-block relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 opacity-50 blur-lg rounded-full"></div>
                    <h1 className="relative text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-primary-200 uppercase tracking-tight">
                      Gateway <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">MC</span>
                    </h1>
                  </div>
                </div>
                
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
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-400/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <FaServer className="text-xl relative z-10" />
                    <span className="relative z-10">{isCopied ? '¡IP Copiada!' : serverIP}</span>
                  </button>
                  
                  <a 
                    href="https://discord.gg/gatitos2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-[#5865F2] to-[#4752c4] hover:from-[#4752c4] hover:to-[#3c46a3] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-900/20 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#6d78ff]/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <FaDiscord className="text-xl relative z-10" />
                    <span className="relative z-10">Únete a Discord</span>
                  </a>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="premium-badge px-4 py-1.5 rounded-full text-sm font-bold mx-2">Premium</div>
                  <div className="non-premium-badge px-4 py-1.5 rounded-full text-sm font-bold mx-2">No-Premium</div>
                  <div className="px-4 py-1.5 rounded-full text-sm font-bold mx-2 bg-gradient-to-r from-green-700 to-green-800 text-green-200">1.21.4</div>
                </div>
              </div>
            </div>
            
            {/* Animated scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <FaChevronDown className="text-2xl text-primary-400" />
            </div>
          </section>
          
          {/* Server Info - With enhanced design */}
          <section className="py-20 relative">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600/10 rounded-full filter blur-[100px]"></div>
            </div>
            
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="inline-block text-3xl md:text-4xl font-bold text-white relative">
                    <span className="relative z-10">Características del Servidor</span>
                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 -z-0 transform -rotate-1"></div>
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  <div className="minecraft-glass-panel p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-dark-900/30 opacity-80"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary-800/20 to-primary-700/5 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-900 to-dark-900 flex items-center justify-center mb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-600/5 to-primary-400/10 rounded-xl"></div>
                        <FaServer className="text-2xl text-primary-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">Servidor Dedicado</h3>
                      <p className="text-gray-400">Infraestructura premium con 16GB de RAM dedicada para un rendimiento óptimo.</p>
                    </div>
                  </div>
                  
                  <div className="minecraft-glass-panel p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-dark-900/30 opacity-80"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary-800/20 to-primary-700/5 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-900 to-dark-900 flex items-center justify-center mb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-600/5 to-primary-400/10 rounded-xl"></div>
                        <FaShieldAlt className="text-2xl text-primary-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">Anti-Grief</h3>
                      <p className="text-gray-400">Sistema avanzado de protección de terrenos para tu seguridad.</p>
                    </div>
                  </div>
                  
                  <div className="minecraft-glass-panel p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-dark-900/30 opacity-80"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary-800/20 to-primary-700/5 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-900 to-dark-900 flex items-center justify-center mb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-600/5 to-primary-400/10 rounded-xl"></div>
                        <FaGem className="text-2xl text-primary-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">Economía</h3>
                      <p className="text-gray-400">Sistema económico con tiendas, trabajos y mucho más.</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="minecraft-glass-panel p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-dark-900/30 opacity-80"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary-800/10 to-primary-700/5 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <FaGamepad className="text-primary-400 mr-2" />
                        Modos de Juego
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-primary-300 mb-1">Survival</h4>
                          <p className="text-gray-400">Experimenta un survival mejorado con plugins cuidadosamente seleccionados que mantienen la esencia vanilla mientras añaden funcionalidades útiles.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-primary-300 mb-1">Economía</h4>
                          <p className="text-gray-400">Sistema económico completo con empleos, tiendas de jugadores y mercado global para comerciar con otros miembros del servidor.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-primary-300 mb-1">PvP Opcional</h4>
                          <p className="text-gray-400">Zonas específicas para PvP donde podrás combatir con otros jugadores y demostrar tus habilidades.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="minecraft-glass-panel p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-dark-900/30 opacity-80"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary-800/10 to-primary-700/5 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <FaCrown className="text-primary-400 mr-2" />
                        Beneficios Premium
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-primary-300 mb-1">Kits Especiales</h4>
                          <p className="text-gray-400">Accede a kits exclusivos que te darán una ventaja inicial sin romper el equilibrio del juego.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-primary-300 mb-1">Comandos Adicionales</h4>
                          <p className="text-gray-400">Comandos adicionales como /hat, /nick, y más para personalizar tu experiencia.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-primary-300 mb-1">Soporte Prioritario</h4>
                          <p className="text-gray-400">Recibe atención prioritaria por parte del equipo administrativo en caso de necesitar ayuda.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Changelog - Updated to show server opening on the 28th */}
          <section className="py-16 bg-dark-900 border-y border-primary-900/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/20 rounded-full filter blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[120px]"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <h2 className="inline-block text-3xl md:text-4xl font-bold text-white relative">
                  <span className="relative z-10">Registro de Cambios</span>
                  <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary-500/20 -z-0 transform -rotate-1"></div>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mt-3">
                  Mantente al día con las últimas novedades y actualizaciones del servidor
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4 py-2 glow-effect">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-yellow-400 mr-2" />
                    <span className="text-yellow-300 font-semibold">28 de Abril 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">¡Apertura Oficial del Servidor!</h3>
                  <p className="text-gray-300">Hoy es el gran día: nuestro servidor abre oficialmente sus puertas a todos los jugadores. ¡Únete a la aventura!</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-indigo-400 mr-2" />
                    <span className="text-indigo-300 font-semibold">20 de Abril 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Pruebas Finales Completadas</h3>
                  <p className="text-gray-300">Hemos terminado las pruebas finales y estamos listos para el lanzamiento oficial. ¡Solo una semana más!</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-indigo-400 mr-2" />
                    <span className="text-indigo-300 font-semibold">10 de Abril 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Beta Testing Completado</h3>
                  <p className="text-gray-300">Hemos completado exitosamente nuestra fase de pruebas beta con la ayuda de nuestra increíble comunidad.</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-indigo-400 mr-2" />
                    <span className="text-indigo-300 font-semibold">1 de Abril 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Fase de Pruebas Beta</h3>
                  <p className="text-gray-300">Los jugadores invitados han comenzado a probar las características del servidor y a proporcionar valiosos comentarios.</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-indigo-400 mr-2" />
                    <span className="text-indigo-300 font-semibold">15 de Marzo 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Desarrollo del Servidor</h3>
                  <p className="text-gray-300">Nuestro equipo comenzó a construir la Gateway MC Network con un enfoque en rendimiento y jugabilidad única.</p>
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
                    Simplemente usa la IP <span className="font-mono bg-dark-700 px-2 py-1 rounded text-primary-400">{serverIP}</span> en Minecraft Java Edition. 
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
                          onClick={copyToClipboard} 
                          className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-300/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                          <FaServer className="text-xl relative z-10" />
                          <span className="relative z-10">{isCopied ? '¡IP Copiada!' : serverIP}</span>
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
                                <p className="text-gray-300 text-sm">Introduce la IP: <span className="font-mono bg-dark-700 px-2 py-0.5 rounded text-primary-400">{serverIP}</span></p>
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
          
          {/* CTA - Updated with more professional design and correct launch date */}
          <section className="container mx-auto px-4 py-16">
            <div className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary-900 via-primary-800 to-dark-900 rounded-2xl shadow-2xl relative overflow-hidden shine-effect gradient-border">
              {/* Background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>
                </div>
                
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400/20 via-indigo-500/10 to-transparent rounded-full filter blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-500/10 via-purple-500/10 to-transparent rounded-full filter blur-[80px]"></div>
                
                {/* Circle glow effects */}
                <div className="absolute left-1/4 top-1/4 w-40 h-40 rounded-full bg-primary-500/5 animate-pulse-slow"></div>
                <div className="absolute right-1/3 bottom-1/3 w-40 h-40 rounded-full bg-secondary-500/5 animate-pulse-slow animation-delay-1000"></div>
                
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
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-1 rounded-full text-sm font-bold text-dark-900 inline-block shadow-inner shadow-yellow-700/20 shine-effect">¡Apertura 28 de Abril!</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4 drop-shadow-glow">
                    ¿Listo para comenzar tu aventura?
                  </h2>
                  
                  <div className="flex justify-center gap-2 mb-6">
                    <div className="premium-badge px-3 py-1 rounded-full text-sm font-bold shine-effect">Premium</div>
                    <div className="non-premium-badge px-3 py-1 rounded-full text-sm font-bold shine-effect">No-Premium</div>
                  </div>
                  
                  <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Únete a nuestra comunidad Minecraft SMP con plugins y forma parte de un mundo en constante crecimiento. 
                    Acepta tanto cuentas premium como no premium.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={copyToClipboard} 
                      className="px-8 py-4 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-primary-900 font-bold rounded-xl flex items-center justify-center gap-2 transition-all relative overflow-hidden group shadow-xl shadow-primary-950/20 shine-effect"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-300/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                      <FaServer className="text-xl relative z-10" />
                      <span className="relative z-10">{isCopied ? '¡IP Copiada!' : serverIP}</span>
                    </button>
                    
                    <a href="https://discord.gg/gatitos2" target="_blank" rel="noopener noreferrer" 
                      className="px-8 py-4 bg-gradient-to-r from-[#5865F2] to-[#4752c4] hover:from-[#4752c4] hover:to-[#3c46a3] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary-950/20 relative overflow-hidden group shine-effect"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#6d78ff]/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                      <FaDiscord className="text-xl relative z-10" />
                      <span className="relative z-10">Únete a Discord</span>
                    </a>
                    
                    <Link href="/minecraft/map"
                      className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary-950/20 relative overflow-hidden group shine-effect"
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
          
          {/* Style component for animations and new styles */}
          <style jsx global>
            {`${firefliesStyle}${enhancedStyles}`}
          </style>
        </div>
      </main>
      <Footer />
    </>
  );
}
