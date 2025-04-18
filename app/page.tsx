"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import {
  FaDiscord,
  FaArrowRight,
  FaUsers,
  FaUserShield,
  FaComments,
  FaStar,
  FaHeart,
  FaGamepad,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
  FaGift,
  FaTrophy,
  FaCrown,
  FaCalendarAlt,
  FaCheck,
  FaPatreon,
  FaQuoteRight,
} from "react-icons/fa"
import CountUp from "react-countup"
import dynamic from 'next/dynamic'
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { VIPBenefits } from "./VIPBenefits"
import { Card, CardContent, CardFooter, CardHeader } from "./components/Card"
import { Button } from "./components/Button"
import { Badge } from "./components/Badge"
import Header from "./Header"
import Footer from "./Footer"

// Importar Snowfall dinámicamente para evitar problemas de hidratación
const Snowfall = dynamic(() => import('react-snowfall'), { 
  ssr: false 
})

// Importación para el iframe del chat - comentado temporalmente hasta crear el componente
// const WidgetBotChat = dynamic(() => import('./components/WidgetBotChat'), {
//   ssr: false
// })

const reviews = [
  {
    id: 1,
    name: "Mystic",
    photo: "/Mystic.jpg",
    text: "Gané nitro en él, recomendado. La comunidad es super amigable y siempre hay eventos divertidos. Sin duda uno de los mejores servidores en los que he estado.",
    rating: 5,
    memberSince: "3 meses",
  },
  {
    id: 2,
    name: "Alex",
    photo: "/images/vip1.png",
    text: "Los canales VIP son increíbles, el contenido exclusivo vale totalmente la pena. Recomiendo a cualquiera que quiera tener una experiencia premium.",
    rating: 4,
    memberSince: "1 año",
  },
  {
    id: 3,
    name: "Sara",
    photo: "/images/vip2.png",
    text: "El ambiente del servidor es excelente. Los moderadores siempre están atentos y la comunidad es muy respetuosa. Me encanta pasar tiempo aquí.",
    rating: 5,
    memberSince: "6 meses",
  },
]

// Datos para la sección de eventos
const upcomingEvents = [
  {
    id: 1,
    title: 'Torneo de Verano',
    date: '25 de junio, 2025',
    time: '18:00 CET',
    description: 'Participa en nuestro gran torneo de verano con increíbles premios y diversión garantizada.',
    category: 'Torneo',
    image: '/images/evento.png',
    featured: true,
  },
  {
    id: 2,
    title: 'Sorteo Mensual',
    date: '1 de julio, 2025',
    time: '20:00 CET',
    description: 'Nuestro sorteo mensual de Nitro entre todos los miembros activos de la comunidad.',
    category: 'Sorteo',
    image: '/images/sorteo.png',
  },
]

