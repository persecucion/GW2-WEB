'use client'

import Link from 'next/link'
import { FaServer, FaDiscord, FaHome, FaMapMarkedAlt, FaInfoCircle, FaCogs, FaArrowLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function MinecraftMapPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapType, setMapType] = useState('surface'); // 'surface', 'nether', 'end'
  
  useEffect(() => {
    // Simula un tiempo de carga
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const mapUrl = {
    surface: "https://ejemplo.com/mapa/#world",
    nether: "https://ejemplo.com/mapa/#nether",
    end: "https://ejemplo.com/mapa/#end"
  };

  return (
    <main className="min-h-screen bg-dark-950">
      {/* Header */}
      <div className={`${isFullscreen ? 'hidden' : 'fixed'} top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-primary-900/50`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/minecraft" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
              <FaArrowLeft />
              <span className="font-medium">Volver al inicio</span>
            </Link>
            
            <h1 className="text-xl font-bold text-white">
              Mapa del Servidor <span className="text-primary-400">mc.gw2.gg</span>
            </h1>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://discord.gg/gatitos2" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
                title="Discord"
              >
                <FaDiscord className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Container */}
      <div className={`pt-16 ${isFullscreen ? 'pt-0' : ''} min-h-screen flex flex-col`}>
        {/* Map Type Selector */}
        <div className={`${isFullscreen ? 'hidden' : 'block'} bg-dark-850 border-b border-primary-900/30`}>
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setMapType('surface')}
                  className={`px-3 py-1.5 rounded font-medium text-sm transition-colors ${mapType === 'surface' ? 'bg-primary-700 text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
                >
                  Superficie
                </button>
                <button 
                  onClick={() => setMapType('nether')}
                  className={`px-3 py-1.5 rounded font-medium text-sm transition-colors ${mapType === 'nether' ? 'bg-red-700 text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
                >
                  Nether
                </button>
                <button 
                  onClick={() => setMapType('end')}
                  className={`px-3 py-1.5 rounded font-medium text-sm transition-colors ${mapType === 'end' ? 'bg-purple-700 text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
                >
                  End
                </button>
              </div>
              
              <button 
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="px-3 py-1.5 bg-dark-700 text-gray-300 hover:bg-dark-600 rounded font-medium text-sm transition-colors"
              >
                {isFullscreen ? 'Salir de Pantalla Completa' : 'Pantalla Completa'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Map Frame */}
        <div className="flex-1 bg-dark-800">
          {!isLoaded ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-white text-lg font-medium">Cargando mapa...</p>
              </div>
            </div>
          ) : (
            <iframe 
              src={mapUrl[mapType]} 
              className="w-full h-full border-0" 
              title="Mapa de Minecraft"
            />
          )}
        </div>
      </div>
      
      {/* Floating Controls (visible only in fullscreen) */}
      {isFullscreen && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-dark-900/90 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-900/50 z-50">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMapType('surface')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${mapType === 'surface' ? 'bg-primary-700 text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
              title="Superficie"
            >
              <FaMapMarkedAlt />
            </button>
            <button 
              onClick={() => setMapType('nether')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${mapType === 'nether' ? 'bg-red-700 text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
              title="Nether"
            >
              <FaMapMarkedAlt />
            </button>
            <button 
              onClick={() => setMapType('end')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${mapType === 'end' ? 'bg-purple-700 text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
              title="End"
            >
              <FaMapMarkedAlt />
            </button>
            <button 
              onClick={() => setIsFullscreen(false)}
              className="w-8 h-8 bg-dark-700 text-gray-300 hover:bg-dark-600 rounded-full flex items-center justify-center transition-colors"
              title="Salir de Pantalla Completa"
            >
              <FaArrowLeft />
            </button>
          </div>
        </div>
      )}
      
      {/* Info Section - Guide for Map */}
      <div className={`${isFullscreen ? 'hidden' : 'block'} bg-dark-900 py-8 border-t border-primary-900/30`}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Guía del Mapa Interactivo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-800 rounded-xl p-5 border border-primary-900/40">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-900/70 flex items-center justify-center flex-shrink-0">
                  <FaInfoCircle className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">¿Cómo funciona?</h3>
                  <p className="text-gray-300 text-sm">
                    Nuestro mapa interactivo muestra en tiempo real el mundo del servidor. 
                    Puedes navegar, hacer zoom y encontrar ubicaciones importantes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-800 rounded-xl p-5 border border-primary-900/40">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-900/70 flex items-center justify-center flex-shrink-0">
                  <FaCogs className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Configuración técnica</h3>
                  <p className="text-gray-300 text-sm">
                    El mapa se actualiza cada 5 minutos. Utiliza Dynmap o BlueMap para mostrar
                    el servidor en 3D con todos los detalles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-800 rounded-xl p-5 border border-primary-900/40">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-900/70 flex items-center justify-center flex-shrink-0">
                  <FaHome className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cómo aparecer en el mapa</h3>
                  <p className="text-gray-300 text-sm">
                    Tu posición se muestra automáticamente en el mapa mientras juegas.
                    Las construcciones importantes aparecerán destacadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-dark-800 rounded-lg border border-yellow-700/30">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-600/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <FaInfoCircle className="text-yellow-300 text-sm" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Configuración del mapa</h4>
                <p className="text-gray-300">
                  Para configurar tu propio mapa web, debes instalar un plugin como Dynmap o BlueMap en tu servidor de Minecraft. 
                  Estos plugins generan un mapa web interactivo que puedes embeber en tu sitio. 
                  Configura el plugin en tu servidor, asegúrate de que esté accesible desde la web, y luego 
                  actualiza la URL del iframe en esta página para mostrar tu mapa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
