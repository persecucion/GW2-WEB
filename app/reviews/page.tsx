'use client';

import React, { useState, useEffect } from 'react'
import { FaStar, FaStarHalfAlt, FaFilter, FaSearch, FaUserCircle, FaCheckCircle, FaRegStar, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../Header'
import Footer from '../Footer'
import { Card, CardContent } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { Input } from '../components/Input'
import { Label } from '../components/Label'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs'
import Image from 'next/image'

// Tipos
interface Review {
  id: number
  author: string
  avatar: string
  role: 'member' | 'patreon' | 'moderator'
  rating: number
  content: string
  date: string
  verified: boolean
  helpful: number
}

export default function ReviewsPage() {
  // Estado para las reseñas
  const [reviews, setReviews] = useState<Review[]>([])
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'member' | 'patreon' | 'moderator'>('all')
  const [sortOrder, setSortOrder] = useState<'recent' | 'highest' | 'lowest'>('recent')
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  
  // Datos de ejemplo
  useEffect(() => {
    const dummyReviews: Review[] = [
      {
        id: 1,
        author: 'Alejandro Martínez',
        avatar: '/images/avatars/user1.jpg',
        role: 'patreon',
        rating: 5,
        content: 'La mejor comunidad de GW2 en español, sin duda. Los eventos son muy divertidos y el ambiente es increíble. Llevo 3 años como miembro y no puedo estar más satisfecho con todo lo que ofrecen. Los guías son muy pacientes y siempre dispuestos a ayudar a los nuevos jugadores.',
        date: '2023-12-15',
        verified: true,
        helpful: 42
      },
      {
        id: 2,
        author: 'María Rodríguez',
        avatar: '/images/avatars/user2.jpg',
        role: 'moderator',
        rating: 5,
        content: 'Como moderadora, puedo decir que el equipo detrás de esta comunidad se esfuerza al máximo por crear un espacio acogedor y divertido para todos los jugadores. Los eventos están muy bien organizados y siempre hay algo nuevo que hacer.',
        date: '2023-11-25',
        verified: true,
        helpful: 38
      },
      {
        id: 3,
        author: 'Carlos Sánchez',
        avatar: '/images/avatars/user3.jpg',
        role: 'member',
        rating: 4.5,
        content: 'Me uní hace poco más de un mes y la experiencia ha sido genial. La gente es muy amable y siempre hay alguien dispuesto a ayudarte si tienes dudas sobre el juego. Los eventos de mundo contra mundo son muy divertidos.',
        date: '2024-01-05',
        verified: true,
        helpful: 27
      },
      {
        id: 4,
        author: 'Laura Gómez',
        avatar: '/images/avatars/user4.jpg',
        role: 'patreon',
        rating: 5,
        content: 'Como suscriptora de Patreon, tengo acceso a eventos exclusivos que son simplemente geniales. Merece mucho la pena el apoyo mensual por todo lo que ofrecen. Los sorteos mensuales también son un gran incentivo.',
        date: '2023-10-18',
        verified: true,
        helpful: 31
      },
      {
        id: 5,
        author: 'Javier López',
        avatar: '/images/avatars/user5.jpg',
        role: 'member',
        rating: 4,
        content: 'Una comunidad muy activa y con muchos eventos. Lo único que mejoraría es tener más eventos para nuevos jugadores, pero en general estoy muy contento con mi experiencia aquí.',
        date: '2024-02-10',
        verified: false,
        helpful: 14
      },
      {
        id: 6,
        author: 'Ana Martín',
        avatar: '/images/avatars/user6.jpg',
        role: 'patreon',
        rating: 5,
        content: 'La guía de mazmorras que ofrecen a los Patreons es increíblemente detallada y me ha ayudado muchísimo a mejorar mi juego. El Discord está siempre activo y hay gente dispuesta a ayudar a cualquier hora.',
        date: '2023-09-30',
        verified: true,
        helpful: 29
      },
      {
        id: 7,
        author: 'Diego Fernández',
        avatar: '/images/avatars/user7.jpg',
        role: 'member',
        rating: 3.5,
        content: 'Los eventos son divertidos y la comunidad es amigable. A veces los horarios no me vienen bien por mi zona horaria, pero entiendo que es difícil cubrir todas las zonas. Recomendaría más eventos en diferentes franjas.',
        date: '2024-03-01',
        verified: true,
        helpful: 12
      },
      {
        id: 8,
        author: 'Lucía Torres',
        avatar: '/images/avatars/user8.jpg',
        role: 'moderator',
        rating: 5,
        content: 'Como parte del equipo de moderación, estoy orgullosa de formar parte de esta comunidad. Siempre buscamos mejorar y escuchamos activamente el feedback de nuestros miembros para implementar cambios positivos.',
        date: '2023-08-22',
        verified: true,
        helpful: 45
      },
      {
        id: 9,
        author: 'Roberto García',
        avatar: '/images/avatars/user9.jpg',
        role: 'patreon',
        rating: 4.5,
        content: 'Las carreras de Tyria y los eventos de salto son mi parte favorita. El nivel de organización es impresionante y se nota que hay mucho trabajo detrás de cada evento. Totalmente recomendable para cualquier fan de GW2.',
        date: '2024-02-18',
        verified: true,
        helpful: 34
      },
      {
        id: 10,
        author: 'Elena Díaz',
        avatar: '/images/avatars/user10.jpg',
        role: 'member',
        rating: 5,
        content: 'Llevo jugando a GW2 desde el lanzamiento pero nunca había encontrado una comunidad tan acogedora. Los eventos de raid training son especialmente útiles para quienes queremos mejorar en ese aspecto del juego.',
        date: '2023-12-05',
        verified: true,
        helpful: 28
      },
      {
        id: 11,
        author: 'Miguel Ángel',
        avatar: '/images/avatars/user11.jpg',
        role: 'member',
        rating: 4,
        content: 'Buenos eventos y gente agradable. He aprendido mucho sobre el juego desde que me uní. Las guías que comparten son muy útiles, especialmente para los nuevos modos de juego.',
        date: '2024-01-20',
        verified: false,
        helpful: 19
      },
      {
        id: 12,
        author: 'Sofía Navarro',
        avatar: '/images/avatars/user12.jpg',
        role: 'patreon',
        rating: 5,
        content: 'Los beneficios de Patreon valen cada céntimo. Las sesiones de entrenamiento personalizadas me han ayudado a mejorar enormemente mi gameplay. El equipo siempre está abierto a sugerencias para nuevos contenidos.',
        date: '2023-11-10',
        verified: true,
        helpful: 37
      }
    ]
    
    setReviews(dummyReviews)
    setFilteredReviews(dummyReviews)
    
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
    
    // Scroll to top
    window.scrollTo(0, 0)
  }, [])
  
  // Filtrar y ordenar reseñas
  useEffect(() => {
    let result = [...reviews]
    
    // Filtrar por rol
    if (filter !== 'all') {
      result = result.filter(review => review.role === filter)
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase()
      result = result.filter(review => 
        review.author.toLowerCase().includes(searchLower) || 
        review.content.toLowerCase().includes(searchLower)
      )
    }
    
    // Ordenar
    switch (sortOrder) {
      case 'recent':
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case 'highest':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'lowest':
        result.sort((a, b) => a.rating - b.rating)
        break
    }
    
    setFilteredReviews(result)
  }, [reviews, filter, searchTerm, sortOrder])
  
  // Renderizar estrellas
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />)
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />)
      }
    }
    
    return stars
  }
  
  // Formatear fecha
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }
  
  // Estadísticas de las reseñas
  const calculateStats = () => {
    if (reviews.length === 0) return { avg: 0, total: 0, verified: 0 }
    
    const total = reviews.length
    const verified = reviews.filter(r => r.verified).length
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
    const avg = Math.round((sum / total) * 10) / 10
    
    return { avg, total, verified }
  }
  
  const stats = calculateStats()

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 text-white overflow-x-hidden">
      <Header />
      
      {/* Efectos visuales y fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-secondary-900/10 to-primary-900/10"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-24 bg-dark-800">
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div data-aos="fade-up">
            <Badge className="mb-4 bg-primary-500 text-white">Opiniones</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary-300">
              Lo que dicen nuestros miembros
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Descubre por qué nuestra comunidad GW2 es valorada por sus miembros. Opiniones reales de jugadores reales.
            </p>
          </div>
          
          {/* Resumen de valoraciones */}
          <div 
            className="bg-dark-700 rounded-xl border border-gray-600 shadow-xl p-6 max-w-lg mx-auto mb-10"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-4xl font-bold text-white">{stats.avg}</h3>
                <div className="flex space-x-1 my-2">
                  {renderStars(stats.avg)}
                </div>
                <p className="text-gray-400 text-sm">Valoración media</p>
              </div>
              
              <div className="w-px h-14 bg-gray-700 mx-4"></div>
              
              <div>
                <h3 className="text-2xl font-bold text-white">{stats.total}</h3>
                <p className="text-gray-400 text-sm">Opiniones totales</p>
              </div>
              
              <div className="w-px h-14 bg-gray-700 mx-4"></div>
              
              <div>
                <h3 className="text-2xl font-bold text-white">{stats.verified}</h3>
                <p className="text-gray-400 text-sm">Verificadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de filtros y búsqueda */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-dark-800/70 backdrop-blur-sm rounded-xl border border-white/5 shadow-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-96">
                <Input
                  placeholder="Buscar en las opiniones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-dark-700 border-gray-600 focus:border-primary-500 pl-10"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                  variant="outline"
                  rounded="default"
                  className="bg-dark-700 border-gray-600"
                  leftIcon={<FaFilter />}
                >
                  Filtros
                </Button>
                
                <Button
                  onClick={() => setSortOrder(sortOrder === 'recent' ? 'highest' : 'recent')}
                  variant="outline"
                  rounded="default"
                  className="bg-dark-700 border-gray-600"
                  leftIcon={sortOrder === 'recent' ? <FaSortAmountDown /> : <FaSortAmountUp />}
                >
                  {sortOrder === 'recent' ? 'Recientes' : sortOrder === 'highest' ? 'Mayor valoración' : 'Menor valoración'}
                </Button>
              </div>
            </div>
            
            {isFiltersVisible && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <Tabs defaultValue="all" value={filter} onValueChange={(value) => setFilter(value as any)}>
                  <TabsList className="bg-dark-700">
                    <TabsTrigger value="all">Todas</TabsTrigger>
                    <TabsTrigger value="member">Miembros</TabsTrigger>
                    <TabsTrigger value="patreon">Patreons</TabsTrigger>
                    <TabsTrigger value="moderator">Moderadores</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="flex justify-between items-center mt-4">
                  <p className="text-gray-400 text-sm">
                    Mostrando {filteredReviews.length} de {reviews.length} opiniones
                  </p>
                  
                  <div className="space-x-2">
                    <Button 
                      onClick={() => {
                        setSearchTerm('')
                        setFilter('all')
                        setSortOrder('recent')
                      }}
                      variant="outline"
                      rounded="default"
                      className="bg-dark-700 border-gray-600"
                      size="sm"
                    >
                      Limpiar filtros
                    </Button>
                    
                    <Button
                      onClick={() => setIsFiltersVisible(false)}
                      variant="gradient"
                      rounded="default"
                      className="bg-gradient-to-r from-primary-600 to-primary-700"
                      size="sm"
                    >
                      Aplicar
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Sección de reseñas */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review, index) => (
                <Card 
                  key={review.id}
                  className="bg-dark-800/70 backdrop-blur-sm border border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 bg-dark-700 mr-3">
                          <Image
                            src={review.avatar || '/images/avatars/default.jpg'}
                            alt={review.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white flex items-center">
                            {review.author}
                            {review.verified && (
                              <FaCheckCircle className="ml-2 text-primary-400 text-sm" title="Verificado" />
                            )}
                          </h3>
                          <p className="text-sm text-gray-400 flex items-center">
                            {review.role === 'member' && 'Miembro'}
                            {review.role === 'patreon' && (
                              <span className="text-yellow-400 flex items-center">
                                <FaStar className="mr-1" /> Patreon
                              </span>
                            )}
                            {review.role === 'moderator' && (
                              <span className="text-blue-400 flex items-center">
                                <FaUserCircle className="mr-1" /> Moderador
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
                    </div>
                    
                    <div className="flex my-3">
                      {renderStars(review.rating)}
                    </div>
                    
                    <p className="text-gray-300 mb-4">{review.content}</p>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                      <span className="text-sm text-gray-400 flex items-center">
                        {review.helpful} personas encontraron esto útil
                      </span>
                      <Button
                        variant="outline"
                        rounded="default"
                        className="bg-dark-700 border-gray-600 hover:bg-dark-600"
                        size="sm"
                      >
                        Útil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-dark-800/70 backdrop-blur-sm rounded-xl border border-white/5 shadow-xl p-8 max-w-lg mx-auto">
                <FaSearch className="text-gray-400 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No hay resultados</h3>
                <p className="text-gray-300 mb-6">
                  No se encontraron opiniones que coincidan con tus criterios de búsqueda.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('')
                    setFilter('all')
                    setSortOrder('recent')
                  }}
                  variant="gradient"
                  rounded="default"
                  className="bg-gradient-to-r from-primary-600 to-primary-700"
                >
                  Limpiar filtros
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-dark-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-secondary-900/20"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div 
            className="bg-dark-800/70 backdrop-blur-sm rounded-3xl border border-white/5 shadow-2xl p-8 md:p-12 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                ¿Quieres compartir tu experiencia?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Únete a nuestra comunidad y forma parte de esta gran familia de jugadores de Guild Wars 2.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="https://discord.gg/gatitos2"
                external
                variant="gradient"
                size="lg"
                rounded="default"
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 border border-indigo-500 shadow-lg shadow-indigo-900/20"
              >
                Unirse a Discord
              </Button>
              <Button 
                href="/contact"
                variant="outline"
                size="lg"
                rounded="default"
                className="bg-dark-700 border-gray-600 shadow-lg"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
