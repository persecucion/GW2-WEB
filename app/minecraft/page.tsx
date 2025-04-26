'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaServer, FaDiscord, FaMapMarkedAlt, FaCube, FaUsers, FaCalendarAlt, FaCode, FaTrophy, FaGamepad, FaShieldAlt, FaGem, FaCrown, FaChevronDown } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';

// Configuración del servidor
const SERVER_IP = "mc.gw2.xyz:25592";
const SERVER_VERSION = "1.21.4";

// Estilos optimizados
const optimizedStyles = `
  /* Animaciones básicas optimizadas */
  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes shimmer {
    to { background-position: 200% center; }
  }

  .pulse-animation {
    animation: pulse 4s ease-in-out infinite;
  }

  .float-animation {
    animation: float 6s ease-in-out infinite;
  }

  /* Elementos visuales optimizados */
  .minecraft-glass {
    background: rgba(17, 24, 39, 0.7);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  .premium-badge {
    background: linear-gradient(135deg, #ffd700 0%, #ffbb00 100%);
    color: #333;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  .non-premium-badge {
    background: linear-gradient(135deg, #64748b 0%, #475569 100%);
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  }

  .shimmer-text {
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
    background-size: 200% auto;
    animation: shimmer 3s infinite;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .glow-effect:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: inherit;
    background: linear-gradient(45deg, #3b82f6, #9333ea);
    opacity: 0.4;
    filter: blur(8px);
    z-index: -1;
  }
`;

