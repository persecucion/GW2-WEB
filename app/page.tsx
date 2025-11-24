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
  FaClock,
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
import ParticleBackground from "./components/ParticleBackground"
import AnimatedSection from "./components/AnimatedSection"

// Importación para el iframe del chat - comentado temporalmente hasta crear el componente
// const WidgetBotChat = dynamic(() => import('./components/WidgetBotChat'), {
//   ssr: false
// })

// Definimos animaciones para el hero
const heroAnimations = `
  @keyframes pulse {
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
  }
  
  @keyframes floatUp {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes moveGradient {
    0% { background-position: 0% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes titleGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  
  .hero-title {
    animation: floatUp 1.5s ease-out forwards;
  }
  
  .hero-title h1 {
    background: linear-gradient(90deg, #60a5fa, #ffffff, #818cf8);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: titleGradient 5s ease infinite;
  }
  
  .hero-subtitle {
    animation: floatUp 1.5s ease-out 0.3s forwards;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .hero-buttons {
    animation: floatUp 1.5s ease-out 0.6s forwards;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .hero-image-container {
    animation: floatUp 1.5s ease-out 0.9s forwards;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .hero-image-glow {
    animation: pulse 4s ease-in-out infinite;
  }
  
  .hero-gradient-bg {
    background: linear-gradient(-45deg, #080f1f, #0c1631, #040d1f, #05101f);
    background-size: 400% 400%;
    animation: gradientFlow 15s ease infinite;
  }
  
  .img-border {
    position: relative;
    z-index: 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 70px rgba(0, 102, 255, 0.25);
  }
  
  .img-border::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 14px;
    background: linear-gradient(90deg, #1e40af, #3b82f6, #8b5cf6, #3b82f6, #1e40af);
    background-size: 300% 100%;
    animation: moveGradient 3s linear infinite;
    z-index: -1;
  }
  
  .img-border::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 13px;
    background: rgba(0, 4, 40, 0.9);
    z-index: -1;
  }
  
  .shimmer-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
    background-size: 1000px 100%;
    animation: shimmer 3s ease-out infinite;
    z-index: 2;
    pointer-events: none;
  }
  
  .gradient-text {
    background: linear-gradient(90deg, #60a5fa, #ffffff, #818cf8);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: titleGradient 5s ease infinite;
  }
  
  .footer-divider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, rgba(23, 37, 84, 0.8), rgba(59, 130, 246, 0.8), rgba(23, 37, 84, 0.8));
    z-index: 50;
  }
  
  .moving-border {
    position: relative;
    z-index: 0;
  }
  
  .moving-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 30px;
    background: linear-gradient(90deg, transparent, #0066ff, transparent);
    background-size: 200% 100%;
    animation: moveGradient 2s linear infinite;
    z-index: -1;
  }
  
  .moving-border::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 30px;
    background: rgba(0, 4, 40, 0.9);
    z-index: -1;
  }
`;

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

      {/* Hero Section - Professional & Robust */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">

        {/* Background - Solid & Clean */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950"></div>

          {/* Subtle Accent Glow (Professional Blue) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/20 blur-[120px] rounded-full opacity-50"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Text Content - Left Aligned for Professional Look */}
            <div className="flex-1 text-center lg:text-left max-w-3xl">

              {/* Community Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm" data-aos="fade-down">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-sm font-medium text-blue-100 tracking-wide uppercase">Comunidad #1 de Guild Wars 2</span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="100">
                Tu Aventura <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Comienza Aquí
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light" data-aos="fade-up" data-aos-delay="200">
                Únete a una comunidad establecida, activa y profesional. Eventos diarios, guías expertas y compañeros de juego listos para explorar Tyria contigo.
              </p>

              {/* CTA Buttons - Solid & Clear */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="300">
                <Button
                  href="https://discord.gg/gatitos2"
                  external
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-blue-900/20 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-3"
                >
                  <FaDiscord className="text-xl" />
                  Unirse al Discord
                </Button>

                <Button
                  href="#features"
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white font-medium px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  Saber Más
                  <FaArrowRight className="text-sm" />
                </Button>
              </div>

              {/* Social Proof - Clean Row */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-400 text-sm font-medium" data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-blue-400 text-lg" />
                  <span>+1000 Miembros</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500 text-lg" />
                  <span>4.9/5 Valoración</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-400 text-lg" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>

            {/* Hero Image - Structured & Framed */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none relative" data-aos="fade-left" data-aos-delay="200">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                <div className="aspect-video relative">
                  <Image
                    src="/images/server.png"
                    alt="GW2 Community Server"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>

                {/* Floating Info Card - Clean */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                      <FaGamepad />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Próximo Evento</p>
                      <p className="text-sm font-bold text-white">Torneo PvP - Sábado 20:00</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-slate-700"></div>
                  <div className="text-right">
                    <p className="text-xs text-green-400 font-bold">En línea</p>
                    <p className="text-sm text-slate-300">124 miembros</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Subtle */}
              <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border border-slate-700 rounded-2xl opacity-50"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section - Professional & Robust */}
      <section id="features" className="py-24 relative overflow-hidden bg-slate-950">
        {/* Background - Clean Grid */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Características</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por qué elegir nuestra comunidad?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Construimos un espacio seguro, activo y profesional para todos los jugadores de Guild Wars 2.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Eventos en Vivo",
                description: "Participa en torneos, raids y eventos de mundo organizados profesionalmente.",
                image: "/images/evento.png",
                icon: <FaGamepad className="text-2xl text-white" />,
                color: "bg-blue-600"
              },
              {
                title: "Sorteos Exclusivos",
                description: "Premios mensuales, gemas y contenido exclusivo para miembros activos.",
                image: "/images/sorteo.png",
                icon: <FaGift className="text-2xl text-white" />,
                color: "bg-purple-600"
              },
              {
                title: "Comunidad Global",
                description: "Conecta con jugadores de todo el mundo hispanohablante en un ambiente respetuoso.",
                image: "/images/server.png",
                icon: <FaUsers className="text-2xl text-white" />,
                color: "bg-indigo-600"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-lg shadow-lg ${feature.color}`}>
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional features - Clean Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 flex items-start gap-4 hover:border-slate-700 transition-colors">
              <div className="p-3 bg-slate-800 rounded-lg text-yellow-500 shrink-0">
                <FaStar className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Experiencia Premium</h3>
                <p className="text-slate-400 text-sm">Canales de voz de alta calidad, bots personalizados y roles exclusivos.</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 flex items-start gap-4 hover:border-slate-700 transition-colors">
              <div className="p-3 bg-slate-800 rounded-lg text-red-500 shrink-0">
                <FaHeart className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Ambiente Seguro</h3>
                <p className="text-slate-400 text-sm">Moderación activa 24/7 para garantizar un espacio libre de toxicidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Professional & Robust */}
      <section
        ref={statsRef}
        className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Estadísticas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestra Comunidad en Números
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Crecimiento constante impulsado por jugadores apasionados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-3xl text-blue-400" />,
                count: members,
                label: "Miembros Activos",
                suffix: "+",
                delay: 100,
              },
              {
                icon: <FaUserShield className="text-3xl text-purple-400" />,
                count: staff,
                label: "Staff Dedicado",
                suffix: "+",
                delay: 200,
              },
              {
                icon: <FaComments className="text-3xl text-indigo-400" />,
                count: messages,
                label: "Mensajes Diarios",
                suffix: "+",
                delay: 300,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-8 text-center border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={stat.delay}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-slate-800 rounded-xl shadow-inner">
                    {stat.icon}
                  </div>
                </div>

                <div className="text-4xl font-bold text-white mb-2">
                  {statsVisible && (
                    <CountUp
                      end={stat.count}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  )}
                </div>

                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Additional stats - Clean Grid */}
          <div className="mt-12" data-aos="fade-up">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                <div className="text-center pt-4 md:pt-0">
                  <div className="text-2xl font-bold text-white mb-1">2+</div>
                  <div className="text-slate-500 text-sm uppercase tracking-wide font-semibold">Años Online</div>
                </div>
                <div className="text-center pt-4 md:pt-0">
                  <div className="text-2xl font-bold text-white mb-1">40+</div>
                  <div className="text-slate-500 text-sm uppercase tracking-wide font-semibold">Canales</div>
                </div>
                <div className="text-center pt-4 md:pt-0">
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-slate-500 text-sm uppercase tracking-wide font-semibold">Eventos/Mes</div>
                </div>
                <div className="text-center pt-4 md:pt-0">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-slate-500 text-sm uppercase tracking-wide font-semibold">Actividad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section - Professional & Robust */}
      <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
        {/* Background - Clean Grid */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Calendario</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Próximos Eventos
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              No te pierdas ninguna de nuestras actividades programadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Torneo PvP Mensual",
                description: "Demuestra tu habilidad y gana premios en oro y gemas.",
                date: "Sábado 15",
                time: "20:00 CET",
                image: "/images/evento.png",
                category: "Competitivo",
                featured: true
              },
              {
                title: "Raid de Entrenamiento",
                description: "Aprende las mecánicas de las raids con nuestros comandantes expertos.",
                date: "Domingo 16",
                time: "18:00 CET",
                image: "/images/raid.png",
                category: "PvE",
                featured: false
              },
              {
                title: "Meta-Evento de Mapa",
                description: "Organización masiva para completar metas de mapas difíciles.",
                date: "Viernes 21",
                time: "21:00 CET",
                image: "/images/meta.png",
                category: "Mundo Abierto",
                featured: false
              }
            ].map((event, index) => (
              <div
                key={index}
                className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 shadow-lg hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-blue-500" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <Button
                    href="/events"
                    variant="outline"
                    className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600"
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Button
              href="/events"
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white px-8"
            >
              Ver Calendario Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Patreon Section - Professional & Robust */}
      <section className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Membresía</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Apoya a la Comunidad
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Obtén beneficios exclusivos y ayuda a mantener el servidor activo.
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
                borderColor: 'border-yellow-500/50',
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
                borderColor: 'border-blue-500',
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
                borderColor: 'border-purple-500/50',
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
                  relative rounded-xl bg-slate-900 border ${tier.popular ? 'border-blue-500 shadow-xl shadow-blue-900/20' : 'border-slate-800'} 
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                `}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-wide">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="relative w-full h-40 rounded-lg mb-6 overflow-hidden border border-slate-800">
                    <Image
                      src={tier.image}
                      alt={tier.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                  </div>

                  <h3 className={`text-xl font-bold ${tier.color} mb-2`}>{tier.name}</h3>
                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}€</span>
                    <span className="text-slate-500 mb-1 font-medium">/mes</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheck className="text-green-500 mt-1 shrink-0 text-sm" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/patreon"
                    className={`w-full font-semibold py-3 rounded-lg transition-all ${tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
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
      </section >

      {/* Sección de Testimonios */}
      < section className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 relative" >
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
      </section >

      {/* Sección Final CTA */}
      < section className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 relative" >
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
                rounded="default"
                rightIcon={<FaDiscord />}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 border border-indigo-500 shadow-lg shadow-indigo-900/20 px-6 py-3 text-lg"
              >
                Unirse al Discord
              </Button>

              <Button
                href="/patreon"
                variant="outline"
                rounded="default"
                rightIcon={<FaPatreon />}
                className="bg-dark-800 border-gray-700 hover:border-purple-500/50 px-6 py-3 text-lg"
              >
                Apóyanos en Patreon
              </Button>
            </div>
          </div>
        </div>
      </section >

      <Footer />

      {/* Single global style tag for all animations */}
      <style jsx global>{heroAnimations}</style>
    </div >
  )
}
