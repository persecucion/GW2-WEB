'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaDiscord, FaTwitter, FaTwitch, FaInstagram, FaYoutube, FaUsers, FaComments, FaGamepad, FaHeart } from 'react-icons/fa'
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
  const [activeTab, setActiveTab] = useState('team')

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
        {/* Hero Section */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-900"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="bg-primary-900/30 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                Nuestra Comunidad
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Conoce a <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">GW2</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Somos una comunidad vibrante y acogedora de jugadores apasionados, unidos por el amor a los videojuegos y la amistad.
              </p>
              <Button 
                href="https://discord.gg/gatitos2"
                external
                variant="gradient"
                size="lg"
                rounded="full"
                animation="float"
                leftIcon={<FaDiscord />}
              >
                Únete a nosotros
              </Button>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 bg-dark-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <div 
                  key={stat.id}
                  className="bg-dark-700 rounded-xl p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-white mb-1">
                      {stat.value.toLocaleString()}+
                    </span>
                    <span className="text-gray-400">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                variant={activeTab === 'team' ? 'gradient' : 'outline'}
                rounded="full"
                onClick={() => setActiveTab('team')}
              >
                Nuestro Equipo
              </Button>
              <Button 
                variant={activeTab === 'values' ? 'gradient' : 'outline'}
                rounded="full"
                onClick={() => setActiveTab('values')}
              >
                Nuestros Valores
              </Button>
              <Button 
                variant={activeTab === 'rules' ? 'gradient' : 'outline'}
                rounded="full"
                onClick={() => setActiveTab('rules')}
              >
                Reglas
              </Button>
            </div>

            {/* Team Members */}
            {activeTab === 'team' && (
              <div>
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-3xl font-bold mb-4 text-white">Equipo de GW2</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Conoce a las personas que hacen posible esta comunidad. Nuestro dedicado equipo trabaja diariamente para crear la mejor experiencia para todos.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      className="bg-dark-700 rounded-xl overflow-hidden shadow-lg"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      whileHover={{ y: -10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="relative h-72 overflow-hidden">
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-xl font-bold text-white">{member.name}</h3>
                          <span className="inline-block bg-primary-600/80 text-white text-xs font-medium px-2.5 py-1 rounded-full mt-1">
                            {member.role}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.socialLinks.discord && (
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                              <FaDiscord size={20} />
                            </a>
                          )}
                          {member.socialLinks.twitter && (
                            <a href={member.socialLinks.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                              <FaTwitter size={20} />
                            </a>
                          )}
                          {member.socialLinks.twitch && (
                            <a href={member.socialLinks.twitch} className="text-gray-400 hover:text-purple-400 transition-colors">
                              <FaTwitch size={20} />
                            </a>
                          )}
                          {member.socialLinks.instagram && (
                            <a href={member.socialLinks.instagram} className="text-gray-400 hover:text-pink-400 transition-colors">
                              <FaInstagram size={20} />
                            </a>
                          )}
                          {member.socialLinks.youtube && (
                            <a href={member.socialLinks.youtube} className="text-gray-400 hover:text-red-400 transition-colors">
                              <FaYoutube size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Community Values */}
            {activeTab === 'values' && (
              <div>
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-3xl font-bold mb-4 text-white">Nuestros Valores</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Estos son los principios que nos guían y definen nuestra comunidad. Valores que compartimos y promovemos entre todos.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {communityValues.map((value, index) => (
                    <div
                      key={index}
                      className={`bg-dark-700 p-6 rounded-xl shadow-lg border-l-4 ${
                        value.color === 'blue' 
                          ? 'border-primary-500' 
                          : value.color === 'purple' 
                            ? 'border-secondary-500' 
                            : value.color === 'pink' 
                              ? 'border-pink-500' 
                              : 'border-teal-500'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Community Rules */}
            {activeTab === 'rules' && (
              <div>
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-3xl font-bold mb-4 text-white">Reglas de la Comunidad</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Para mantener un ambiente positivo y seguro, todos los miembros deben seguir estas reglas básicas.
                  </p>
                </div>

                <div className="bg-dark-700 rounded-xl p-8 shadow-lg" data-aos="fade-up">
                  <ol className="space-y-6">
                    {[
                      {
                        title: 'Respeto Mutuo',
                        description: 'Trata a todos los miembros con respeto. No se tolerará el acoso, insultos o comportamiento tóxico.',
                      },
                      {
                        title: 'No Spam',
                        description: 'Evita enviar mensajes repetitivos, promocionar servidores o contenido sin autorización.',
                      },
                      {
                        title: 'Contenido Apropiado',
                        description: 'No compartas contenido NSFW, violento, político o religioso que pueda ofender a otros miembros.',
                      },
                      {
                        title: 'Canales Adecuados',
                        description: 'Utiliza los canales apropiados para cada tema o discusión.',
                      },
                      {
                        title: 'Privacidad',
                        description: 'Respeta la privacidad de los demás. No compartas información personal de otros sin su consentimiento.',
                      },
                      {
                        title: 'Sigue las Instrucciones del Staff',
                        description: 'Obedece las indicaciones de los moderadores y administradores del servidor.',
                      },
                    ].map((rule, index) => (
                      <li key={index} className="flex">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-4">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="font-semibold text-white text-lg mb-1">{rule.title}</h4>
                          <p className="text-gray-300">{rule.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-8 p-4 bg-primary-900/20 rounded-lg border border-primary-800/40">
                    <p className="text-gray-300">
                      El incumplimiento de estas reglas puede resultar en advertencias, suspensiones temporales o expulsión permanente de la comunidad, según la gravedad de la infracción y a discreción del equipo de moderación.
                    </p>
                  </div>
                </div>
              </div>
            )}
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