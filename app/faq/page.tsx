'use client'

import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaDiscord, FaChevronUp, FaChevronDown } from 'react-icons/fa'
import Header from '../Header'
import Footer from '../Footer'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Interfaces para FAQs
interface FAQ {
  id: number
  question: string
  answer: string
  category: string
  isOpen: boolean
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)

    // Initialize AOS
    if (typeof window !== 'undefined') {
      import('aos').then(({ default: AOS }) => {
        AOS.init({
          duration: 1000,
          once: true,
        })
        setIsLoaded(true)
      })
    }

    // Initialize FAQ list
    setFaqs([
      {
        id: 1,
        question: '¿Qué es Gatitos 2?',
        answer: 'Gatitos 2 es un servidor de Guild Wars 2 dedicado a la comunidad hispanohablante. Ofrecemos un espacio amigable para jugadores de todos los niveles, con eventos regulares, guías y una comunidad activa.',
        category: 'general',
        isOpen: false,
      },
      {
        id: 2,
        question: '¿Cómo puedo unirme al servidor?',
        answer: 'Puedes unirte a nuestro servidor a través de Discord. Simplemente haz clic en el enlace de invitación en nuestra página principal y sigue las instrucciones para registrarte. También necesitarás tener instalado Guild Wars 2.',
        category: 'server',
        isOpen: false,
      },
      {
        id: 3,
        question: '¿El servidor es gratuito?',
        answer: 'Sí, unirse a nuestro servidor es completamente gratuito. Ofrecemos membresías VIP con beneficios adicionales, pero la experiencia básica está disponible para todos sin costo alguno.',
        category: 'general',
        isOpen: false,
      },
      {
        id: 4,
        question: '¿Cuáles son los beneficios de ser miembro VIP?',
        answer: 'Los miembros VIP disfrutan de beneficios como acceso prioritario a eventos, roles exclusivos en Discord, canales especiales, soporte prioritario, y más. Puede consultar todos los detalles en nuestra página de membresías VIP.',
        category: 'server',
        isOpen: false,
      },
      {
        id: 5,
        question: '¿Con qué frecuencia organizáis eventos?',
        answer: 'Organizamos eventos semanales, incluyendo mazmorras, fractales, misiones de gremio y actividades sociales. Los eventos grandes como raids y torneos se programan mensualmente. Consulta nuestro calendario en la página de eventos para más detalles.',
        category: 'community',
        isOpen: false,
      },
      {
        id: 6,
        question: '¿Puedo sugerir nuevos eventos o actividades?',
        answer: 'Absolutamente. Valoramos las ideas y sugerencias de nuestra comunidad. Puedes compartir tus ideas en el canal de sugerencias de nuestro Discord o contactar directamente con un administrador.',
        category: 'community',
        isOpen: false,
      },
      {
        id: 7,
        question: '¿Ofrecéis ayuda para jugadores nuevos?',
        answer: 'Sí, contamos con mentores experimentados y canales de ayuda en Discord donde los jugadores nuevos pueden hacer preguntas. También organizamos eventos orientados a principiantes y disponemos de guías detalladas.',
        category: 'general',
        isOpen: false,
      },
      {
        id: 8,
        question: '¿Qué reglas se deben seguir en el servidor?',
        answer: 'Esperamos que todos los miembros sean respetuosos, eviten el lenguaje ofensivo, y se abstengan de hacer spam. Las reglas completas están disponibles en nuestro Discord y en la sección de Términos de Servicio.',
        category: 'server',
        isOpen: false,
      },
      {
        id: 9,
        question: '¿Cómo puedo contactar con un administrador?',
        answer: 'Puedes contactar con nuestros administradores a través de Discord. Simplemente envía un mensaje directo a cualquier usuario con el rol de Administrador o deja un mensaje en el canal de soporte.',
        category: 'server',
        isOpen: false,
      },
      {
        id: 10,
        question: '¿Qué hago si experimento problemas técnicos?',
        answer: 'Si experimentas problemas técnicos, puedes reportarlos en el canal de soporte técnico de nuestro Discord. Asegúrate de incluir detalles sobre el problema, tu sistema y los pasos para reproducirlo.',
        category: 'technical',
        isOpen: false,
      },
      {
        id: 11,
        question: '¿Hay requisitos mínimos para participar en los eventos?',
        answer: 'Los requisitos varían según el evento. Los eventos básicos suelen estar abiertos a todos, mientras que actividades como raids pueden requerir cierto nivel de equipo o experiencia. Cada evento especifica sus requisitos en la descripción.',
        category: 'community',
        isOpen: false,
      },
      {
        id: 12,
        question: '¿Cómo puedo donar al servidor?',
        answer: 'Puedes apoyar económicamente al servidor adquiriendo una membresía VIP a través de Patreon o realizando una donación directa. Todos los fondos se utilizan para mantener y mejorar el servidor y organizar eventos.',
        category: 'general',
        isOpen: false,
      },
    ])
  }, [])

  const toggleFaq = (id: number) => {
    setFaqs(prevFaqs =>
      prevFaqs.map(faq => ({
        ...faq,
        isOpen: faq.id === id ? !faq.isOpen : faq.isOpen,
      }))
    )
  }

  const getCategoryName = (category: string): string => {
    const categories: { [key: string]: string } = {
      general: 'General',
      server: 'Servidor',
      community: 'Comunidad',
      technical: 'Técnico',
    }
    return categories[category] || category
  }

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      general: 'bg-blue-600',
      server: 'bg-purple-600',
      community: 'bg-green-600',
      technical: 'bg-red-600',
    }
    return colors[category] || 'bg-gray-600'
  }

  const filterFaqsByCategory = (category: string | null) => {
    setActiveCategory(category)
    setSearchTerm('')
  }

  const resetFilters = () => {
    setActiveCategory(null)
    setSearchTerm('')
  }

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory ? faq.category === activeCategory : true
    const matchesSearch = searchTerm
      ? faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

  const uniqueCategories = Array.from(new Set(faqs.map(faq => faq.category)))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900">
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 pt-8">
            <div className="mb-12 text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Preguntas Frecuentes</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Encuentra respuestas a las preguntas más comunes sobre nuestro servidor y comunidad
              </p>
            </div>

            {/* Search and filters */}
            <div className="mb-12 max-w-3xl mx-auto" data-aos="fade-up">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AiOutlineSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Buscar por palabra clave..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {uniqueCategories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category
                          ? `${getCategoryColor(category)} text-white`
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      onClick={() => filterFaqsByCategory(category)}
                    >
                      {getCategoryName(category)}
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ List */}
              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq) => (
                    <Card key={faq.id} className="bg-gray-800 hover:bg-gray-800/90 border border-gray-700">
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center"
                        onClick={() => toggleFaq(faq.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <span
                            className={`inline-block w-3 h-3 rounded-full ${getCategoryColor(
                              faq.category
                            )}`}
                          />
                          <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                        </div>
                        {faq.isOpen ? (
                          <FaChevronUp className="text-gray-400" />
                        ) : (
                          <FaChevronDown className="text-gray-400" />
                        )}
                      </button>
                      {faq.isOpen && (
                        <div className="px-6 pb-4 pt-2">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-800 rounded-lg" data-aos="fade-up">
                  <p className="text-gray-300 mb-4">No se encontraron preguntas que coincidan con tu búsqueda.</p>
                  <Button
                    onClick={resetFilters}
                    variant="secondary"
                    size="sm"
                    rounded="default"
                  >
                    Restablecer filtros
                  </Button>
                </div>
              )}
            </div>

            {/* Still have questions */}
            <div className="mt-24 text-center bg-gray-900 py-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 text-white">¿Aún tienes preguntas?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                No dudes en contactar con nosotros directamente. Nuestro equipo está siempre disponible para ayudarte con cualquier consulta.
              </p>
              <Button
                href="https://discord.gg/gatitos2"
                external
                variant="gradient"
                size="lg"
                rounded="full"
                animation="float"
                leftIcon={<FaDiscord className="text-xl" />}
              >
                Pregúntanos en Discord
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
