'use client'

import { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '../components/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function TermsPage() {
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
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-900"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="bg-primary-900/30 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                Legal
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Términos de <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Servicio</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Por favor, lee detenidamente los siguientes términos y condiciones que rigen el uso de nuestros servicios.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-dark-800 rounded-xl p-8 shadow-xl" data-aos="fade-up">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">1. Aceptación de los Términos</h2>
                  <p className="text-gray-300">
                    Al acceder o utilizar el servidor de Discord GW2 ("Servidor"), aceptas estar legalmente vinculado por estos Términos de Servicio. Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestro Servidor.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">2. Cambios en los Términos</h2>
                  <p className="text-gray-300">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el Servidor. El uso continuado del Servidor después de la publicación de cualquier cambio constituye tu aceptación de dichos cambios.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">3. Uso del Servicio</h2>
                  <p className="text-gray-300 mb-4">
                    GW2 es una comunidad de Discord diseñada para fans de gaming. Al utilizar nuestro Servidor, aceptas:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Cumplir con todas las reglas del servidor publicadas en el canal #reglas.</li>
                    <li>No participar en actividades ilegales o prohibidas por las leyes aplicables.</li>
                    <li>No distribuir contenido ofensivo, inapropiado o dañino a otros usuarios.</li>
                    <li>No intentar acceder a áreas restringidas del servidor sin la debida autorización.</li>
                    <li>No utilizar el servidor para promover otros servidores sin permiso expreso del personal.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">4. Contenido del Usuario</h2>
                  <p className="text-gray-300">
                    Al publicar contenido en el Servidor, garantizas que tienes todos los derechos necesarios para dicho contenido y que no infringe los derechos de terceros. Otorgas a GW2 una licencia mundial, no exclusiva y libre de regalías para usar, reproducir y mostrar el contenido en relación con el Servidor.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">5. Membresía VIP</h2>
                  <p className="text-gray-300 mb-4">
                    Ofrecemos diferentes niveles de membresía VIP. Al adquirir una membresía VIP:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Reconoces que los beneficios pueden cambiar con el tiempo.</li>
                    <li>Entiendes que los pagos son procesados por terceros (como Patreon) y están sujetos a sus propios términos y condiciones.</li>
                    <li>Aceptas que las membresías son de renovación automática hasta que decidas cancelarlas.</li>
                    <li>Reconoces que no hay reembolsos por períodos parciales.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">6. Sorteos y Eventos</h2>
                  <p className="text-gray-300">
                    Todos los sorteos y eventos organizados por GW2 son opcionales y se rigen por las reglas específicas detalladas para cada evento. Nos reservamos el derecho de modificar o cancelar cualquier evento en cualquier momento.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">7. Moderación y Suspensiones</h2>
                  <p className="text-gray-300">
                    El equipo de moderación se reserva el derecho de advertir, silenciar, expulsar o banear a cualquier usuario que viole las reglas del servidor. Las decisiones de moderación son finales y se toman a discreción del equipo de moderación.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">8. Limitación de Responsabilidad</h2>
                  <p className="text-gray-300">
                    GW2 no se hace responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de usar nuestro Servidor. No somos responsables de las acciones, contenido, información o datos de terceros.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">9. Terminación</h2>
                  <p className="text-gray-300">
                    Nos reservamos el derecho de terminar o suspender tu acceso al Servidor, sin previo aviso, por cualquier motivo, incluido, sin limitación, el incumplimiento de estos Términos.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">10. Contacto</h2>
                  <p className="text-gray-300">
                    Si tienes alguna pregunta sobre estos Términos de Servicio, por favor contacta al equipo de administración a través del canal #soporte en nuestro servidor de Discord o por correo electrónico a contacto@gw2.com.
                  </p>
                </div>

                <p className="text-gray-400 text-sm mt-8">
                  Última actualización: 15 de abril de 2025
                </p>
              </div>
            </div>

            <div className="mt-12 text-center" data-aos="fade-up">
              <p className="text-gray-300 mb-6">
                Para continuar utilizando nuestros servicios, debes aceptar estos términos y condiciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/"
                  variant="gradient"
                  rounded="full"
                  animation="float"
                >
                  Aceptar y Continuar
                </Button>
                <Button 
                  href="https://discord.gg/gatitos2"
                  external
                  variant="outline"
                  rounded="full"
                  rightIcon={<FaArrowRight />}
                >
                  Ir al Discord
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Documents */}
        <section className="py-16 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Documentos Relacionados
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Consulta también nuestras políticas de privacidad y cookies para entender mejor cómo utilizamos tu información.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div 
                className="bg-dark-700 p-6 rounded-xl hover:bg-dark-600 transition-colors duration-300"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Política de Privacidad</h3>
                <p className="text-gray-300 mb-4">
                  Información sobre cómo recopilamos, usamos y protegemos tus datos personales.
                </p>
                <Link 
                  href="/privacy" 
                  className="text-primary-400 hover:text-primary-300 flex items-center"
                >
                  Leer más <FaArrowRight className="ml-2" />
                </Link>
              </div>
              
              <div 
                className="bg-dark-700 p-6 rounded-xl hover:bg-dark-600 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Política de Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Información sobre cómo utilizamos cookies y tecnologías similares en nuestro sitio web.
                </p>
                <Link 
                  href="/cookies" 
                  className="text-primary-400 hover:text-primary-300 flex items-center"
                >
                  Leer más <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 