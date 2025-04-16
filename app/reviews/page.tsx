'use client';

import React, { useState, useEffect } from 'react'
import { FaStar, FaStarHalfAlt, FaFilter, FaSearch, FaUserCircle, FaCheckCircle, FaRegStar, FaSortAmountDown, FaSortAmountUp, FaThumbsUp, FaChevronDown, FaQuoteRight, FaComments, FaDiscord } from 'react-icons/fa'
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
// import { toast, ToastContainer } from '../components/Toast'

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
  userRating?: number // Rating dado por el usuario actual
}

// Sistema de votos
interface VotesData {
  [reviewId: string]: boolean;
}

// Sistema de ratings de usuario
interface UserRatingsData {
  [reviewId: string]: number;
}

// Sistema de notificaciones simplificado
const showToast = (message: string, type: string) => {
  if (typeof window !== 'undefined') {
    alert(`${type.toUpperCase()}: ${message}`);
  }
};

export default function ReviewsPage() {
  // Estado para las reseñas
  const [reviews, setReviews] = useState<Review[]>([])
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([])
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'member' | 'patreon' | 'moderator'>('all')
  const [sortOrder, setSortOrder] = useState<'recent' | 'highest' | 'lowest'>('recent')
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [userVotes, setUserVotes] = useState<VotesData>({})
  const [userRatings, setUserRatings] = useState<UserRatingsData>({})
  const [expandedReview, setExpandedReview] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 6
  const [loadingMore, setLoadingMore] = useState(false)
  const [activeStars, setActiveStars] = useState<{[key: string]: number}>({})
  const [hoverStars, setHoverStars] = useState<{[key: string]: number}>({})
  
  // Cargar votos y ratings guardados
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== 'undefined') {
      try {
        const savedVotes = localStorage.getItem('gw2_review_votes')
        if (savedVotes) {
          setUserVotes(JSON.parse(savedVotes))
        }
        
        const savedRatings = localStorage.getItem('gw2_user_ratings')
        if (savedRatings) {
          setUserRatings(JSON.parse(savedRatings))
        }
      } catch (error) {
        console.error('Error al cargar datos guardados:', error)
      }
    }
  }, [])
  
  // Guardar votos cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined' && Object.keys(userVotes).length > 0) {
      localStorage.setItem('gw2_review_votes', JSON.stringify(userVotes))
    }
  }, [userVotes])
  
  // Guardar ratings cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined' && Object.keys(userRatings).length > 0) {
      localStorage.setItem('gw2_user_ratings', JSON.stringify(userRatings))
    }
  }, [userRatings])
  
  // Función para votar en una reseña
  const handleVote = (reviewId: number) => {
    // Verificar si el usuario ya votó
    const reviewIdStr = reviewId.toString()
    if (userVotes[reviewIdStr]) {
      showToast('Ya has marcado esta reseña como útil anteriormente.', 'aviso');
      return
    }
    
    // Actualizar el estado de reviews
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          helpful: review.helpful + 1
        }
      }
      return review
    })
    
    // Guardar el voto del usuario
    setUserVotes(prev => ({
      ...prev,
      [reviewIdStr]: true
    }))
    
    // Actualizar las reseñas
    setReviews(updatedReviews)
    
    // Actualizar en localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('gw2_reviews_data', JSON.stringify(updatedReviews))
      } catch (error) {
        console.error('Error al guardar reseñas:', error)
      }
    }
    
    // Mostrar confirmación
    showToast('Gracias por valorar esta reseña como útil.', 'éxito');
  }
  
  // Función para calificar una reseña
  const handleRateReview = (reviewId: number, rating: number) => {
    const reviewIdStr = reviewId.toString()
    
    // Guardar la calificación del usuario
    setUserRatings(prev => ({
      ...prev,
      [reviewIdStr]: rating
    }))
    
    setActiveStars(prev => ({
      ...prev,
      [reviewIdStr]: rating
    }))
    
    // Mostrar confirmación
    showToast(`Has calificado esta opinión con ${rating} estrellas`, 'éxito');
  }
  
  // Función para expandir/colapsar una reseña
  const toggleExpandReview = (reviewId: number) => {
    setExpandedReview(expandedReview === reviewId ? null : reviewId)
  }
  
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
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
        helpful: 0
      }
    ]
    
    // Guardar datos en localStorage para simular una API
    if (typeof window !== 'undefined') {
      // Solo guardar si no existen ya
      const existingData = localStorage.getItem('gw2_reviews_data')
      if (!existingData) {
        localStorage.setItem('gw2_reviews_data', JSON.stringify(dummyReviews))
      } else {
        // Usar los datos guardados
        try {
          setReviews(JSON.parse(existingData))
          setFilteredReviews(JSON.parse(existingData))
        } catch (error) {
          console.error('Error al cargar reseñas guardadas:', error)
          setReviews(dummyReviews)
          setFilteredReviews(dummyReviews)
        }
      }
    } else {
      setReviews(dummyReviews)
      setFilteredReviews(dummyReviews)
    }
    
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
  
  // Función para cargar más reseñas
  const loadMoreReviews = () => {
    setLoadingMore(true)
    
    // Simular carga con un timeout
    setTimeout(() => {
      const nextPage = currentPage + 1
      const endIndex = nextPage * reviewsPerPage
      
      setDisplayedReviews(filteredReviews.slice(0, endIndex))
      setCurrentPage(nextPage)
      setLoadingMore(false)
    }, 800)
  }
  
  // Actualizar las reseñas mostradas cuando cambien las filtradas
  useEffect(() => {
    setCurrentPage(1)
    setDisplayedReviews(filteredReviews.slice(0, reviewsPerPage))
  }, [filteredReviews])
  
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
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-dark-950 overflow-hidden">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("/images/patterns/grid.svg")', 
            backgroundSize: '30px 30px',
            transform: 'rotate(45deg)' 
          }}></div>
        </div>
        
        {/* Efecto de iluminación */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary-500 filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-secondary-500 filter blur-[100px] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center" data-aos="fade-up">
            <span className="bg-primary-900/30 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
              Reviews
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Lo que dicen nuestros </span>
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">miembros</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Descubre por qué nuestra comunidad GW2 es valorada por sus miembros. 
              Opiniones reales de jugadores reales.
            </p>
          </div>
          
          {/* Resumen de valoraciones */}
          <div 
            className="bg-dark-800 rounded-xl border border-gray-700 shadow-xl p-8 max-w-3xl mx-auto transform hover:scale-[1.02] transition-transform duration-300"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div className="grid grid-cols-3 gap-6 items-center">
              <div className="text-center p-4 border-r border-gray-700">
                <h3 className="text-5xl font-bold text-primary-400">{stats.avg}</h3>
                <div className="flex justify-center space-x-1 my-3">
                  {renderStars(stats.avg)}
                </div>
                <p className="text-gray-400 font-medium">Valoración media</p>
              </div>
              
              <div className="text-center p-4 border-r border-gray-700">
                <h3 className="text-5xl font-bold text-indigo-400">{stats.total}</h3>
                <div className="flex justify-center mt-3 mb-3">
                  <FaComments className="text-indigo-400 text-2xl" />
                </div>
                <p className="text-gray-400 font-medium">Opiniones totales</p>
              </div>
              
              <div className="text-center p-4">
                <h3 className="text-5xl font-bold text-green-400">{stats.verified}</h3>
                <div className="flex justify-center mt-3 mb-3">
                  <FaCheckCircle className="text-green-400 text-2xl" />
                </div>
                <p className="text-gray-400 font-medium">Verificadas</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700 flex justify-center">
              <Button
                variant="gradient"
                rounded="full"
                className="shadow-xl"
                size="lg"
                onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}
              >
                Escribe tu opinión
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de filtros y búsqueda */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-dark-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-xl p-6 mb-8"
              data-aos="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="w-full md:w-auto">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <FaFilter className="mr-2 text-primary-400" /> Filtrar y buscar
                </h3>
              </div>
              
              <div className="relative w-full md:w-96">
                <Input
                  placeholder="Buscar por nombre o contenido..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-dark-700 border-gray-600 focus:border-primary-500 pl-10 pr-10 py-6 rounded-xl shadow-inner"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400" />
                {searchTerm && (
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setSearchTerm('')}
                  >
                    ✕
                  </button>
                )}
              </div>
              
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <Button
                  onClick={() => setSortOrder(
                    sortOrder === 'recent' 
                      ? 'highest' 
                      : sortOrder === 'highest' 
                        ? 'lowest' 
                        : 'recent'
                  )}
                  variant="outline"
                  rounded="lg"
                  className="bg-dark-700 border-gray-600 flex-1 md:flex-none"
                  leftIcon={
                    sortOrder === 'recent' 
                      ? <FaSortAmountDown className="text-primary-400" /> 
                      : sortOrder === 'highest' 
                        ? <FaSortAmountUp className="text-yellow-400" /> 
                        : <FaSortAmountUp className="text-gray-400" />
                  }
                >
                  <span className="whitespace-nowrap">
                    {sortOrder === 'recent' 
                      ? 'Recientes' 
                      : sortOrder === 'highest' 
                        ? 'Mayor valoración' 
                        : 'Menor valoración'
                    }
                  </span>
                </Button>
                
                <Button
                  onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                  variant={isFiltersVisible ? "gradient" : "outline"}
                  rounded="lg"
                  className={isFiltersVisible ? "bg-primary-500" : "bg-dark-700 border-gray-600"}
                  leftIcon={<FaFilter />}
                >
                  Filtros
                </Button>
              </div>
            </div>
            
            {isFiltersVisible && (
              <div 
                className="mt-6 pt-6 border-t border-gray-700"
                data-aos={isFiltersVisible ? "fade-down" : ""}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="col-span-1 md:col-span-3">
                    <Label className="text-white mb-2 block">Filtrar por tipo de miembro</Label>
                    <Tabs 
                      defaultValue="all" 
                      value={filter} 
                      onValueChange={(value) => setFilter(value as any)}
                      className="w-full"
                    >
                      <TabsList className="bg-dark-700 grid grid-cols-4 rounded-xl p-1">
                        <TabsTrigger 
                          value="all" 
                          className={`rounded-lg data-[state=active]:bg-primary-500 data-[state=active]:text-white ${filter === 'all' ? 'shadow-lg' : ''}`}
                        >
                          Todas
                        </TabsTrigger>
                        <TabsTrigger 
                          value="member"
                          className={`rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white ${filter === 'member' ? 'shadow-lg' : ''}`}
                        >
                          <span className="flex items-center">
                            <FaUserCircle className="mr-1 hidden md:inline" /> Miembros
                          </span>
                        </TabsTrigger>
                        <TabsTrigger 
                          value="patreon"
                          className={`rounded-lg data-[state=active]:bg-yellow-500 data-[state=active]:text-white ${filter === 'patreon' ? 'shadow-lg' : ''}`}
                        >
                          <span className="flex items-center">
                            <FaStar className="mr-1 hidden md:inline" /> Patreon
                          </span>
                        </TabsTrigger>
                        <TabsTrigger 
                          value="moderator"
                          className={`rounded-lg data-[state=active]:bg-green-500 data-[state=active]:text-white ${filter === 'moderator' ? 'shadow-lg' : ''}`}
                        >
                          <span className="flex items-center">
                            <FaUserCircle className="mr-1 hidden md:inline" /> Mods
                          </span>
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  
                  <div className="col-span-1">
                    <Label className="text-white mb-2 block">Acciones</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        onClick={() => {
                          setSearchTerm('')
                          setFilter('all')
                          setSortOrder('recent')
                        }}
                        variant="outline"
                        rounded="lg"
                        className="bg-dark-700 border-gray-600"
                        size="sm"
                      >
                        Limpiar
                      </Button>
                      
                      <Button
                        onClick={() => setIsFiltersVisible(false)}
                        variant="gradient"
                        rounded="lg"
                        size="sm"
                      >
                        Aplicar
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                  <div className="bg-dark-700 px-4 py-2 rounded-lg border border-gray-600">
                    <p className="text-gray-300 text-sm flex items-center">
                      <FaComments className="mr-2 text-primary-400" />
                      Mostrando <span className="text-white font-bold mx-1">{filteredReviews.length}</span> de <span className="text-white font-bold mx-1">{reviews.length}</span> opiniones
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Sección de reseñas */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {filteredReviews.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-8 text-white flex items-center border-b border-gray-700 pb-4">
                <FaComments className="mr-3 text-primary-400" /> 
                Opiniones de nuestra comunidad
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedReviews.map((review, index) => (
                  <Card 
                    key={review.id}
                    className="bg-dark-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-visible"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <CardContent className="p-6 relative">
                      {/* Insignia de rol */}
                      <div className="absolute -top-4 -right-4 z-10">
                        {review.role === 'patreon' && (
                          <Badge className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold shadow-lg">
                            <FaStar className="mr-1" /> Patreon
                          </Badge>
                        )}
                        {review.role === 'moderator' && (
                          <Badge className="bg-green-500 text-black px-3 py-1 rounded-full font-semibold shadow-lg">
                            <FaUserCircle className="mr-1" /> Moderador
                          </Badge>
                        )}
                      </div>
                      
                      {/* Icono de comillas decorativo */}
                      <div className="absolute top-6 right-6 text-primary-500/10 pointer-events-none">
                        <FaQuoteRight size={48} />
                      </div>
                      
                      {/* Cabecera de la review */}
                      <div className="flex items-start mb-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-primary-500/20 bg-dark-700 mr-4 shadow-xl">
                          <Image
                            src={review.avatar || '/images/avatars/default.jpg'}
                            alt={review.author}
                            fill
                            className="object-cover"
                          />
                          {review.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-dark-800" title="Verificado">
                              <FaCheckCircle className="text-white text-xs" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {review.author}
                          </h3>
                          <span className="text-sm text-gray-400">{formatDate(review.date)}</span>
                          <div className="flex mt-1 space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Contenido de la review */}
                      <div className="relative mt-2">
                        <p className={expandedReview === review.id ? 'text-gray-300' : 'text-gray-300 line-clamp-4'}>
                          {review.content}
                        </p>
                        
                        {review.content.length > 150 && expandedReview !== review.id && (
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-dark-800 to-transparent pointer-events-none"></div>
                        )}
                        
                        {review.content.length > 150 && (
                          <button 
                            onClick={() => toggleExpandReview(review.id)}
                            className="mt-2 text-primary-400 hover:text-primary-300 text-sm font-medium focus:outline-none hover:underline"
                          >
                            {expandedReview === review.id ? 'Leer menos' : 'Leer más'}
                          </button>
                        )}
                      </div>
                      
                      {/* Acciones de usuario */}
                      <div className="mt-6 pt-4 border-t border-gray-700 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Tu valoración:</p>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => handleRateReview(review.id, star)}
                                onMouseEnter={() => setHoverStars(prev => ({...prev, [review.id]: star}))}
                                onMouseLeave={() => setHoverStars(prev => ({...prev, [review.id]: 0}))}
                                className="text-xl focus:outline-none transition-colors"
                              >
                                {star <= (hoverStars[review.id] || activeStars[review.id] || 0) ? (
                                  <FaStar className="text-yellow-400" />
                                ) : (
                                  <FaRegStar className="text-gray-400 hover:text-yellow-400" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Button
                            onClick={() => handleVote(review.id)}
                            variant="outline"
                            rounded="full"
                            className={`bg-dark-700 border-gray-600 hover:bg-dark-600 ${userVotes[review.id.toString()] ? 'text-primary-400 border-primary-400' : ''}`}
                            size="sm"
                            leftIcon={<FaThumbsUp className={userVotes[review.id.toString()] ? 'text-primary-400' : ''} />}
                            disabled={userVotes[review.id.toString()]}
                          >
                            <span>{review.helpful} útil{review.helpful !== 1 ? 'es' : ''}</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Botón de cargar más */}
              {displayedReviews.length < filteredReviews.length && (
                <div className="text-center mt-12">
                  <Button
                    onClick={loadMoreReviews}
                    variant="outline"
                    rounded="full"
                    className="bg-dark-800 border-gray-600 px-8 shadow-lg hover:shadow-xl transition-all"
                    leftIcon={loadingMore ? null : <FaChevronDown className="animate-bounce" />}
                    disabled={loadingMore}
                  >
                    {loadingMore ? 'Cargando...' : 'Cargar más opiniones'}
                  </Button>
                </div>
              )}
              
              {/* Contador de reseñas */}
              <div className="text-center mt-6">
                <p className="text-gray-400 text-sm">
                  Mostrando {displayedReviews.length} de {filteredReviews.length} opiniones
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="bg-dark-800 rounded-xl border border-gray-700 shadow-xl p-12 max-w-lg mx-auto">
                <div className="bg-dark-700 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <FaSearch className="text-gray-400 text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No hay resultados</h3>
                <p className="text-gray-300 mb-8">
                  No se encontraron opiniones que coincidan con tus criterios de búsqueda.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('')
                    setFilter('all')
                    setSortOrder('recent')
                  }}
                  variant="gradient"
                  rounded="full"
                  className="shadow-lg"
                >
                  Limpiar filtros
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="write-review" className="relative py-20 bg-dark-800">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-full h-64 bg-primary-500 filter blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-indigo-500 filter blur-[100px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div 
            className="bg-dark-900 rounded-3xl border border-gray-700 shadow-2xl p-8 md:p-12"
            data-aos="fade-up"
          >
            <div className="text-center mb-10">
              <Badge className="px-6 py-2 text-base font-medium rounded-full bg-indigo-500 text-white mb-6 shadow-lg inline-block">
                ¿Quieres compartir tu experiencia?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Abre un <span className="text-primary-400">ticket</span> en nuestro Discord
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                Para compartir tu experiencia y que tu opinión sea publicada en nuestra web, 
                por favor abre un ticket en nuestro servidor de Discord. 
                Nuestro equipo de moderación revisará tu opinión y la añadirá a la página.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
                <div className="bg-dark-800 border border-gray-700 rounded-xl p-6 text-center" data-aos="fade-up" data-aos-delay="100">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaDiscord className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Paso 1</h3>
                  <p className="text-gray-300 mb-4">
                    Únete a nuestro servidor oficial de Discord si aún no eres miembro
                  </p>
                </div>
                
                <div className="bg-dark-800 border border-gray-700 rounded-xl p-6 text-center" data-aos="fade-up" data-aos-delay="200">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaComments className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Paso 2</h3>
                  <p className="text-gray-300 mb-4">
                    Ve al canal de tickets y abre uno solicitando compartir tu opinión
                  </p>
                </div>
                
                <div className="bg-dark-800 border border-gray-700 rounded-xl p-6 text-center" data-aos="fade-up" data-aos-delay="300">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Paso 3</h3>
                  <p className="text-gray-300 mb-4">
                    Un moderador revisará tu solicitud y añadirá tu opinión si cumple los requisitos
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <Button 
                  href="https://discord.gg/gatitos2"
                  external
                  variant="gradient"
                  rounded="full"
                  size="lg"
                  className="px-12 shadow-xl"
                  leftIcon={<FaDiscord className="text-xl" />}
                >
                  Unirse a Discord
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
