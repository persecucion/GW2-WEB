'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaDiscord, FaTwitter, FaTwitch, FaInstagram, FaYoutube, FaUsers, FaComments, FaGamepad, FaHeart, FaCalendarAlt, FaUserShield } from 'react-icons/fa'
import { MdRuleFolder, MdGroups, MdOutlineEmojiEvents, MdOutlineMessage, MdFormatListNumbered } from 'react-icons/md'
import { HiOutlineUserGroup, HiOutlineHeart } from 'react-icons/hi'
import Header from '../Header'
import Footer from '../Footer'
import { Button } from '../components/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Datos de ejemplo
const teamMembers = [
  {
    id: 1,
    name: 'Mystic',
    role: 'Fundador',
    bio: 'Creador de la comunidad GW2 y entusiasta de los videojuegos. Siempre buscando formas de mejorar la experiencia de nuestros miembros.',
    image: '/Mystic.jpg',
    socialLinks: {
      discord: 'Mystic#1234',
      twitter: '#',
      twitch: '#',
    },
  },
  {
    id: 2,
    name: 'Alex',
    role: 'Admin Principal',
    bio: 'Coordinador de eventos y moderador. Encargado de mantener el orden y buen ambiente en la comunidad.',
    image: '/images/vip1.png',
    socialLinks: {
      discord: 'Alex#5678',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    id: 3,
    name: 'Sara',
    role: 'Moderadora',
    bio: 'Especialista en organización de torneos y eventos especiales. Siempre dispuesta a ayudar a los nuevos miembros.',
    image: '/images/vip2.png',
    socialLinks: {
      discord: 'Sara#9101',
      twitch: '#',
      youtube: '#',
    },
  },
  {
    id: 4,
    name: 'Carlos',
    role: 'Moderador',
    bio: 'Experto en tecnología y resolución de problemas técnicos. El mejor apoyo para cualquier duda del servidor.',
    image: '/images/vip3.png',
    socialLinks: {
      discord: 'Carlos#1122',
      twitter: '#',
      instagram: '#',
    },
  },
]

const communityStats = [
  { id: 1, label: 'Miembros', value: 1000, icon: <FaUsers className="text-primary-400 text-2xl" /> },
  { id: 2, label: 'Mensajes Diarios', value: 5000, icon: <FaComments className="text-secondary-400 text-2xl" /> },
  { id: 3, label: 'Eventos Realizados', value: 120, icon: <FaGamepad className="text-pink-400 text-2xl" /> },
  { id: 4, label: 'Años Activos', value: 2, icon: <FaHeart className="text-red-400 text-2xl" /> },
]

const communityValues = [
  {
    title: 'Respeto',
    description: 'Tratamos a todos los miembros con respeto y dignidad, fomentando un ambiente seguro y acogedor.',
    color: 'blue',
  },
  {
    title: 'Inclusión',
    description: 'Todos son bienvenidos sin importar su origen, identidad o nivel de experiencia en gaming.',
    color: 'purple',
  },
  {
    title: 'Diversión',
    description: 'Creemos que los videojuegos son para divertirse y crear experiencias memorables juntos.',
    color: 'pink',
  },
  {
    title: 'Amistad',
    description: 'Valoramos las conexiones genuinas y las amistades que se forman dentro de nuestra comunidad.',
    color: 'teal',
  },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState(0)

  // Define the tabs data structure
  const tabs = [
    {
      label: "Equipo",
      icon: <HiOutlineUserGroup className="h-5 w-5" />,
      title: "Nuestro Equipo",
      description: "Conoce a las personas que hacen posible esta comunidad. Nuestro dedicado equipo trabaja diariamente para crear la mejor experiencia para todos.",
      image: "/images/team.jpg",
      features: [
        {
          icon: <MdGroups className="h-5 w-5" />,
          title: "Liderazgo",
          description: "Un equipo apasionado por Guild Wars 2"
        },
        {
          icon: <MdOutlineEmojiEvents className="h-5 w-5" />,
          title: "Organizadores",
          description: "Creadores de eventos y actividades"
        },
        {
          icon: <MdOutlineMessage className="h-5 w-5" />,
          title: "Moderadores",
          description: "Mantienen la comunidad segura y amigable"
        },
        {
          icon: <FaDiscord className="h-5 w-5" />,
          title: "Discord Mods",
          description: "Supervisores de nuestro servidor Discord"
        }
      ],
      cta: {
        label: "Conoce al equipo",
        icon: <HiOutlineUserGroup className="h-5 w-5" />
      }
    },
    {
      label: "Valores",
      icon: <HiOutlineHeart className="h-5 w-5" />,
      title: "Nuestros Valores",
      description: "Estos son los principios que nos guían y definen nuestra comunidad. Valores que compartimos y promovemos entre todos.",
      image: "/images/values.jpg",
      features: [
        {
          icon: <HiOutlineHeart className="h-5 w-5" />,
          title: "Inclusividad",
          description: "Todos son bienvenidos sin importar su experiencia"
        },
        {
          icon: <HiOutlineHeart className="h-5 w-5" />,
          title: "Respeto",
          description: "Valoramos las opiniones y diferencias de cada uno"
        },
        {
          icon: <HiOutlineHeart className="h-5 w-5" />,
          title: "Diversión",
          description: "Priorizamos la experiencia positiva de juego"
        },
        {
          icon: <HiOutlineHeart className="h-5 w-5" />,
          title: "Colaboración",
          description: "Trabajamos juntos para lograr objetivos comunes"
        }
      ],
      cta: {
        label: "Leer más",
        icon: <HiOutlineHeart className="h-5 w-5" />
      }
    },
    {
      label: "Reglas",
      icon: <MdRuleFolder className="h-5 w-5" />,
      title: "Reglas de la Comunidad",
      description: "Para mantener un ambiente positivo y seguro, todos los miembros deben seguir estas reglas básicas.",
      image: "/images/rules.jpg",
      features: [
        {
          icon: <MdFormatListNumbered className="h-5 w-5" />,
          title: "Respeto Mutuo",
          description: "Trata a todos con respeto y dignidad"
        },
        {
          icon: <MdFormatListNumbered className="h-5 w-5" />,
          title: "No Spam",
          description: "Evita mensajes repetitivos o no deseados"
        },
        {
          icon: <MdFormatListNumbered className="h-5 w-5" />,
          title: "Contenido Apropiado",
          description: "Comparte solo contenido apto para todos"
        },
        {
          icon: <MdFormatListNumbered className="h-5 w-5" />,
          title: "Privacidad",
          description: "Respeta la información personal de otros"
        }
      ],
      cta: {
        label: "Ver reglas completas",
        icon: <MdRuleFolder className="h-5 w-5" />
      }
    }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-900">
        {/* Hero Section - Modernized */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-dark-900/80 to-dark-900"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
          
          {/* Animated background orbs */}
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-blue-600/10 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-purple-600/10 blur-[100px] animate-pulse"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="bg-primary-900/30 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 border border-primary-500/20 shadow-lg shadow-primary-900/10">
                Nuestra Comunidad
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Conoce a <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">GW2</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Somos una comunidad vibrante y acogedora de jugadores apasionados, unidos por el amor a los videojuegos y la amistad.
              </p>
              <Button 
                href="https://discord.gg/gatitos2"
                external
                variant="gradient"
                size="lg"
                rounded="full"
                animation="float"
                leftIcon={<FaDiscord className="text-xl" />}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 shadow-xl shadow-primary-900/20 border border-primary-500/30"
              >
                Únete a nosotros
              </Button>
            </div>
          </div>
        </section>

        {/* Community Stats - Updated Design */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-primary-900/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: '5+', label: 'Años', icon: <FaCalendarAlt className="text-primary-400 text-xl md:text-2xl" /> },
                { value: '100+', label: 'Miembros', icon: <FaUsers className="text-primary-400 text-xl md:text-2xl" /> },
                { value: '200+', label: 'Eventos', icon: <FaGamepad className="text-primary-400 text-xl md:text-2xl" /> },
                { value: '15+', label: 'Moderadores', icon: <FaUserShield className="text-primary-400 text-xl md:text-2xl" /> },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center bg-dark-800/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/10 shadow-lg hover:shadow-primary-500/5 transition-all duration-300 hover:translate-y-[-4px]"
                  data-aos="fade-up"
                  data-aos-delay={100 * i}
                >
                  <div className="p-3 bg-primary-900/30 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Tabs - Modernized */}
        <section className="py-20 relative">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-800/80"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
              <span className="bg-secondary-900/30 text-secondary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 border border-secondary-500/20">
                Descubre
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Nuestra comunidad <span className="bg-gradient-to-r from-secondary-400 to-purple-400 bg-clip-text text-transparent">en detalle</span>
              </h2>
              <p className="text-gray-300">
                Conoce todos los aspectos que hacen de GW2 un lugar especial para todos los amantes de Guild Wars 2.
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="inline-flex p-1.5 bg-dark-800/80 backdrop-blur-sm rounded-xl border border-dark-700/50 shadow-xl">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition duration-200 ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-gradient-to-br from-dark-800/70 to-dark-900/70 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 md:p-8 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left column - Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {tabs[activeTab].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {tabs[activeTab].description}
                  </p>
                  
                  {/* Features grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {tabs[activeTab].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start p-3 rounded-lg bg-dark-800/50 border border-dark-700/50">
                        <div className="flex-shrink-0 p-2 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-lg mr-3">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white text-sm mb-1">{feature.title}</h4>
                          <p className="text-xs text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button
                    variant="gradient"
                    size="default"
                    leftIcon={tabs[activeTab].cta.icon}
                    className="mt-2"
                  >
                    {tabs[activeTab].cta.label}
                  </Button>
                </div>
                
                {/* Right column - Image */}
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
                  <Image
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHXi2unAAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Team Section - Modern Design */}
        <section className="py-20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900/90"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-600/5 blur-[120px]"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary-600/5 blur-[120px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-block px-3 py-1 bg-primary-900/30 rounded-full text-primary-400 text-sm font-semibold mb-3 border border-primary-500/20">
                Nuestro Staff
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                El <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">equipo</span> detrás de GW2
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Conoce a las personas dedicadas que trabajan día a día para hacer de nuestra comunidad un lugar especial para todos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  name: "Mystic",
                  role: "Fundador",
                  image: "/Mystic.jpg",
                  badge: "primary",
                  bio: "Creador de la comunidad GW2 y entusiasta de los videojuegos.",
                  discord: "Mystic#1234",
                  twitter: true,
                  twitch: true
                },
                {
                  name: "Alex",
                  role: "Admin Principal",
                  image: "/images/vip1.png",
                  badge: "secondary",
                  bio: "Coordinador de eventos y moderador. Responsable del buen ambiente.",
                  discord: "Alex#5678",
                  twitter: true,
                  instagram: true
                },
                {
                  name: "Sara",
                  role: "Moderadora",
                  image: "/images/vip2.png",
                  badge: "pink",
                  bio: "Especialista en organización de torneos y eventos especiales.",
                  discord: "Sara#9101",
                  twitch: true,
                  youtube: true
                },
                {
                  name: "Carlos",
                  role: "Moderador",
                  image: "/images/vip3.png",
                  badge: "teal",
                  bio: "Experto en tecnología y resolución de problemas técnicos.",
                  discord: "Carlos#1122",
                  twitter: true,
                  instagram: true
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 rounded-2xl overflow-hidden shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/90 z-10"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-primary-500/20 to-secondary-500/20 transition-opacity duration-300"></div>
                  
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="relative p-6 pt-0 -mt-12 z-20">
                    <div className="flex flex-col items-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium mb-2 ${
                        member.badge === 'primary' 
                          ? 'bg-primary-500' 
                          : member.badge === 'secondary' 
                            ? 'bg-secondary-500' 
                            : member.badge === 'pink'
                              ? 'bg-pink-500'
                              : 'bg-teal-500'
                      }`}>
                        {member.role}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-gray-400 text-sm text-center mb-4">{member.bio}</p>
                      
                      <div className="flex space-x-3 mt-2">
                        <a href="#" className="h-9 w-9 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-600 transition-colors">
                          <FaDiscord size={18} />
                        </a>
                        {member.twitter && (
                          <a href="#" className="h-9 w-9 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-dark-600 transition-colors">
                            <FaTwitter size={18} />
                          </a>
                        )}
                        {member.twitch && (
                          <a href="#" className="h-9 w-9 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-dark-600 transition-colors">
                            <FaTwitch size={18} />
                          </a>
                        )}
                        {member.instagram && (
                          <a href="#" className="h-9 w-9 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-dark-600 transition-colors">
                            <FaInstagram size={18} />
                          </a>
                        )}
                        {member.youtube && (
                          <a href="#" className="h-9 w-9 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-dark-600 transition-colors">
                            <FaYoutube size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Community CTA */}
        <section className="py-16 bg-gradient-to-br from-primary-900/20 via-dark-800 to-secondary-900/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Sé Parte de Nuestra Comunidad
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Únete a GW2 hoy y conecta con jugadores apasionados como tú. Estamos esperándote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="https://discord.gg/gatitos2"
                external
                variant="gradient"
                rounded="full"
                animation="float"
                leftIcon={<FaDiscord />}
              >
                Unirse a Discord
              </Button>
              <Button 
                href="/contact"
                variant="outline"
                rounded="full"
              >
                Contactar con nosotros
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 
