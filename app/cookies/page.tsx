'use client';

import React, { useEffect } from 'react';
import { FaCookieBite, FaShieldAlt, FaInfoCircle, FaChrome, FaFirefox, FaSafari, FaEdge } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CookiesPolicy() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="bg-dark-800 min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"
            data-aos="fade-down"
          >
            Política de Cookies
          </h1>
          
          <div className="bg-dark-700 p-6 md:p-8 rounded-xl shadow-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-4">
              <FaCookieBite className="text-primary-400 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold">¿Qué son las cookies?</h2>
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
          
          <div className="bg-dark-700 p-6 md:p-8 rounded-xl shadow-lg mb-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-primary-400 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold">Tipos de cookies que utilizamos</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Cookies esenciales</h3>
                <p className="text-gray-300">
                  Estas cookies son necesarias para el funcionamiento de nuestro sitio web y no pueden desactivarse 
                  en nuestros sistemas. Generalmente solo se establecen en respuesta a acciones realizadas por usted, 
                  como establecer sus preferencias de privacidad, iniciar sesión o completar formularios.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Cookies analíticas</h3>
                <p className="text-gray-300">
                  Utilizamos cookies analíticas proporcionadas por servicios como Google Analytics para recopilar información 
                  sobre cómo los visitantes utilizan nuestro sitio. Estas cookies nos ayudan a mejorar nuestro sitio web 
                  mediante la recopilación y el informe de información sobre su uso.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Cookies de funcionalidad</h3>
                <p className="text-gray-300">
                  Estas cookies permiten que nuestro sitio ofrezca funcionalidades y personalización mejoradas. 
                  Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Cookies de redes sociales</h3>
                <p className="text-gray-300">
                  Proporcionamos botones e integraciones con redes sociales para mejorar su experiencia en nuestro sitio. 
                  Estos servicios pueden establecer cookies para ofrecer sus funcionalidades.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-700 p-6 md:p-8 rounded-xl shadow-lg mb-8" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-primary-400 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold">Control de cookies</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Puede configurar su navegador para rechazar todas las cookies o para que le notifique cuando se envía una cookie. 
              Sin embargo, si bloquea o elimina cookies, es posible que algunas partes de nuestro sitio no funcionen correctamente.
            </p>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-medium text-white mb-2">Gestionar cookies en diferentes navegadores</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-dark-600 p-4 rounded-lg flex items-center">
                  <FaChrome className="text-2xl mr-3 text-blue-400" />
                  <div>
                    <p className="font-medium">Google Chrome</p>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-400 text-sm hover:underline">
                      Ver instrucciones
                    </a>
                  </div>
                </div>
                
                <div className="bg-dark-600 p-4 rounded-lg flex items-center">
                  <FaFirefox className="text-2xl mr-3 text-orange-400" />
                  <div>
                    <p className="font-medium">Mozilla Firefox</p>
                    <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-primary-400 text-sm hover:underline">
                      Ver instrucciones
                    </a>
                  </div>
                </div>
                
                <div className="bg-dark-600 p-4 rounded-lg flex items-center">
                  <FaSafari className="text-2xl mr-3 text-blue-300" />
                  <div>
                    <p className="font-medium">Apple Safari</p>
                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-400 text-sm hover:underline">
                      Ver instrucciones
                    </a>
                  </div>
                </div>
                
                <div className="bg-dark-600 p-4 rounded-lg flex items-center">
                  <FaEdge className="text-2xl mr-3 text-teal-400" />
                  <div>
                    <p className="font-medium">Microsoft Edge</p>
                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-400 text-sm hover:underline">
                      Ver instrucciones
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-700 p-6 md:p-8 rounded-xl shadow-lg mb-8" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-primary-400 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold">Cookies de terceros</h2>
            </div>
            <p className="text-gray-300 mb-4">
              En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. 
              La siguiente sección detalla qué cookies de terceros puede encontrar a través de este sitio.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Este sitio utiliza Google Analytics, una de las soluciones de análisis más extendidas y fiables 
                en Internet, para ayudarnos a comprender cómo utiliza el sitio y las formas en que podemos mejorar su experiencia.
              </li>
              <li>
                También podemos utilizar cookies de redes sociales cuando utilizas botones para compartir contenido 
                o cuando te conectas usando tus credenciales de redes sociales.
              </li>
              <li>
                Para la experiencia de chat y comunidad, utilizamos cookies relacionadas con nuestro servidor de Discord.
              </li>
            </ul>
          </div>
          
          <div className="bg-dark-700 p-6 md:p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-primary-400 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold">¿Más preguntas?</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Si tienes alguna pregunta sobre nuestra política de cookies o cómo manejamos tus datos, 
              no dudes en contactarnos a través de:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Nuestro formulario de contacto en la página <a href="/contact" className="text-primary-400 hover:underline">Contacto</a></li>
              <li>Nuestro servidor de Discord</li>
              <li>Email: <span className="text-primary-400">info@gw2community.com</span></li>
            </ul>
            <p className="text-gray-300 mt-4">
              Esta política de cookies fue actualizada por última vez el 1 de abril de 2024.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 