export default function MinecraftPage() {
  const [isCopied, setIsCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('survival');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    // Cargar componentes principales primero
    const timer = setTimeout(() => {
      // Cargar componentes secundarios después
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <style jsx global>{optimizedStyles}</style>
      <Header />
      <main className="bg-dark-950 text-white min-h-screen">
        <div className="min-h-screen pt-16">
          {/* Hero Section - Modernizado y optimizado */}
          <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Fondo optimizado */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Capa base oscura */}
              <div className="absolute inset-0 bg-dark-900/90"></div>
              
              {/* Imagen de fondo con mejor performance */}
              <Image 
                src="/images/minecraft-bg.jpg" 
                alt="Minecraft Background"
                fill
                priority
                className="object-cover object-center opacity-40"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
              
              {/* Gradientes superpuestos */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-dark-950/50 to-dark-950/90"></div>
              
              {/* Efectos de luz sutiles */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full filter blur-[100px] opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-600/10 rounded-full filter blur-[100px] opacity-60 animate-pulse"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
                <div className="inline-block rounded-full bg-gradient-to-r from-primary-900/40 to-secondary-900/40 backdrop-blur-sm px-4 py-1.5 border border-primary-500/20 mb-4">
                  <span className="text-primary-400 text-sm font-medium">✨ SERVIDOR MINECRAFT</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-primary-200 uppercase tracking-tight">
                  GATITOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">CRAFT</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light mt-4">
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
                  <div className="bg-gradient-to-r from-emerald-600 to-green-700 px-4 py-1.5 rounded-full text-sm font-bold mx-2 text-emerald-100 shadow-md shadow-emerald-500/10">1.21.4</div>
                </div>
              </div>
            </div>
            
            {/* Indicador de scroll con mejor animación */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
              <div className="animate-bounce p-2 bg-dark-800/50 backdrop-blur-sm rounded-full border border-primary-500/30 shadow-lg">
                <FaChevronDown className="text-xl text-primary-400" />
              </div>
            </div>
          </section>
          
          {/* Server Info - With enhanced design */}
          <section className="py-20 relative">
            {/* Fondo simplificado */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16" data-aos="fade-up">
                <div className="inline-block rounded-full bg-gradient-to-r from-primary-900/40 to-secondary-900/40 backdrop-blur-sm px-4 py-1.5 border border-primary-500/20 mb-4">
                  <span className="text-primary-400 text-sm font-medium">⚙️ CARACTERÍSTICAS</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Nuestro <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">servidor</span>
                </h2>
                <p className="text-lg text-blue-100/80 max-w-4xl mx-auto">
                  Descubre todo lo que ofrecemos para brindarte la mejor experiencia de juego en Minecraft
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: <FaServer />,
                    title: "Alto Rendimiento",
                    description: "Servidor con 16GB de RAM dedicada para una experiencia fluida sin lag"
                  },
                  {
                    icon: <FaShieldAlt />,
                    title: "Protección de Terrenos",
                    description: "Sistema anti-grief para proteger tus construcciones y recursos"
                  },
                  {
                    icon: <FaGem />,
                    title: "Economía Dinámica",
                    description: "Sistema económico completo con tiendas, trabajos y comercio entre jugadores"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-primary-500/10 p-6 shadow-lg hover:shadow-primary-900/10 transition-all duration-300 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-gradient-to-br from-primary-900/50 to-dark-900/50 rounded-xl h-16 w-16 flex items-center justify-center mb-5 text-primary-400 text-2xl">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div 
                  className="bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-500/10 shadow-lg"
                  data-aos="fade-right"
                >
                  <div className="bg-gradient-to-r from-primary-900/30 to-dark-900/30 p-4 border-b border-primary-500/10">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <FaGamepad className="text-primary-400 mr-3" />
                      Modos de Juego
                    </h3>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary-900/30 h-8 w-8 rounded-lg flex items-center justify-center text-primary-400 mt-0.5">
                        <FaCube />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-300 mb-1">Survival Mejorado</h4>
                        <p className="text-gray-400 text-sm">Survival vanilla con plugins seleccionados para mejorar la experiencia de juego sin cambiar la esencia de Minecraft.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-secondary-900/30 h-8 w-8 rounded-lg flex items-center justify-center text-secondary-400 mt-0.5">
                        <FaGem />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary-300 mb-1">Economía Completa</h4>
                        <p className="text-gray-400 text-sm">Sistema económico con tiendas de jugadores, mercado global y múltiples formas de ganar dinero.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-900/30 h-8 w-8 rounded-lg flex items-center justify-center text-purple-400 mt-0.5">
                        <FaTrophy />
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-300 mb-1">PvP Opcional</h4>
                        <p className="text-gray-400 text-sm">Zonas específicas para PvP donde podrás combatir con otros jugadores y participar en eventos especiales.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-500/10 shadow-lg"
                  data-aos="fade-left"
                >
                  <div className="bg-gradient-to-r from-primary-900/30 to-dark-900/30 p-4 border-b border-primary-500/10">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <FaCrown className="text-primary-400 mr-3" />
                      Beneficios Premium
                    </h3>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-900/30 h-8 w-8 rounded-lg flex items-center justify-center text-yellow-400 mt-0.5">
                        <FaShieldAlt />
                      </div>
                      <div>
                        <h4 className="font-bold text-yellow-300 mb-1">Kits Especiales</h4>
                        <p className="text-gray-400 text-sm">Accede a kits exclusivos que te darán una ventaja inicial sin romper el equilibrio del juego.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-900/30 h-8 w-8 rounded-lg flex items-center justify-center text-blue-400 mt-0.5">
                        <FaCode />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-300 mb-1">Comandos Exclusivos</h4>
                        <p className="text-gray-400 text-sm">Disfruta de comandos adicionales como /hat, /nick y otros para personalizar tu experiencia de juego.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-900/30 h-8 w-8 rounded-lg flex items-center justify-center text-green-400 mt-0.5">
                        <FaUsers />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-300 mb-1">Soporte Prioritario</h4>
                        <p className="text-gray-400 text-sm">Recibe atención prioritaria por parte del equipo administrativo en caso de necesitar ayuda.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Changelog - Optimizado y modernizado */}
          <section className="py-20 relative">
            {/* Fondo simplificado */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900"></div>
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
            
            {/* Efectos de luz */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-700/5 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary-700/5 rounded-full filter blur-[100px]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12" data-aos="fade-up">
                <div className="inline-block rounded-full bg-gradient-to-r from-primary-900/40 to-secondary-900/40 backdrop-blur-sm px-4 py-1.5 border border-primary-500/20 mb-4">
                  <span className="text-primary-400 text-sm font-medium">📅 NOVEDADES</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Registro de <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">cambios</span>
                </h2>
                <p className="text-lg text-blue-100/80 max-w-4xl mx-auto">
                  Mantente al día con las últimas actualizaciones y novedades del servidor
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <div className="relative pl-8 border-l-2 border-primary-600/30 mb-16">
                  {/* Timeline dots */}
                  <div className="absolute top-0 left-0 bottom-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map(i => (
                      <div 
                        key={i} 
                        className={`w-5 h-5 -ml-[11px] rounded-full ${i === 0 ? 'bg-yellow-500' : 'bg-primary-600'}`}
                      >
                        <span className={`absolute left-0 top-0 w-5 h-5 rounded-full ${i === 0 ? 'bg-yellow-500' : 'bg-primary-600'} animate-ping opacity-75 duration-1000`}></span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Timeline entries */}
                  <div className="space-y-12">
                    {[
                      {
                        date: "28 de Abril 2024",
                        title: "¡Apertura Oficial del Servidor!",
                        description: "Hoy es el gran día: nuestro servidor abre oficialmente sus puertas a todos los jugadores. ¡Únete a la aventura!",
                        highlight: true
                      },
                      {
                        date: "20 de Abril 2024",
                        title: "Pruebas Finales Completadas",
                        description: "Hemos terminado las pruebas finales y estamos listos para el lanzamiento oficial. ¡Solo una semana más!"
                      },
                      {
                        date: "10 de Abril 2024",
                        title: "Beta Testing Completado",
                        description: "Hemos completado exitosamente nuestra fase de pruebas beta con la ayuda de nuestra increíble comunidad."
                      },
                      {
                        date: "1 de Abril 2024",
                        title: "Fase de Pruebas Beta",
                        description: "Los jugadores invitados han comenzado a probar las características del servidor y a proporcionar valiosos comentarios."
                      },
                      {
                        date: "15 de Marzo 2024",
                        title: "Desarrollo del Servidor",
                        description: "Nuestro equipo comenzó a construir la Gateway MC Network con un enfoque en rendimiento y jugabilidad única."
                      }
                    ].map((entry, i) => (
                      <div 
                        key={i}
                        className="pl-8 mb-8"
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                      >
                        <div className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 ${
                          entry.highlight 
                            ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                            : 'bg-primary-600/20 text-primary-300 border border-primary-600/30'
                        }`}>
                          <div className="flex items-center space-x-2">
                            <FaCalendarAlt />
                            <span>{entry.date}</span>
                          </div>
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-2 ${
                          entry.highlight ? 'text-yellow-200' : 'text-white'
                        }`}>
                          {entry.title}
                        </h3>
                        
                        <p className="text-gray-400">
                          {entry.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center" data-aos="fade-up">
                  <Link href="/minecraft/updates" className="px-6 py-3 bg-primary-600/20 hover:bg-primary-600/30 border border-primary-500/30 rounded-xl inline-flex items-center space-x-2 transition-colors">
                    <span>Ver historial completo</span>
                    <FaChevronDown className="transform rotate-270" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Gallery - Modernizada */}
          <section className="py-20 relative">
            {/* Fondo simplificado */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
            
            {/* Efectos de luz */}
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-[100px]"></div>
            <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600/5 rounded-full filter blur-[100px]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12" data-aos="fade-up">
                <div className="inline-block rounded-full bg-gradient-to-r from-primary-900/40 to-secondary-900/40 backdrop-blur-sm px-4 py-1.5 border border-primary-500/20 mb-4">
                  <span className="text-primary-400 text-sm font-medium">🖼️ GALERÍA</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Nuestro <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">mundo</span>
                </h2>
                <p className="text-lg text-blue-100/80 max-w-4xl mx-auto">
                  Explora algunas de las increíbles construcciones y paisajes de nuestro servidor
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Ciudad Principal",
                    author: "Equipo GW2",
                    img: "/images/minecraft/spawn.jpg" 
                  },
                  {
                    title: "Templo del Dragón",
                    author: "MasterBuilder",
                    img: "/images/minecraft/temple.jpg"
                  },
                  {
                    title: "Base Submarina",
                    author: "CubeWizard",
                    img: "/images/minecraft/underwater.jpg"
                  },
                  {
                    title: "Castillo Medieval",
                    author: "ArchitectMC",
                    img: "/images/minecraft/castle.jpg"
                  },
                  {
                    title: "Granja Automatizada",
                    author: "RedstoneGenius",
                    img: "/images/minecraft/farm.jpg"
                  },
                  {
                    title: "Montañas Nevadas",
                    author: "LandscapeArtist",
                    img: "/images/minecraft/mountains.jpg"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-dark-800">
                      <div className="flex items-center justify-center h-full">
                        <FaCube className="text-6xl text-dark-700" />
                      </div>
                    </div>
                    
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHXi2unAAAAABJRU5ErkJggg=="
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm flex items-center">
                        <span className="w-5 h-5 rounded-full bg-primary-800 mr-2 flex items-center justify-center">
                          <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                        </span>
                        {item.author}
                      </p>
                    </div>
                    
                    <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                      <button className="bg-dark-900/80 text-white font-medium px-4 py-2 rounded-lg backdrop-blur-sm border border-primary-500/30 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Ver detalle
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10" data-aos="fade-up">
                <Link 
                  href="/minecraft/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600/80 to-secondary-600/80 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-xl transition-colors shadow-lg shadow-primary-900/10"
                >
                  <span>Ver Galería Completa</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
          
          {/* FAQ - Modernizada y optimizada */}
          <section className="py-20 relative">
            {/* Fondo simplificado */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900"></div>
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
            
            {/* Efectos de luz */}
            <div className="absolute top-20 right-20 w-80 h-80 bg-primary-600/5 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-600/5 rounded-full filter blur-[100px]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12" data-aos="fade-up">
                <div className="inline-block rounded-full bg-gradient-to-r from-primary-900/40 to-secondary-900/40 backdrop-blur-sm px-4 py-1.5 border border-primary-500/20 mb-4">
                  <span className="text-primary-400 text-sm font-medium">❓ PREGUNTAS</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Preguntas <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">frecuentes</span>
                </h2>
                <p className="text-lg text-blue-100/80 max-w-4xl mx-auto">
                  Todo lo que necesitas saber para empezar en nuestro servidor
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    question: "¿Cómo me uno al servidor?",
                    answer: `Simplemente usa la IP <span class="inline-block font-mono bg-dark-700 px-2 py-1 rounded text-primary-400">${SERVER_IP}</span> en Minecraft Java Edition. Asegúrate de tener la versión 1.21.4 para disfrutar de todas las características del servidor.`
                  },
                  {
                    question: "¿El servidor acepta cuentas no premium?",
                    answer: "¡Sí! Nuestro servidor acepta tanto cuentas premium (originales) como no premium. Todos los jugadores tienen acceso a las mismas características y funcionalidades del servidor."
                  },
                  {
                    question: "¿Qué plugins tiene el servidor?",
                    answer: "Utilizamos una selección cuidadosa de plugins SMP para mejorar la experiencia de juego sin alterar demasiado la esencia vanilla. Entre ellos están EssentialsX, WorldGuard, GriefPrevention y otros plugins que mejoran la jugabilidad manteniendo el espíritu del juego."
                  },
                  {
                    question: "¿Cómo puedo proteger mis construcciones?",
                    answer: "Usamos el plugin GriefPrevention para que puedas proteger tus construcciones. Simplemente utiliza una pala de oro y haz clic derecho en las esquinas opuestas del área que deseas proteger. También ofrecemos tutoriales detallados en nuestro Discord."
                  },
                  {
                    question: "¿Hay eventos especiales en el servidor?",
                    answer: "¡Sí! Organizamos eventos semanales como carreras de parkour, torneos PvP, construcciones comunitarias y mucho más. Todos los eventos se anuncian en nuestro Discord con anticipación."
                  },
                  {
                    question: "¿Puedo ser parte del staff?",
                    answer: "Periódicamente abrimos aplicaciones para moderadores y helpers. Para tener oportunidad, debes ser un miembro activo de la comunidad, tener buen comportamiento y conocimiento del juego. Los anuncios de reclutamiento se publican en nuestro Discord."
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-dark-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-primary-900/50"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-gradient-to-r from-primary-900/40 to-dark-900/40 px-6 py-4">
                      <h3 className="text-xl font-bold text-white">{item.question}</h3>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12" data-aos="fade-up">
                <a 
                  href="https://discord.gg/gatitos2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium rounded-xl transition-colors shadow-lg shadow-blue-900/10"
                >
                  <FaDiscord className="text-xl" />
                  <span>Más preguntas en Discord</span>
                </a>
              </div>
            </div>
          </section>
          
          {/* CTA Join Server - Final call to action */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-950"></div>
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/10 blur-[100px]"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary-500/10 blur-[100px]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                <h2 className="text-4xl font-bold mb-6 text-white">
                  ¿Listo para unirte a la <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">aventura</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                  No esperes más para formar parte de esta increíble comunidad de Minecraft
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={copyToClipboard} 
                    className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary-900/20 w-full sm:w-auto"
                  >
                    <FaServer className="text-xl" />
                    <span>{isCopied ? '¡IP Copiada!' : SERVER_IP}</span>
                  </button>
                  
                  <a 
                    href="https://discord.gg/gatitos2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-[#5865F2] to-[#4752c4] hover:from-[#4752c4] hover:to-[#3c46a3] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-900/20 w-full sm:w-auto"
                  >
                    <FaDiscord className="text-xl" />
                    <span>Únete a Discord</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