// Datos para la sección de VIP
const patreonTiers = [
  {
    name: "Gold",
    price: "3.99",
    features: [
      "Rango único en el servidor",
      "Permisos de imagen en general",
      "Acceso a canales exclusivos",
      "Participación prioritaria en sorteos",
    ],
    style: "border-yellow-500/20 bg-gradient-to-b from-yellow-950/80 to-dark-900/95",
    nameStyle: "text-yellow-400",
    buttonStyle: "bg-yellow-950 hover:bg-yellow-900 text-yellow-400",
    image: "/images/vip1.png",
  },
  {
    name: "Diamond",
    price: "5.99",
    features: [
      "Todas las ventajas de Gold",
      "Soundboard habilitado",
      "Inmunidad al slowmode",
      "Rol personalizado"
    ],
    style: "border-blue-500/20 bg-gradient-to-b from-blue-950/80 to-dark-900/95",
    nameStyle: "text-blue-400",
    buttonStyle: "bg-blue-950 hover:bg-blue-900 text-blue-400",
    image: "/images/vip2.png",
    popular: true,
  },
]

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const statsRef = useRef<HTMLElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  const members = 1000
  const staff = 20
  const messages = 50000
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      })

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
        
        // Comprobar si la sección de estadísticas está visible
        if (statsRef.current) {
          const rect = statsRef.current.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
          setStatsVisible(isVisible)
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 text-white overflow-x-hidden">
      <Header />

      {/* Efectos visuales */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Snowfall
          snowflakeCount={100}
          radius={[0.5, 2.0]}
          speed={[0.5, 2.0]}
          wind={[-0.5, 1.0]}
          color="rgba(255, 255, 255, 0.3)"
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-secondary-900/10 to-primary-900/10"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Fondo con color sólido y degradado visible */}
        <div className="absolute inset-0 bg-dark-800"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-dark-900 to-secondary-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-600/30 rounded-full mix-blend-multiply filter blur-[80px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-600/30 rounded-full mix-blend-multiply filter blur-[80px]"></div>
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-[80px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24">
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
              Bienvenido a GW2
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
              Descubre una comunidad única donde cada momento se convierte en una experiencia inolvidable.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
            <Button 
              href="https://discord.gg/gatitos2"
              external
              variant="gradient"
              size="lg"
              rounded="full"
              leftIcon={<FaDiscord />}
              rightIcon={<FaArrowRight />}
              className="bg-gradient-to-r from-primary-600 to-primary-700 border border-primary-500"
            >
              Únete a la Aventura
            </Button>
            
            <Button 
              href="#features"
              variant="outline"
              size="lg"
              rounded="full"
              className="bg-dark-700 border-gray-600"
            >
              Descubre más
            </Button>
          </div>
          
          <div className="mt-20 flex justify-center" data-aos="fade-up" data-aos-delay="300">
            <Link href="#features" className="text-white hover:text-primary-300 transition-colors">
              <div className="h-14 w-14 rounded-full bg-dark-800 border border-gray-700 hover:border-primary-500 transition-all duration-300 flex items-center justify-center">
                <FaChevronDown className="h-6 w-6 animate-bounce" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section id="features" className="py-24 bg-gradient-to-br from-dark-800 to-dark-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-dark-900 to-secondary-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 shadow-md">
              SOBRE NOSOTROS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Qué nos hace <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">especiales</span>?
            </h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto">
              Somos más que un servidor de Discord - somos una familia global unida por la pasión por los videojuegos y
              la amistad sincera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Eventos en Vivo",
                description: "Participa en eventos exclusivos y transmisiones en vivo con nuestra comunidad.",
                image: "/images/evento.png",
                icon: <FaGamepad className="text-4xl text-primary-300" />,
                delay: 100,
                bgColor: "bg-gradient-to-b from-primary-900/20 via-dark-800 to-dark-800",
                borderColor: "border-primary-500/20"
              },
              {
                title: "Sorteos Exclusivos",
                description: "Accede a sorteos y contenido exclusivo creado especialmente para ti.",
                image: "/images/sorteo.png",
                icon: <FaGift className="text-4xl text-secondary-300" />,
                delay: 200,
                bgColor: "bg-gradient-to-b from-secondary-900/20 via-dark-800 to-dark-800",
                borderColor: "border-secondary-500/20"
              },
              {
                title: "Comunidad Global",
                description: "Conecta con personas de todo el mundo que comparten tus mismas pasiones.",
                image: "/images/server.png",
                icon: <FaUsers className="text-4xl text-purple-300" />,
                delay: 300,
                bgColor: "bg-gradient-to-b from-purple-900/20 via-dark-800 to-dark-800",
                borderColor: "border-purple-500/20"
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className={`${feature.bgColor} rounded-xl overflow-hidden shadow-xl border ${feature.borderColor} transform transition-all duration-300 hover:-translate-y-2`}
                data-aos="fade-up"
                data-aos-delay={feature.delay}
              >
                <div className="relative h-48 bg-dark-900">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-dark-800/90 backdrop-blur-sm rounded-full border border-white/10">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <section 
        ref={statsRef} 
        className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 relative"
      >
        <div className="absolute inset-0 bg-dark-800"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 shadow-md">
              ESTADÍSTICAS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nuestra Comunidad <span className="bg-gradient-to-r from-secondary-300 to-primary-300 bg-clip-text text-transparent">en Números</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto">
              Somos una comunidad en constante crecimiento, unida por la pasión y el compromiso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl text-primary-300" />,
                count: members,
                label: "Miembros",
                suffix: "+",
                delay: 100,
                bgGradient: "bg-primary-900/90",
                borderColor: "border-primary-500",
                iconBg: "bg-dark-800",
                textColor: "text-white"
              },
              {
                icon: <FaUserShield className="text-4xl text-secondary-300" />,
                count: staff,
                label: "Staff",
                suffix: "+",
                delay: 200,
                bgGradient: "bg-secondary-900/90",
                borderColor: "border-secondary-500",
                iconBg: "bg-dark-800",
                textColor: "text-white"
              },
              {
                icon: <FaComments className="text-4xl text-purple-300" />,
                count: messages,
                label: "Mensajes Diarios",
                suffix: "+",
                delay: 300,
                bgGradient: "bg-purple-900/90",
                borderColor: "border-purple-500",
                iconBg: "bg-dark-800",
                textColor: "text-white"
              },
            ].map((stat, index) => (
              <div 
                key={index}
                className={`${stat.bgGradient} rounded-xl p-8 text-center border ${stat.borderColor} shadow-xl transform transition-all duration-300 hover:-translate-y-2`}
                data-aos="fade-up"
                data-aos-delay={stat.delay}
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 ${stat.iconBg} rounded-full border border-gray-700`}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-4xl font-bold ${stat.textColor} mb-2`}>
                  {statsVisible && (
                    <CountUp
                      end={stat.count}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Eventos */}
      <section className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-dark-900 to-secondary-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 shadow-md">
              EVENTOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Próximos <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">Eventos</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto">
              No te pierdas nuestros eventos exclusivos y diviértete con toda la comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`bg-gradient-to-b from-dark-800 to-dark-900 rounded-xl overflow-hidden shadow-xl border border-${event.featured ? 'primary' : 'gray'}-500/20 ${event.featured ? 'ring-2 ring-primary-500/50' : ''} transform transition-all duration-300 hover:-translate-y-2`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 bg-dark-900">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                  
                  {event.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-lg">
                      Destacado
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-white bg-dark-900/80 backdrop-blur-sm p-2 rounded-lg border border-gray-700 inline-block">
                      <FaCalendarAlt className="text-primary-300" />
                      <span>{event.date}</span>
                      <span className="mx-2">•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  
                  <Button 
                    href="/events"
                    variant={event.featured ? 'gradient' : 'outline'}
                    rounded="lg"
                    className={`w-full ${!event.featured ? 'bg-dark-900 border-gray-700 hover:border-primary-500/50' : 'bg-gradient-to-r from-primary-600 to-primary-700 border border-primary-500'}`}
                  >
                    Más información
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Button 
              href="/events"
              variant="outline"
              rounded="full"
              rightIcon={<FaArrowRight />}
              className="bg-dark-800 border-gray-600 hover:border-primary-500/50 transition-all duration-300"
            >
              Ver todos los eventos
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Patreon */}
      <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 relative">
        <div className="absolute inset-0 bg-dark-800"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 shadow-md">
              PATREON
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Apoya Nuestra <span className="bg-gradient-to-r from-purple-300 to-primary-300 bg-clip-text text-transparent">Comunidad</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto">
              Conviértete en un VIP y desbloquea acceso a características exclusivas que harán que tu experiencia sea única.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'gold',
                name: 'Gold',
                price: '3.99',
                image: '/images/vip1.png',
                color: 'text-yellow-400',
                gradient: 'from-yellow-900/90 to-dark-900',
                borderColor: 'border-yellow-500',
                buttonColor: 'bg-yellow-900 border-yellow-500',
                features: [
                  'Rango exclusivo Gold',
                  'Permisos de imagen en general',
                  'Acceso a canales exclusivos',
                  'Participación prioritaria en sorteos'
                ]
              },
              {
                id: 'diamond',
                name: 'Diamond',
                price: '5.99',
                popular: true,
                image: '/images/vip2.png',
                color: 'text-blue-400',
                gradient: 'from-blue-900/90 to-dark-900',
                borderColor: 'border-blue-500',
                buttonColor: 'bg-blue-900 border-blue-500',
                features: [
                  'Todas las ventajas de Gold',
                  'Soundboard habilitado',
                  'Inmunidad al slowmode',
                  'Rol personalizado'
                ]
              },
              {
                id: 'platinum',
                name: 'Platinum',
                price: '9.99',
                image: '/images/vip3.png',
                color: 'text-purple-400',
                gradient: 'from-purple-900/90 to-dark-900',
                borderColor: 'border-purple-500',
                buttonColor: 'bg-purple-900 border-purple-500',
                features: [
                  'Todas las ventajas de Diamond',
                  'Canal privado exclusivo',
                  'Canales de voz exclusivos',
                  'Soporte prioritario'
                ]
              }
            ].map((tier, index) => (
              <div 
                key={tier.id}
                className={`
                  rounded-xl border bg-gradient-to-b ${tier.gradient} shadow-xl
                  ${tier.popular 
                    ? `${tier.borderColor} transform scale-105 relative z-10` 
                    : `border-gray-700`}
                  transition-all duration-300 hover:transform hover:translate-y-[-8px]
                `}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 text-center">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      POPULAR
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="relative w-full h-40 rounded-lg mb-6 overflow-hidden">
                    <Image 
                      src={tier.image} 
                      alt={tier.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-dark-900 opacity-40"></div>
                  </div>
                  
                  <h3 className={`text-xl font-bold ${tier.color} mb-2`}>{tier.name}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-bold text-white">{tier.price}€</span>
                    <span className="text-gray-300 mb-1">/mes</span>
                  </div>
                  
                  <div className="border-t border-b border-gray-700 py-6 my-6">
                    <ul className="space-y-4">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="text-green-400 mt-1 flex-shrink-0">
                            <FaCheck />
                          </div>
                          <span className="text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    href="/patreon"
                    variant={tier.popular ? 'gradient' : 'outline'}
                    rounded="lg"
                    className={`w-full font-medium shadow-lg ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 border-none text-white' 
                        : tier.id === 'gold' 
                          ? 'bg-yellow-800 text-white border-yellow-600 hover:bg-yellow-700' 
                          : tier.id === 'platinum' 
                            ? 'bg-purple-800 text-white border-purple-600 hover:bg-purple-700'
                            : `${tier.buttonColor} hover:border-${tier.color.split('-')[1]}-500/50`
                    }`}
                  >
                    Elegir Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-dark-800 rounded-xl border border-gray-700 p-6 md:p-8 mt-16 shadow-xl" data-aos="fade-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">¿Tienes alguna pregunta sobre nuestros planes?</h3>
                <p className="text-gray-300">Visita nuestra sección de preguntas frecuentes o contáctanos directamente.</p>
              </div>
              <div className="flex gap-4">
                <Button 
                  href="/faq"
                  variant="outline"
                  className="bg-dark-800 border-gray-500 text-white hover:bg-dark-700 hover:border-gray-400 whitespace-nowrap font-medium shadow-lg"
                >
                  Ver FAQ
                </Button>
                <Button 
                  href="/contact"
                  variant="gradient"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-none font-medium shadow-lg whitespace-nowrap"
                >
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-dark-900 to-secondary-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 shadow-md">
              TESTIMONIOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Lo Que Dice <span className="bg-gradient-to-r from-secondary-300 to-primary-300 bg-clip-text text-transparent">Nuestra Comunidad</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto">
              Estas son algunas experiencias de usuarios que forman parte de nuestra comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={review.id}
                className="bg-gradient-to-b from-dark-800 to-dark-900 rounded-xl p-8 border border-gray-700 shadow-xl transition-all duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-gray-400 text-sm">{review.memberSince}</p>
                    </div>
                  </div>
                  <div className="text-secondary-500 text-2xl">
                    <FaQuoteRight />
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex mb-2">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className={`text-${i < review.rating ? 'yellow' : 'gray'}-400`}>
                        <FaStar />
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300">{review.text}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Button 
              href="/reviews"
              variant="outline"
              rounded="full"
              rightIcon={<FaArrowRight />}
              className="bg-dark-800 border-gray-600 hover:border-secondary-500/50 transition-all duration-300"
            >
              Ver todos los testimonios
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Final CTA */}
      <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/10 via-dark-900 to-primary-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 shadow-md" data-aos="fade-up">
              ÚNETE A NOSOTROS
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-aos="fade-up" data-aos-delay="100">
              ¿Estás listo para formar parte de <br />
              <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">nuestra comunidad</span>?
            </h2>
            
            <p className="text-lg text-gray-200 max-w-3xl mb-10" data-aos="fade-up" data-aos-delay="200">
              Únete a miles de jugadores y vive la mejor experiencia de Guild Wars 2 en español.
              Eventos diarios, guías exclusivas y una comunidad activa te esperan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="300">
              <Button 
                href="https://discord.gg/gw2esp"
                variant="gradient"
                rounded="lg"
                rightIcon={<FaDiscord />}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 border border-indigo-500 shadow-lg shadow-indigo-900/20 px-6 py-3 text-lg"
              >
                Unirse al Discord
              </Button>
              
              <Button 
                href="/patreon"
                variant="outline"
                rounded="lg"
                rightIcon={<FaPatreon />}
                className="bg-dark-800 border-gray-700 hover:border-purple-500/50 px-6 py-3 text-lg"
              >
                Apóyanos en Patreon
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
