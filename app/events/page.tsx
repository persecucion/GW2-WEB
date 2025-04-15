'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaDiscord, FaTwitch, FaFilter, FaSearch, FaEnvelope } from 'react-icons/fa'
import Header from '../Header'
import Footer from '../Footer'
import { Card, CardHeader, CardContent, CardFooter } from '../components/Card'
import { Button } from '../components/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Badge } from '../components/Badge'

interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  location: string
  image: string
  category: 'community' | 'competition' | 'special'
  featured?: boolean
  platform: 'discord' | 'twitch' | 'both'
  registrationOpen: boolean
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [events, setEvents] = useState<Event[]>([])
  
  useEffect(() => {
    // Scroll al inicio de la página cuando se carga
    window.scrollTo(0, 0)
    
    AOS.init({
      duration: 1000,
      once: true,
    })
    
    // Eventos de ejemplo (simulando carga desde un API)
    const sampleEvents: Event[] = [
      {
        id: 1,
        title: "Torneo de PvP",
        date: "28/04/2023",
        time: "18:00 - 21:00",
        description: "Participa en nuestro torneo mensual de PvP con premios exclusivos para los ganadores. Todos los niveles son bienvenidos.",
        location: "Arena de Guild Wars 2",
        image: "/images/evento.png",
        category: "competition",
        featured: true,
        platform: "discord",
        registrationOpen: true
      },
      {
        id: 2,
        title: "Noche de Bingo",
        date: "15/05/2023",
        time: "20:00 - 22:00",
        description: "Únete a nuestra divertida noche de bingo con premios exclusivos y mucha diversión. Todos los miembros pueden participar.",
        location: "Canal general de Discord",
        image: "/images/evento.png",
        category: "community",
        platform: "discord",
        registrationOpen: true
      },
      {
        id: 3,
        title: "Stream especial: Actualizaciones",
        date: "10/05/2023",
        time: "19:00 - 20:30",
        description: "Únete a nuestro stream donde discutiremos las últimas actualizaciones de Guild Wars 2 y sus implicaciones para nuestra comunidad.",
        location: "Canal de Twitch",
        image: "/images/evento.png",
        category: "special",
        platform: "twitch",
        registrationOpen: true
      },
      {
        id: 4,
        title: "Raid comunitaria",
        date: "05/05/2023",
        time: "21:00 - 23:00",
        description: "Avancemos juntos en las raids de Guild Wars 2. Ayuda disponible para nuevos jugadores interesados en contenido de raids.",
        location: "Servidor de Guild Wars 2",
        image: "/images/evento.png",
        category: "community",
        platform: "both",
        registrationOpen: false
      },
      {
        id: 5,
        title: "Evento de lanzamiento de expansión",
        date: "Próximamente",
        time: "Todo el día",
        description: "Celebraremos el lanzamiento de la próxima expansión con eventos especiales, sorteos y más. No te lo pierdas.",
        location: "Discord y Guild Wars 2",
        image: "/images/evento.png",
        category: "special",
        featured: true,
        platform: "both",
        registrationOpen: false
      },
      {
        id: 6,
        title: "Competición de decoración de hogar",
        date: "20/05/2023",
        time: "16:00 - 19:00",
        description: "Muestra tus habilidades de decoración en Guild Wars 2. Los mejores hogares serán premiados con recompensas exclusivas.",
        location: "Discord y Guild Wars 2",
        image: "/images/evento.png",
        category: "competition",
        platform: "discord",
        registrationOpen: true
      }
    ]
    
    setEvents(sampleEvents)
  }, [])
  
  // Filtrar eventos basado en categoría y búsqueda
  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })
  
  // Organizar eventos: primero los destacados
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'community': return 'bg-blue-500 text-white'
      case 'competition': return 'bg-red-500 text-white'
      case 'special': return 'bg-purple-500 text-white'
      default: return 'bg-primary-500 text-white'
    }
  }
  
  const getCategoryName = (category: string) => {
    switch(category) {
      case 'community': return 'Comunitario'
      case 'competition': return 'Competición'
      case 'special': return 'Especial'
      default: return 'Evento'
    }
  }
  
  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case 'discord': return <FaDiscord className="text-white bg-blue-600 p-1 rounded-full" />
      case 'twitch': return <FaTwitch className="text-white bg-purple-600 p-1 rounded-full" />
      case 'both': return (
        <div className="flex gap-2">
          <FaDiscord className="text-white bg-blue-600 p-1 rounded-full" />
          <FaTwitch className="text-white bg-purple-600 p-1 rounded-full" />
        </div>
      )
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-dark-800">
        <div className="absolute inset-0 bg-dark-800"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <span className="bg-primary-900 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
              Eventos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Eventos de la <span className="text-primary-400">Comunidad</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Descubre todos los eventos exclusivos que organizamos para nuestra comunidad.
              ¡Únete y no te pierdas la diversión!
            </p>
          </div>
        </div>
      </section>

      {/* Contenido de eventos */}
      <section className="py-16 bg-dark-900" id="eventos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            {/* Filters */}
            <div className="w-full lg:w-auto mb-6 lg:mb-0">
              <div className="flex items-center space-x-2 overflow-x-auto pb-4">
                <div className="flex items-center bg-dark-800 rounded-lg p-1.5">
                  <FaFilter className="text-gray-300 ml-2" />
                  <span className="text-sm font-medium text-gray-300 mx-2">Filtrar:</span>
                </div>
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    activeCategory === null
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                  }`}
                >
                  Todos
                </button>
                {['community', 'competition', 'special'].map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap ${
                      activeCategory === category
                        ? `bg-${getCategoryColor(category)} text-white`
                        : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                    }`}
                  >
                    {getCategoryName(category)}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="w-full lg:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar eventos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full lg:w-64 py-2 pl-10 pr-4 rounded-lg bg-dark-800 text-white border border-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Featured Events */}
          {sortedEvents.some(event => event.featured) && (
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-8 text-white">Eventos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sortedEvents.filter(event => event.featured).map((event) => (
                  <div key={event.id} className="bg-dark-800 rounded-xl overflow-hidden shadow-lg">
                    <div className="relative h-56 w-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <Badge 
                        variant="solid" 
                        color={getCategoryColor(event.category)} 
                        className="absolute top-4 right-4"
                      >
                        {getCategoryName(event.category)}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <FaCalendarAlt className="text-primary-400 mr-2" />
                          <span className="text-gray-300">{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="text-primary-400 mr-2" />
                          <span className="text-gray-300">{event.time}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      
                      <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-primary-400 mr-2" />
                        <span className="text-gray-300">{event.location}</span>
                      </div>

                      <div className="flex items-center">
                        {getPlatformIcon(event.platform)}
                        <span className="ml-2 text-gray-300">
                          {event.platform === 'discord' ? 'Discord' : 
                           event.platform === 'twitch' ? 'Twitch' : 'En Persona'}
                        </span>
                      </div>
                      
                      <div className="mt-6">
                        <Button 
                          variant={event.registrationOpen ? "gradient" : "outline"} 
                          disabled={!event.registrationOpen}
                          className="w-full justify-center"
                          size="lg"
                        >
                          {event.registrationOpen ? 'Inscribirme' : 'Inscripciones Cerradas'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Events */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-8 text-white">Todos los Eventos</h2>
            {filteredEvents.length === 0 ? (
              <div className="bg-dark-800 rounded-lg p-8 text-center">
                <p className="text-gray-300">No se encontraron eventos que coincidan con tus criterios.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map(event => (
                  <Card key={event.id} className="bg-dark-800 h-full flex flex-col">
                    <CardHeader className="p-0 relative">
                      <div className="relative h-48 w-full">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                        <Badge 
                          variant="solid" 
                          color={getCategoryColor(event.category)}
                          className="absolute top-4 right-4"
                        >
                          {getCategoryName(event.category)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <FaCalendarAlt className="text-primary-400 mr-2" />
                          <span className="text-gray-300 text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="text-primary-400 mr-2" />
                          <span className="text-gray-300 text-sm">{event.time}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">{event.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                      
                      <div className="flex items-start mb-2">
                        <FaMapMarkerAlt className="text-primary-400 mr-2 mt-1" />
                        <span className="text-gray-300 text-sm">{event.location}</span>
                      </div>

                      <div className="flex items-center">
                        {getPlatformIcon(event.platform)}
                        <span className="ml-2 text-gray-300 text-sm">
                          {event.platform === 'discord' ? 'Discord' : 
                           event.platform === 'twitch' ? 'Twitch' : 'En Persona'}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant={event.registrationOpen ? "gradient" : "outline"} 
                        disabled={!event.registrationOpen}
                        className="w-full justify-center"
                        size="sm"
                      >
                        {event.registrationOpen ? 'Inscribirme' : 'Inscripciones Cerradas'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="md:flex md:items-center md:justify-between">
                <div className="mb-8 md:mb-0 md:max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    ¿Quieres proponer un evento comunitario?
                  </h2>
                  <p className="text-gray-300">
                    Contacta con el equipo de moderación para proponer eventos comunitarios. 
                    Estamos buscando constantemente nuevas formas de interactuar con nuestra comunidad.
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <Button 
                    variant="primary"
                    size="lg"
                    className="justify-center"
                    leftIcon={<FaDiscord />}
                  >
                    Contactar vía Discord
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="justify-center"
                    leftIcon={<FaEnvelope />}
                  >
                    Enviar email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 