'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaServer, FaDiscord, FaCalendarAlt, FaUsers, FaScroll, FaComments, FaCube, FaImage } from 'react-icons/fa'
import { useState } from 'react'

// Define una imagen de fallback que se usará cuando no existan las imágenes
const fallbackImageUrl = "/images/logo.png";

export default function MinecraftPage() {
  const [ipCopied, setIpCopied] = useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIpCopied(true);
    setTimeout(() => setIpCopied(false), 2000);
  };

  return (
    <main className="pt-28 pb-20 min-h-screen bg-dark-950">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaCube className="text-primary-400 opacity-10 text-[300px]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 to-dark-950"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaCube className="text-6xl md:text-8xl text-primary-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Servidor <span className="text-primary-400">Minecraft</span> GW2
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Explora, construye y vive aventuras en nuestra comunidad Minecraft
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={() => copyToClipboard('mc.gw2.gg')} 
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <FaServer className="text-xl" />
                <span>{ipCopied ? 'IP Copiada!' : 'mc.gw2.gg'}</span>
              </button>
              
              <a href="https://discord.gg/gatitos2" target="_blank" rel="noopener noreferrer" 
                className="px-8 py-4 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all">
                <FaDiscord className="text-xl" />
                <span>Únete al Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Server Info */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-800 p-6 rounded-xl border border-primary-800 hover:border-primary-600 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary-700 flex items-center justify-center">
                <FaServer className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Información del Servidor</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><span className="font-bold text-primary-400">Versión:</span> 1.20.4</p>
              <p><span className="font-bold text-primary-400">IP:</span> mc.gw2.gg</p>
              <p><span className="font-bold text-primary-400">Tipo:</span> Survival + Minijuegos</p>
              <p><span className="font-bold text-primary-400">Dificultad:</span> Normal</p>
              <p><span className="font-bold text-primary-400">PvP:</span> Habilitado (zonas específicas)</p>
            </div>
          </div>
          
          <div className="bg-dark-800 p-6 rounded-xl border border-primary-800 hover:border-primary-600 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary-700 flex items-center justify-center">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Características Principales</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-primary-400">•</span> Economía equilibrada
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-400">•</span> Sistemas de rangos personalizados
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-400">•</span> Eventos semanales con premios
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-400">•</span> Protección de terrenos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-400">•</span> Comunidad activa y amigable
              </li>
            </ul>
          </div>
          
          <div className="bg-dark-800 p-6 rounded-xl border border-primary-800 hover:border-primary-600 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary-700 flex items-center justify-center">
                <FaCalendarAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Próximos Eventos</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-primary-400 font-bold">25 de Abril, 2025</p>
                <p className="font-medium">Gran inauguración oficial del servidor</p>
              </div>
              <div>
                <p className="text-primary-400 font-bold">2 de Mayo, 2025</p>
                <p className="font-medium">Torneo PvP - Premios exclusivos</p>
              </div>
              <div>
                <p className="text-primary-400 font-bold">15 de Mayo, 2025</p>
                <p className="font-medium">Aventura cooperativa: La mina perdida</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Changelogs */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Últimas Actualizaciones</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Mantente al día con todos los cambios y mejoras en nuestro servidor</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-dark-800 rounded-xl border border-primary-800 overflow-hidden">
          <div className="bg-primary-900 py-3 px-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Changelog</h3>
              <FaScroll className="text-xl text-primary-400" />
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            <div className="pb-6 border-b border-dark-700">
              <div className="flex justify-between mb-2">
                <h4 className="text-xl font-bold text-primary-400">v1.2.0</h4>
                <span className="text-sm text-gray-400">20 de Abril, 2025</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span> 
                  <span>Añadido nuevo mundo de recursos que se reinicia cada 30 días</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span> 
                  <span>Implementado sistema de misiones diarias con recompensas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">*</span> 
                  <span>Mejorado el rendimiento del servidor con optimizaciones en el spawn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">-</span> 
                  <span>Eliminado bug que permitía duplicar items en cofres</span>
                </li>
              </ul>
            </div>
            
            <div className="pb-6 border-b border-dark-700">
              <div className="flex justify-between mb-2">
                <h4 className="text-xl font-bold text-primary-400">v1.1.5</h4>
                <span className="text-sm text-gray-400">5 de Abril, 2025</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span> 
                  <span>Añadido sistema de matrimonio entre jugadores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span> 
                  <span>Nuevo minijuego: Parkour extremo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">*</span> 
                  <span>Balanceada la economía - ajustados precios de venta de items</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <h4 className="text-xl font-bold text-primary-400">v1.1.0</h4>
                <span className="text-sm text-gray-400">20 de Marzo, 2025</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span> 
                  <span>Lanzamiento oficial del servidor GW2 Minecraft</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span> 
                  <span>Implementados 5 rangos iniciales para jugadores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span> 
                  <span>Añadida tienda del servidor con beneficios para supporters</span>
                </li>
              </ul>
            </div>
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
      
      {/* Gallery */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Galería del Servidor</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explora algunos de los increíbles lugares y construcciones de nuestro mundo</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative h-64 rounded-lg overflow-hidden bg-dark-800 border border-primary-700 flex items-center justify-center">
              <FaImage className="text-6xl text-primary-400 opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-dark-900/70 px-4 py-2 rounded text-center">
                  <p className="text-primary-400 font-medium">Construcción destacada #{i+1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* FAQ */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Todo lo que necesitas saber para empezar en nuestro servidor</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-dark-800 rounded-xl overflow-hidden border border-primary-800">
          <div className="divide-y divide-dark-700">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">¿Cómo me uno al servidor?</h3>
              <p className="text-gray-300">
                Simplemente usa la IP <span className="font-mono bg-dark-700 px-2 py-1 rounded text-primary-400">mc.gw2.gg</span> en Minecraft Java Edition. 
                Asegúrate de tener la versión 1.20.4 o utiliza el cliente compatible que ofrecemos en nuestra sección de descargas.
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
      
      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="text-center py-12 md:py-16 px-6 bg-gradient-to-r from-primary-900 to-primary-800 rounded-xl shadow-2xl">
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
              className="px-8 py-4 bg-dark-900 hover:bg-dark-800 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all">
              <FaDiscord className="text-xl" />
              <span>Únete a la comunidad</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 
