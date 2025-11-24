"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDiscord,
  FaTwitch,
  FaFilter,
  FaSearch,
  FaEnvelope,
  FaUsers,
  FaGamepad,
  FaChevronDown,
  FaTrophy,
  FaGift,
  FaStar,
  FaArrowRight,
  FaLock,
  FaCalendarTimes
} from "react-icons/fa"
import Header from "../Header"
import Footer from "../Footer"
import { Card, CardHeader, CardContent, CardFooter } from "../components/Card"
import { Button } from "../components/Button"
import AOS from "aos"
import "aos/dist/aos.css"

interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  location: string
  image: string
  category: "community" | "competition" | "special"
  featured?: boolean
  platform: "discord" | "twitch" | "both" | "discord-twitch"
  registrationOpen: boolean
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0)

    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })

    // Sample events data
    const sampleEvents: Event[] = [
      {
        id: 1,
        title: "Torneo GvG mensual",
        date: "25 Jun 2023",
        time: "19:00 CEST",
        description: "¡Enfrenta a tu guild contra las mejores de toda la comunidad hispana! Premios para los tres primeros puestos incluyendo oro, gemas y más.",
        location: "Discord",
        category: "competition",
        platform: "discord",
        registrationOpen: true,
        featured: true,
        image: "/images/event-gvg.jpg"
      },
      {
        id: 2,
        title: "Noche de minijuegos comunitarios",
        date: "18 Jun 2023",
        time: "21:00 CEST",
        description: "Una noche divertida llena de minijuegos en Guild Wars 2. Participa en carreras, acertijos, competiciones de salto y mucho más.",
        location: "Discord",
        category: "community",
        platform: "discord",
        registrationOpen: true,
        featured: false,
        image: "/images/event-minigames.jpg"
      },
      {
        id: 3,
        title: "Festival de decoración de guildas",
        date: "2 Jul 2023",
        time: "20:00 CEST",
        description: "Muestra tus habilidades de decoración en este festival comunitario. Las mejores guildas recibirán reconocimiento y premios especiales.",
        location: "Discord",
        category: "community",
        platform: "discord",
        registrationOpen: true,
        featured: false,
        image: "/images/event-decoration.jpg"
      },
      {
        id: 4,
        title: "Raid Training para principiantes",
        date: "12 Jun 2023",
        time: "18:30 CEST",
        description: "Aprende los fundamentos de los raids con instructores experimentados. Sesión ideal para jugadores que quieren iniciarse en el contenido endgame.",
        location: "Discord",
        category: "community",
        platform: "discord",
        registrationOpen: false,
        featured: false,
        image: "/images/event-raids.jpg"
      },
      {
        id: 5,
        title: "Evento especial: 5º Aniversario",
        date: "30 Jun 2023",
        time: "20:00 CEST",
        description: "Celebramos el 5º aniversario del servidor de Discord con una noche llena de actividades, sorteos y premios especiales para todos los asistentes.",
        location: "Discord",
        category: "special",
        platform: "discord",
        registrationOpen: true,
        featured: true,
        image: "/images/event-anniversary.jpg"
      },
      {
        id: 6,
        title: "Q&A con desarrolladores",
        date: "21 Jun 2023",
        time: "19:00 CEST",
        description: "Sesión de preguntas y respuestas con desarrolladores de ArenaNet. Oportunidad única para conocer detalles sobre el futuro del juego.",
        location: "Discord",
        category: "special",
        platform: "discord",
        registrationOpen: true,
        featured: false,
        image: "/images/event-qa.jpg"
      },
      {
        id: 7,
        title: "Torneo PvP 2v2",
        date: "15 Jul 2023",
        time: "17:00 CEST",
        description: "Demuestra tu habilidad en combate en este torneo de PvP en formato 2v2. Habrá premios para los equipos ganadores.",
        location: "Discord",
        category: "competition",
        platform: "discord",
        registrationOpen: true,
        featured: false,
        image: "/images/event-pvp.jpg"
      },
      {
        id: 8,
        title: "Fashion Wars: Edición Verano",
        date: "8 Jul 2023",
        time: "21:30 CEST",
        description: "Concurso de moda con temática veraniega. Crea tu mejor look y compite por premios y el reconocimiento de la comunidad.",
        location: "Discord",
        category: "community",
        platform: "discord",
        registrationOpen: true,
        featured: true,
        image: "/images/event-fashion.jpg"
      }
    ]

    setEvents(sampleEvents)
  }, [])

  // Filter and sort events
  const filteredEvents = events.filter((event) => {
    const matchesCategory = activeCategory === "all" || event.category === activeCategory
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredEvents = filteredEvents.filter(event => event.featured)

  const sortedEvents = filteredEvents
    .filter(event => !event.featured) // Remove featured events since they'll be displayed separately
    .sort((a, b) => {
      // Convert date strings to Date objects for proper comparison
      const dateA = new Date(a.date.split(' ').reverse().join(' ')).getTime()
      const dateB = new Date(b.date.split(' ').reverse().join(' ')).getTime()
      return dateA - dateB
    })

  // Helper functions for styling and UI
  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'community':
        return 'from-blue-600 to-blue-800';
      case 'competition':
        return 'from-red-600 to-rose-800';
      case 'special':
        return 'from-purple-600 to-indigo-800';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  const getCategoryBgColor = (category: string): string => {
    switch (category) {
      case 'community':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
      case 'competition':
        return 'bg-red-500/10 border-red-500/30 text-red-400';
      case 'special':
        return 'bg-purple-500/10 border-purple-500/30 text-purple-400';
      default:
        return 'bg-gray-500/10 border-gray-500/30 text-gray-400';
    }
  };

  const getCategoryName = (category: string): string => {
    switch (category) {
      case 'community': return 'Comunidad';
      case 'competition': return 'Competitivo';
      case 'special': return 'Especial';
      default: return 'Otro';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'discord': return <FaDiscord className="text-indigo-400" />;
      case 'twitch': return <FaTwitch className="text-purple-400" />;
      case 'discord-twitch':
      case 'both':
        return (
          <div className="flex">
            <FaDiscord className="text-indigo-400" />
            <FaTwitch className="text-purple-400 ml-1" />
          </div>
        );
      default: return <FaDiscord className="text-indigo-400" />;
    }
  };

  // Function to get platform name
  const getPlatformName = (platform: string): string => {
    switch (platform) {
      case 'discord': return 'Discord';
      case 'twitch': return 'Twitch';
      case 'discord-twitch':
      case 'both': return 'Discord y Twitch';
      default: return 'Discord';
    }
  };

  // Create a custom badge component that uses the Badge component internally
  const CategoryBadge = ({ category }: { category: string }) => {
    const colorClasses = getCategoryColor(category)
    return (
      <div className={`absolute top-4 right-4 px-2 py-1 rounded-md ${colorClasses}`}>{getCategoryName(category)}</div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Modernized */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-blue-900/10 via-gray-900 to-purple-900/10"></div>

          {/* Particle effect overlay */}
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>

          {/* Decorative orbs */}
          <div className="absolute top-1/4 right-1/5 w-64 h-64 rounded-full bg-primary-900/20 blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-1/5 w-96 h-96 rounded-full bg-purple-900/20 blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="inline-block mb-4">
              <div className="px-4 py-1.5 bg-gradient-to-r from-primary-900/60 to-purple-900/60 backdrop-blur-md rounded-full border border-blue-500/20 text-blue-300 text-sm font-medium">
                <span className="text-xs mr-2">🎮</span> EVENTOS DE LA COMUNIDAD
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Próximos </span>
              <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Eventos</span>
            </h1>

            <p className="text-lg text-blue-100/80 mb-10 max-w-4xl mx-auto">
              Descubre todos los eventos exclusivos que organizamos para nuestra comunidad de Discord.
              ¡Participa y disfruta de momentos únicos con nosotros!
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                href="#eventos"
                variant="gradient"
                rounded="default"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-500/30 shadow-lg text-white"
              >
                Ver Eventos
              </Button>

              <Button
                href="https://discord.gg/gw2"
                external
                variant="outline"
                rounded="default"
                size="lg"
                rightIcon={<FaDiscord />}
                className="bg-dark-800/50 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/40 shadow-lg text-white"
              >
                Unirse al Discord
              </Button>
            </div>
          </div>

          {/* Featured event cards floating */}
          <div className="w-full mt-16 relative max-w-6xl" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute -inset-10 bg-blue-500/5 blur-3xl rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Eventos Comunitarios",
                  icon: <FaUsers className="text-3xl text-blue-400" />,
                  description: "Actividades para toda la comunidad con diversión garantizada",
                  color: "from-blue-500/10 to-blue-600/5",
                  border: "border-blue-500/20",
                  delay: 100
                },
                {
                  title: "Torneos y Competiciones",
                  icon: <FaTrophy className="text-3xl text-orange-400" />,
                  description: "Compite y demuestra tus habilidades para ganar premios exclusivos",
                  color: "from-orange-500/10 to-red-600/5",
                  border: "border-orange-500/20",
                  delay: 200
                },
                {
                  title: "Sorteos y Premios",
                  icon: <FaGift className="text-3xl text-purple-400" />,
                  description: "Participa en nuestros sorteos regulares y gana increíbles premios",
                  color: "from-purple-500/10 to-purple-600/5",
                  border: "border-purple-500/20",
                  delay: 300
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-xl p-6 border ${item.border} shadow-lg`}
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-dark-800/80 backdrop-blur-md flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#eventos" className="text-white/50 hover:text-white transition-colors">
            <FaChevronDown className="text-2xl" />
          </a>
        </div>
      </section>

      {/* Contenido de eventos - Rediseñado */}
      <section className="relative py-24 bg-gradient-to-b from-gray-950 to-black" id="eventos">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-96 h-96 -top-24 -right-24 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 -bottom-24 -left-24 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>

          {/* Decorative orbs */}
          <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-blue-900/10 blur-[100px]"></div>
          <div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-purple-900/10 blur-[100px]"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-14" data-aos="fade-up">
            <div className="inline-block rounded-full bg-gradient-to-r from-primary-900/40 to-violet-900/40 backdrop-blur-sm px-4 py-1.5 border border-primary-500/20 mb-4">
              <span className="text-primary-400 text-sm font-medium">CALENDARIO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Encuentra el evento </span>
              <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">perfecto para ti</span>
            </h2>
            <p className="text-lg text-blue-100/80 max-w-3xl mx-auto">
              Utiliza los filtros para encontrar eventos que se ajusten a tus intereses
            </p>
          </div>

          {/* Filters and Search - Modernized */}
          <div className="mb-12 bg-gradient-to-r from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl p-6 border border-primary-500/10 shadow-lg" data-aos="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Category Filters */}
              <div className="w-full md:w-auto">
                <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
                  <div className="px-3 py-1.5 bg-gray-900/60 backdrop-blur-sm rounded-lg flex items-center gap-2">
                    <FaFilter className="text-primary-400 text-sm" />
                    <span className="text-sm font-medium text-gray-300">Filtrar:</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveCategory("all")}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeCategory === "all"
                          ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md shadow-primary-500/20"
                          : "bg-gray-900/60 text-gray-300 hover:bg-gray-800/80"
                        }`}
                    >
                      Todos
                    </button>

                    {["community", "competition", "special"].map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeCategory === category
                            ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-md`
                            : "bg-gray-900/60 text-gray-300 hover:bg-gray-800/80"
                          }`}
                      >
                        {getCategoryName(category)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="w-full md:w-64">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar eventos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-900/60 backdrop-blur-sm text-white border border-primary-500/20 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all duration-300"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <div className="mb-16" data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">Eventos Destacados</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-primary-500/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    data-aos="fade-up"
                  >
                    {/* Glass layer with shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-violet-500/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-transparent"></div>

                        {/* Category Badge */}
                        <div className={`absolute top-4 right-4 bg-gradient-to-r ${getCategoryColor(event.category)} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-white/10 backdrop-blur-sm`}>
                          {getCategoryName(event.category)}
                        </div>

                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-yellow-400/30 backdrop-blur-sm flex items-center gap-1">
                          <FaStar className="text-white" />
                          <span>Destacado</span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-white bg-gray-900/60 backdrop-blur-sm p-2 rounded-lg border border-white/10 inline-block shadow-lg">
                            <FaCalendarAlt className="text-primary-400" />
                            <span>{event.date}</span>
                            <span className="mx-2 text-primary-400/50">•</span>
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 relative">
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-primary-300 transition-colors duration-300">{event.title}</h3>
                        <p className="text-gray-300 mb-6">{event.description}</p>

                        <div className="flex items-center justify-center mb-6">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                              {getPlatformIcon(event.platform)}
                            </div>
                            <span className="text-gray-300">
                              {getPlatformName(event.platform)}
                            </span>
                          </div>
                        </div>

                        <Button
                          href="#"
                          variant={event.registrationOpen ? "gradient" : "outline"}
                          disabled={!event.registrationOpen}
                          rounded="default"
                          className={`relative z-10 w-full justify-center ${event.registrationOpen
                              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-md'
                              : 'bg-gray-900/50 border-gray-600/50 backdrop-blur-sm'
                            }`}
                        >
                          {event.registrationOpen ? "Inscribirme" : "Inscripciones Cerradas"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Events - Modern Grid */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <FaCalendarAlt className="text-primary-400" />
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Todos los Eventos</span>
            </h3>

            {filteredEvents.length === 0 ? (
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl p-8 text-center border border-primary-500/20 shadow-lg">
                <FaCalendarTimes className="text-6xl text-gray-600 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-300 mb-2">No se encontraron eventos</p>
                <p className="text-gray-400 mb-5">No hay eventos que coincidan con tu búsqueda. Intenta cambiar los filtros.</p>
                <Button
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchTerm("")
                  }}
                  variant="gradient"
                  className="mt-4 bg-gradient-to-r from-primary-600 to-violet-600 border border-primary-500/20"
                  size="sm"
                >
                  Mostrar todos los eventos
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full"
                    data-aos="fade-up"
                  >
                    <div className="relative">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-transparent"></div>

                        {/* Category Badge */}
                        <div className={`absolute top-4 right-4 bg-gradient-to-r ${getCategoryColor(event.category)} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-white/10 backdrop-blur-sm`}>
                          {getCategoryName(event.category)}
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-white bg-gray-900/60 backdrop-blur-sm p-2 rounded-lg border border-white/10 inline-block shadow-lg">
                            <FaCalendarAlt className="text-primary-400" />
                            <span>{event.date}</span>
                            <span className="mx-2 text-primary-400/50">•</span>
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold mb-3 text-white group-hover:text-primary-300 transition-colors duration-300">{event.title}</h3>
                      <p className="text-gray-300 text-sm mb-5 flex-grow">{event.description}</p>

                      <div className="flex justify-center mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center">
                            {getPlatformIcon(event.platform)}
                          </div>
                          <span className="text-gray-300 text-xs">
                            {getPlatformName(event.platform)}
                          </span>
                        </div>
                      </div>

                      <Button
                        href="#"
                        variant={event.registrationOpen ? "gradient" : "outline"}
                        disabled={!event.registrationOpen}
                        rounded="default"
                        size="sm"
                        className={`relative z-10 w-full justify-center ${event.registrationOpen
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-sm'
                            : 'bg-gray-900/50 border-gray-600/50 backdrop-blur-sm'
                          }`}
                      >
                        {event.registrationOpen ? "Inscribirme" : "Inscripciones Cerradas"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Modernized */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>

        {/* Decorative orbs */}
        <div className="absolute top-1/3 right-20 w-64 h-64 rounded-full bg-blue-900/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-20 w-64 h-64 rounded-full bg-purple-900/10 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-primary-500/20" data-aos="fade-up">
            <div className="p-8 md:p-12">
              <div className="md:flex md:items-center md:justify-between gap-12">
                <div className="mb-8 md:mb-0 md:max-w-2xl">
                  <div className="inline-block mb-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-primary-900/60 to-purple-900/60 backdrop-blur-sm rounded-full border border-primary-500/20 text-primary-400 text-xs font-medium">
                      <span className="text-xs mr-1">💡</span> PROPUESTAS
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">¿Quieres proponer un </span>
                    <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">evento comunitario</span>
                    <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">?</span>
                  </h2>

                  <p className="text-gray-300">
                    Contacta con el equipo de moderación para proponer eventos comunitarios. Estamos buscando constantemente nuevas formas de interactuar con nuestra comunidad.
                  </p>
                </div>

                <div className="flex flex-col space-y-4">
                  <Button
                    href="https://discord.gg/gw2"
                    external
                    variant="gradient"
                    size="lg"
                    className="justify-center bg-gradient-to-r from-blue-600 to-blue-800 border border-blue-500/20 hover:bg-blue-700"
                    leftIcon={<FaDiscord className="text-xl mr-2" />}
                  >
                    Contactar vía Discord
                  </Button>

                  <Button
                    href="mailto:contacto@gw2.gg"
                    variant="outline"
                    size="lg"
                    className="justify-center border-primary-500/20 hover:border-primary-500/40 bg-dark-900/60"
                    leftIcon={<FaEnvelope className="text-xl mr-2" />}
                  >
                    Enviar email
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter or Additional CTA */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4 text-white">No te pierdas ningún evento</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Únete a nuestro servidor de Discord para recibir notificaciones sobre próximos eventos y actividades exclusivas
            </p>
            <Button
              href="https://discord.gg/gw2"
              external
              variant="gradient"
              rounded="full"
              className="bg-gradient-to-r from-primary-600 to-violet-600 border border-primary-500/20 px-8 hover:shadow-lg hover:shadow-primary-500/20"
              rightIcon={<FaArrowRight />}
            >
              Unirse al Discord
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Global Animation Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>
    </div>
  )
}
