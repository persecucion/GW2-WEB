'use client'

import Link from 'next/link'
import { FaArrowLeft, FaServer, FaDiscord, FaMapMarkedAlt, FaCube, FaCompass } from 'react-icons/fa'
import { useState } from 'react'

// Define servidor con puerto 
const serverIP = 'mc.gw2.xyz';

export default function MinecraftMapPage() {
  const [ipCopied, setIpCopied] = useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIpCopied(true);
    setTimeout(() => setIpCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      {/* Header */}
      <header className="border-b border-primary-900/30 backdrop-blur-md bg-dark-950/80 sticky top-0 z-50 shadow-lg shadow-primary-900/5">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link 
              href="/minecraft"
              className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              <FaArrowLeft />
              <span>Volver a Minecraft</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => copyToClipboard(serverIP)}
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 px-4 py-1.5 rounded-lg text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary-900/20 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-400/0 via-primary-300/10 to-primary-400/0 group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <FaServer className="text-sm" />
                <span className="relative z-10">{ipCopied ? '¡Copiado!' : serverIP}</span>
              </button>
              
              <a
                href="https://discord.gg/gatitos2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#5865F2] to-[#4752c4] hover:from-[#4752c4] hover:to-[#3c46a3] px-4 py-1.5 rounded-lg text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-[#5865F2]/10 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4752c4]/0 via-[#6d78ff]/10 to-[#4752c4]/0 group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <FaDiscord className="text-sm" />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Mapa del Servidor <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">Minecraft</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explora el mundo de nuestro servidor Minecraft en tiempo real. Encuentra bases, jugadores activos y puntos de interés.
            </p>
          </div>
          
          <div className="bg-dark-800/90 backdrop-blur-md rounded-xl overflow-hidden border border-primary-800/50 shadow-2xl mb-8 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full filter blur-[50px]"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-[50px]"></div>
            
            <div className="p-4 bg-dark-850/90 border-b border-primary-900/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                  <FaMapMarkedAlt className="text-primary-400" />
                </div>
                <div>
                  <h2 className="font-bold text-white">Mapa Dynmap</h2>
                  <p className="text-xs text-gray-400">Actualizado en tiempo real</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-green-900/50 border border-green-700/30 text-green-400 text-xs font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Online</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary-900/50 border border-primary-700/30 text-primary-400 text-xs font-medium">
                  8 jugadores activos
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[16/9] bg-dark-900 overflow-hidden">
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-dark-900">
                <FaCompass className="text-9xl text-primary-900/20 animate-pulse-slow" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-900/80 mx-auto flex items-center justify-center mb-3">
                    <FaCube className="text-3xl text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Mapa en mantenimiento</h3>
                  <p className="text-gray-400 max-w-md">
                    Estamos preparando el mapa para el lanzamiento del servidor el 28 de abril.
                  </p>
                </div>
                
                <button 
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-lg text-white font-medium"
                >
                  Reintentar cargar
                </button>
              </div>
            </div>
            
            <div className="p-3 bg-dark-850/90 border-t border-primary-900/30 flex items-center justify-between text-xs text-gray-500">
              <div>Powered by Dynmap</div>
              <div>Última actualización: hace 5 minutos</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-800/90 backdrop-blur-md rounded-xl p-5 border border-primary-800/50 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 via-indigo-500/10 to-transparent rounded-xl blur-md opacity-0 group-hover:opacity-70 transition duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                    <FaServer className="text-primary-400" />
                  </div>
                  <h3 className="font-bold text-white">Información del Servidor</h3>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Versión</span>
                    <span className="font-medium text-primary-400">1.21.4</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Estado</span>
                    <span className="px-2 py-0.5 rounded bg-green-900/20 text-green-400 text-xs">Online</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">Jugadores</span>
                    <span className="font-medium">8/100</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-700">
                    <span className="text-gray-400">IP</span>
                    <button 
                      onClick={() => copyToClipboard(serverIP)}
                      className="font-mono bg-dark-700 px-2 py-0.5 rounded text-primary-400 hover:bg-dark-600 transition-colors"
                    >
                      {serverIP}
                    </button>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">TPS</span>
                    <span className="font-medium">20.0</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-800/90 backdrop-blur-md rounded-xl p-5 border border-primary-800/50 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 via-indigo-500/10 to-transparent rounded-xl blur-md opacity-0 group-hover:opacity-70 transition duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                    <FaMapMarkedAlt className="text-primary-400" />
                  </div>
                  <h3 className="font-bold text-white">Puntos de Interés</h3>
                </div>
                
                <div className="space-y-2.5 text-gray-300 mb-4">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-dark-700/50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-blue-900/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-xs">1</span>
                    </span>
                    <div>
                      <h4 className="font-medium text-white text-sm">Spawn</h4>
                      <p className="text-xs text-gray-400">Punto de inicio para todos los jugadores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-dark-700/50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-green-900/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs">2</span>
                    </span>
                    <div>
                      <h4 className="font-medium text-white text-sm">Aldea comercial</h4>
                      <p className="text-xs text-gray-400">Mercado principal para intercambios</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-dark-700/50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-red-900/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs">3</span>
                    </span>
                    <div>
                      <h4 className="font-medium text-white text-sm">Arena PvP</h4>
                      <p className="text-xs text-gray-400">Zona de combate entre jugadores</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-dark-700 hover:bg-dark-600 text-gray-300 rounded-lg text-sm transition-colors">
                  Ver lista completa
                </button>
              </div>
            </div>
            
            <div className="bg-dark-800/90 backdrop-blur-md rounded-xl p-5 border border-primary-800/50 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 via-indigo-500/10 to-transparent rounded-xl blur-md opacity-0 group-hover:opacity-70 transition duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                    <FaDiscord className="text-primary-400" />
                  </div>
                  <h3 className="font-bold text-white">Comunidad</h3>
                </div>
                
                <div className="text-gray-300 mb-5">
                  <p className="mb-3">
                    Únete a nuestra comunidad en Discord para recibir ayuda, reportar problemas, y conectar con otros jugadores.
                  </p>
                  
                  <div className="bg-dark-750 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm text-green-400 font-medium">310 miembros en línea</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Canales: #general, #soporte, #sugerencias
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://discord.gg/gatitos2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full py-2 bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium rounded-lg text-center transition-colors"
                >
                  Únete al Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-primary-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <FaCube className="text-primary-400" />
              <span className="text-gray-400">MC.GW2.XYZ &copy; 2024</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Link 
                href="/minecraft" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Servidor
              </Link>
              <a 
                href="https://discord.gg/gatitos2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Discord
              </a>
              <a 
                href="#reglas" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Reglas
              </a>
              <button 
                onClick={() => copyToClipboard(serverIP)}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                {ipCopied ? '¡IP Copiada!' : serverIP}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 
