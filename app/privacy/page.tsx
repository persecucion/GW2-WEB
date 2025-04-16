'use client'

import { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Link from 'next/link'
import { FaArrowRight, FaShieldAlt } from 'react-icons/fa'
import { Button } from '../components/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PrivacyPage() {
  useEffect(() => {
    // Scroll al inicio de la página cuando se carga
    window.scrollTo(0, 0)
    
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-900">
        {/* Hero Section */}
        <section className="pt-28 pb-16 relative bg-dark-800">
          <div className="absolute inset-0 bg-dark-800"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="bg-primary-900 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                Legal
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Política de <span className="text-primary-400">Privacidad</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Tu privacidad es importante para nosotros. Esta Política detalla cómo recopilamos, utilizamos y protegemos tu información personal.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-dark-800 rounded-xl p-8 border border-gray-700 shadow-xl" data-aos="fade-up">
              <div className="space-y-8">
                <div className="bg-dark-700 p-6 rounded-lg border border-gray-600">
                  <h2 className="text-xl font-bold mb-4 text-white">1. Información que Recopilamos</h2>
                  <p className="text-gray-300 mb-4">
                    Recopilamos la siguiente información cuando te unes a nuestro servidor de Discord o utilizas nuestros servicios:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Nombre de usuario de Discord e ID único</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Dirección de correo electrónico (solo para suscripciones VIP o contacto directo)</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Información de pago (procesada por servicios de terceros como Patreon o PayPal)</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Datos de participación y actividad en el servidor</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Mensajes y contenido que compartes en nuestros canales</li>
                  </ul>
                </div>

                <div className="bg-dark-700 p-6 rounded-lg border border-gray-600">
                  <h2 className="text-xl font-bold mb-4 text-white">2. Cómo Utilizamos Tu Información</h2>
                  <p className="text-gray-300 mb-4">
                    Utilizamos la información recopilada para:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Proporcionar y mantener nuestros servicios de comunidad</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Mejorar y personalizar tu experiencia en el servidor</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Procesar transacciones y gestionar suscripciones VIP</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Comunicarnos contigo sobre actualizaciones, eventos y sorteos</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Mantener la seguridad y cumplir con las reglas del servidor</li>
                  </ul>
                </div>

                <div className="bg-dark-700 p-6 rounded-lg border border-gray-600">
                  <h2 className="text-xl font-bold mb-4 text-white">3. Compartición de Datos</h2>
                  <p className="text-gray-300 mb-4">
                    No vendemos, alquilamos ni comerciamos con tu información personal. Podemos compartir información con:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Procesadores de pagos (como Patreon o PayPal) para gestionar suscripciones VIP</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Discord, como plataforma que aloja nuestro servidor</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Autoridades competentes cuando sea requerido por ley</li>
                  </ul>
                </div>

                <div className="bg-dark-700 p-6 rounded-lg border border-gray-600">
                  <h2 className="text-xl font-bold mb-4 text-white">4. Seguridad de Datos</h2>
                  <p className="text-gray-300">
                    Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.
                  </p>
                </div>

                <div className="bg-dark-700 p-6 rounded-lg border border-gray-600">
                  <h2 className="text-xl font-bold mb-4 text-white">5. Tus Derechos</h2>
                  <p className="text-gray-300 mb-4">
                    Dependiendo de tu ubicación, puedes tener derechos respecto a tu información personal, incluyendo:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Derecho a acceder a tu información personal</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Derecho a corregir información inexacta</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Derecho a eliminar tu información</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Derecho a restringir el procesamiento de tu información</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Derecho a oponerte al procesamiento</li>
                    <li className="flex items-start"><span className="bg-primary-900 text-primary-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>Derecho a la portabilidad de datos</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Para ejercer estos derechos, contáctanos a través del canal #soporte en nuestro servidor o mediante correo electrónico a contacto@gw2.com.
                  </p>
                </div>

                <div className="bg-dark-700 p-6 rounded-lg border border-gray-600">
                  <h2 className="text-xl font-bold mb-4 text-white">6. Cookies y Tecnologías Similares</h2>
                  <p className="text-gray-300">
                    Nuestro sitio web utiliza cookies y tecnologías similares para mejorar tu experiencia de navegación. Para más información sobre cómo utilizamos estas tecnologías, consulta nuestra <Link href="/cookies" className="text-primary-400 hover:underline">Política de Cookies</Link>.
                  </p>
                </div>

                <div className="bg-dark-700 p-6 rounded-lg border border-gray-600">
                  <h2 className="text-xl font-bold mb-4 text-white">7. Menores de Edad</h2>
                  <p className="text-gray-300">
                    Nuestros servicios están dirigidos a personas mayores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años. Si descubrimos que hemos recopilado información personal de un niño menor de 13 años, tomaremos medidas para eliminar esa información lo antes posible.
                  </p>
                </div>

                <div className="bg-dark-700 p-6 rounded-lg border border-gray-600">
                  <h2 className="text-xl font-bold mb-4 text-white">8. Cambios a esta Política</h2>
                  <p className="text-gray-300">
                    Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en nuestro servidor y/o sitio web. Te recomendamos revisar esta Política periódicamente para mantenerte informado sobre cómo protegemos tu información.
                  </p>
                </div>

                <div className="bg-dark-700 p-6 rounded-lg border border-gray-600">
                  <h2 className="text-xl font-bold mb-4 text-white">9. Contacto</h2>
                  <p className="text-gray-300">
                    Si tienes preguntas o inquietudes sobre esta Política de Privacidad, por favor contáctanos a través del canal #soporte en nuestro servidor de Discord o por correo electrónico a contacto@gw2.com.
                  </p>
                </div>

                <div className="bg-dark-700 p-4 rounded-lg border border-gray-600 text-center">
                  <p className="text-gray-400 text-sm">
                    Última actualización: 15 de abril de 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center bg-dark-800 p-8 rounded-lg border border-gray-700" data-aos="fade-up">
              <p className="text-gray-300 mb-6">
                Al utilizar nuestros servicios, aceptas los términos descritos en esta Política de Privacidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/"
                  variant="default"
                  rounded="default"
                  className="bg-primary-600"
                >
                  Aceptar y Continuar
                </Button>
                <Button 
                  href="/contact"
                  variant="outline"
                  rounded="default"
                  className="border-gray-600 hover:border-primary-500"
                >
                  Contactar al Equipo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection Banner */}
        <section className="py-16 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-dark-700 rounded-xl p-8 border border-gray-600 shadow-xl relative overflow-hidden" data-aos="fade-up">
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-primary-500">
                <FaShieldAlt size={240} />
              </div>
              
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Comprometidos con tu Privacidad
                </h2>
                <p className="text-gray-300 mb-6">
                  En GW2, consideramos la privacidad y seguridad de tus datos como una prioridad absoluta. Nuestro equipo trabaja constantemente para garantizar que tus datos estén protegidos utilizando las mejores prácticas de la industria.
                </p>
                <Button 
                  href="/terms"
                  variant="outline"
                  size="sm"
                  rounded="full"
                  rightIcon={<FaArrowRight />}
                >
                  Ver Términos de Servicio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 
