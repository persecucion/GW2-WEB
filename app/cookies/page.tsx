'use client';

import React, { useEffect } from 'react';
import { FaCookieBite, FaShieldAlt, FaInfoCircle, FaChrome, FaFirefox, FaSafari, FaEdge } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CookiesPolicy() {
  useEffect(() => {
    // Scroll al inicio de la página cuando se carga
    window.scrollTo(0, 0);
    
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-dark-800">
        <div className="absolute inset-0 bg-dark-800"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <span className="bg-primary-900 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Política de <span className="text-primary-400">Cookies</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Información sobre cómo utilizamos las cookies y cómo puedes controlarlas
            </p>
          </div>
        </div>
      </section>
      
      <div className="bg-dark-900 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-dark-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-4">
              <div className="bg-primary-900 p-3 rounded-lg mr-4">
                <FaCookieBite className="text-primary-400 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-white">¿Qué son las cookies?</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo cuando los visita. 
              Las cookies sirven para que el sitio funcione correctamente, para personalizar el contenido, para proporcionar 
              funcionalidades de redes sociales y para analizar nuestro tráfico.
            </p>
            <p className="text-gray-300">
              La mayoría de los navegadores web aceptan cookies por defecto, pero puede configurar su navegador para 
              rechazar todas las cookies o para que le notifique cuando se envíe una cookie, lo que le da la opción 
              de decidir si la acepta o no.
            </p>
          </div>
          
          <div className="bg-dark-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg mb-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-4">
              <div className="bg-primary-900 p-3 rounded-lg mr-4">
                <FaInfoCircle className="text-primary-400 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Tipos de cookies que utilizamos</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-dark-700 rounded-lg border border-gray-600">
                <h3 className="text-xl font-medium text-white mb-2">Cookies esenciales</h3>
                <p className="text-gray-300">
                  Estas cookies son necesarias para el funcionamiento de nuestro sitio web y no pueden desactivarse 
                  en nuestros sistemas. Generalmente solo se establecen en respuesta a acciones realizadas por usted, 
                  como establecer sus preferencias de privacidad, iniciar sesión o completar formularios.
                </p>
              </div>
              
              <div className="p-4 bg-dark-700 rounded-lg border border-gray-600">
                <h3 className="text-xl font-medium text-white mb-2">Cookies analíticas</h3>
                <p className="text-gray-300">
                  Utilizamos cookies analíticas proporcionadas por servicios como Google Analytics para recopilar información 
                  sobre cómo los visitantes utilizan nuestro sitio. Estas cookies nos ayudan a mejorar nuestro sitio web 
                  mediante la recopilación y el informe de información sobre su uso.
                </p>
              </div>
              
              <div className="p-4 bg-dark-700 rounded-lg border border-gray-600">
                <h3 className="text-xl font-medium text-white mb-2">Cookies de funcionalidad</h3>
                <p className="text-gray-300">
                  Estas cookies permiten que nuestro sitio ofrezca funcionalidades y personalización mejoradas. 
                  Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.
                </p>
              </div>
              
              <div className="p-4 bg-dark-700 rounded-lg border border-gray-600">
                <h3 className="text-xl font-medium text-white mb-2">Cookies de redes sociales</h3>
                <p className="text-gray-300">
                  Proporcionamos botones e integraciones con redes sociales para mejorar su experiencia en nuestro sitio. 
                  Estos servicios pueden establecer cookies para ofrecer sus funcionalidades.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg mb-8" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center mb-4">
              <div className="bg-primary-900 p-3 rounded-lg mr-4">
                <FaShieldAlt className="text-primary-400 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Control de cookies</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Puede configurar su navegador para rechazar todas las cookies o para que le notifique cuando se envía una cookie. 
              Sin embargo, si bloquea o elimina cookies, es posible que algunas partes de nuestro sitio no funcionen correctamente.
            </p>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-medium text-white mb-2">Gestionar cookies en diferentes navegadores</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-dark-700 p-4 rounded-lg border border-gray-600 flex items-center">
                  <div className="bg-blue-700 p-2 rounded-lg mr-3">
                    <FaChrome className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Google Chrome</p>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-400 text-sm hover:underline">
                      Ver instrucciones
                    </a>
                  </div>
                </div>
                
                <div className="bg-dark-700 p-4 rounded-lg border border-gray-600 flex items-center">
                  <div className="bg-orange-700 p-2 rounded-lg mr-3">
                    <FaFirefox className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Mozilla Firefox</p>
                    <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-primary-400 text-sm hover:underline">
                      Ver instrucciones
                    </a>
                  </div>
                </div>
                
                <div className="bg-dark-700 p-4 rounded-lg border border-gray-600 flex items-center">
                  <div className="bg-blue-600 p-2 rounded-lg mr-3">
                    <FaSafari className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Apple Safari</p>
                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-400 text-sm hover:underline">
                      Ver instrucciones
                    </a>
                  </div>
                </div>
                
                <div className="bg-dark-700 p-4 rounded-lg border border-gray-600 flex items-center">
                  <div className="bg-teal-700 p-2 rounded-lg mr-3">
                    <FaEdge className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Microsoft Edge</p>
                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-400 text-sm hover:underline">
                      Ver instrucciones
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg mb-8" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center mb-4">
              <div className="bg-primary-900 p-3 rounded-lg mr-4">
                <FaInfoCircle className="text-primary-400 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Cookies de terceros</h2>
            </div>
            <p className="text-gray-300 mb-4">
              En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. 
              La siguiente sección detalla qué cookies de terceros puede encontrar a través de este sitio.
            </p>
            <ul className="space-y-2">
              <li className="bg-dark-700 p-3 rounded-lg border border-gray-600 text-gray-300">
                Este sitio utiliza Google Analytics, una de las soluciones de análisis más extendidas y fiables 
                en Internet, para ayudarnos a comprender cómo utiliza el sitio y las formas en que podemos mejorar su experiencia.
              </li>
              <li className="bg-dark-700 p-3 rounded-lg border border-gray-600 text-gray-300">
                También podemos utilizar cookies de redes sociales cuando utilizas botones para compartir contenido 
                o cuando te conectas usando tus credenciales de redes sociales.
              </li>
              <li className="bg-dark-700 p-3 rounded-lg border border-gray-600 text-gray-300">
                Para la experiencia de chat y comunidad, utilizamos cookies relacionadas con nuestro servidor de Discord.
              </li>
            </ul>
          </div>
          
          <div className="bg-dark-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-center mb-4">
              <div className="bg-primary-900 p-3 rounded-lg mr-4">
                <FaInfoCircle className="text-primary-400 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-white">¿Más preguntas?</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Si tienes alguna pregunta sobre nuestra política de cookies o cómo manejamos tus datos, 
              no dudes en contactarnos a través de:
            </p>
            <div className="space-y-2">
              <div className="bg-dark-700 p-3 rounded-lg border border-gray-600 text-gray-300">
                Nuestro formulario de contacto en la página <a href="/contact" className="text-primary-400 hover:underline">Contacto</a>
              </div>
              <div className="bg-dark-700 p-3 rounded-lg border border-gray-600 text-gray-300">
                Nuestro servidor de Discord: <a href="https://discord.gg/gatitos2" className="text-primary-400 hover:underline" target="_blank" rel="noopener noreferrer">discord.gg/gatitos2</a>
              </div>
              <div className="bg-dark-700 p-3 rounded-lg border border-gray-600 text-gray-300">
                Email: <span className="text-primary-400">info@gw2community.com</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-dark-700 border border-gray-600 rounded-lg">
              <p className="text-gray-300">
                Esta política de cookies fue actualizada por última vez el 1 de abril de 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 
