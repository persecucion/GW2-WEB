"use client"

import { useState, useEffect } from "react"
import {
  FaStar,
  FaStarHalfAlt,
  FaFilter,
  FaSearch,
  FaUserCircle,
  FaCheckCircle,
  FaRegStar,
  FaSortAmountDown,
  FaSortAmountUp,
  FaThumbsUp,
  FaChevronDown,
  FaQuoteRight,
  FaComments,
  FaDiscord,
  FaTimes,
  FaInfo,
} from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "../Header"
import Footer from "../Footer"
import { Card, CardContent } from "../components/Card"
import { Button } from "../components/Button"
import { Badge } from "../components/Badge"
import { Input } from "../components/Input"
import { Label } from "../components/Label"
import { Tabs, TabsList, TabsTrigger } from "../components/Tabs"
import Image from "next/image"
// import { toast, ToastContainer } from '../components/Toast'

// Estilos para las animaciones de notificaciones
const notificationStyles = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    }
  }
  
  .animate-fade-in-down {
    animation: fadeInDown 0.3s ease-out forwards;
  }
  
  .animate-fade-out-up {
    animation: fadeOutUp 0.3s ease-in forwards;
  }
`

// Tipos
interface Review {
  id: number
  author: string
  avatar: string
  role: "member" | "patreon" | "moderator"
  rating: number
  content: string
  date: string
  verified: boolean
  helpful: number
  userRating?: number // Rating dado por el usuario actual
}

// Sistema de votos
interface VotesData {
  [reviewId: string]: boolean
}

// Sistema de ratings de usuario
interface UserRatingsData {
  [reviewId: string]: number
}

// Notificación
interface Notification {
  id: string
  type: "success" | "error" | "info" | "warning"
  message: string
  duration?: number
}

// Sistema de notificaciones simplificado
const showToast = (message: string, type: string) => {
  if (typeof window !== "undefined") {
    alert(`${type.toUpperCase()}: ${message}`)
  }
}

export default function ReviewsPage() {
  // Estado para las reseñas
  const [reviews, setReviews] = useState<Review[]>([])
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([])
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState<"all" | "member" | "patreon" | "moderator">("all")
  const [sortOrder, setSortOrder] = useState<"recent" | "highest" | "lowest">("recent")
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [userVotes, setUserVotes] = useState<VotesData>({})
  const [userRatings, setUserRatings] = useState<UserRatingsData>({})
  const [expandedReview, setExpandedReview] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 6
  const [loadingMore, setLoadingMore] = useState(false)
  const [activeStars, setActiveStars] = useState<{ [key: string]: number }>({})
  const [hoverStars, setHoverStars] = useState<{ [key: string]: number }>({})
  const [notification, setNotification] = useState<Notification | null>(null)

  // Sistema de notificaciones en página
  const showNotification = (type: "success" | "error" | "info" | "warning", message: string, duration = 3000) => {
    const id = Math.random().toString(36).substring(2, 9)
    setNotification({
      id,
      type,
      message,
      duration,
    })

    // Auto-cerrar la notificación después del tiempo
    if (duration > 0) {
      setTimeout(() => {
        setNotification((prev) => (prev?.id === id ? null : prev))
      }, duration)
    }
  }

  // Cerrar notificación manualmente
  const closeNotification = () => {
    setNotification(null)
  }

  // Función para expandir/colapsar una reseña
  const toggleExpandReview = (reviewId: number) => {
    setExpandedReview(expandedReview === reviewId ? null : reviewId)
  }

  // Cargar reseñas desde el archivo JSON
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== "undefined") {
      // Cargar los datos desde la API
      fetch("/api/reviews")
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se pudo cargar el archivo de reseñas")
          }
          return response.json()
        })
        .then((data) => {
          setReviews(data)
          setFilteredReviews(data)
        })
        .catch((error) => {
          console.error("Error al cargar las reseñas:", error)
          // No mostrar alerta al usuario, simplemente loguear el error
        })

      // Cargar votos guardados para mostrar UI correcta (solo para esta sesión)
      const savedVotes = localStorage.getItem("gw2_review_votes")
      if (savedVotes) {
        try {
          setUserVotes(JSON.parse(savedVotes))
        } catch (error) {
          console.error("Error al cargar votos guardados:", error)
        }
      }

      // Cargar ratings guardados para mostrar UI correcta (solo para esta sesión)
      const savedRatings = localStorage.getItem("gw2_user_ratings")
      if (savedRatings) {
        try {
          const ratings = JSON.parse(savedRatings)
          setUserRatings(ratings)

          // Actualizar UI de estrellas activas
          const activeStarsState: { [key: string]: number } = {}
          Object.entries(ratings).forEach(([reviewId, rating]) => {
            activeStarsState[reviewId] = rating as number
          })
          setActiveStars(activeStarsState)
        } catch (error) {
          console.error("Error al cargar ratings guardados:", error)
        }
      }

      // Inicializar AOS
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      })

      // Scroll to top
      window.scrollTo(0, 0)
    }
  }, [])

  // Función para votar en una reseña
  const handleVote = async (reviewId: number) => {
    // Verificar si el usuario ya votó
    const reviewIdStr = reviewId.toString()
    if (userVotes[reviewIdStr]) {
      showNotification("warning", "Ya has marcado esta reseña como útil anteriormente.")
      return
    }

    try {
      // Llamar a la API para guardar el voto
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewId,
          action: "vote",
          value: 1,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al guardar el voto")
      }

      const data = await response.json()

      // Actualizar el estado local
      const updatedReviews = reviews.map((review) => {
        if (review.id === reviewId) {
          return {
            ...review,
            helpful: data.review.helpful,
          }
        }
        return review
      })

      // Guardar el voto del usuario (solo para esta sesión)
      const updatedVotes = {
        ...userVotes,
        [reviewIdStr]: true,
      }
      setUserVotes(updatedVotes)

      // Actualizar el estado
      setReviews(updatedReviews)
      setFilteredReviews((prev) =>
        prev.map((review) => (review.id === reviewId ? { ...review, helpful: data.review.helpful } : review)),
      )

      // Guardar voto en localStorage (solo para esta sesión)
      localStorage.setItem("gw2_review_votes", JSON.stringify(updatedVotes))

      // Mostrar confirmación
      showNotification("success", "Gracias por valorar esta reseña como útil.")
    } catch (error) {
      console.error("Error al votar:", error)
      showNotification("error", "No se pudo guardar tu voto. Inténtalo de nuevo más tarde.")
    }
  }

  // Función para calificar una reseña
  const handleRateReview = async (reviewId: number, rating: number) => {
    const reviewIdStr = reviewId.toString()

    try {
      // Llamar a la API para guardar la calificación
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewId,
          action: "rate",
          value: rating,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al guardar la calificación")
      }

      const data = await response.json()

      // Guardar la calificación del usuario (solo para esta sesión)
      const updatedRatings = {
        ...userRatings,
        [reviewIdStr]: rating,
      }
      setUserRatings(updatedRatings)

      // Actualizar UI de estrellas
      setActiveStars((prev) => ({
        ...prev,
        [reviewIdStr]: rating,
      }))

      // Guardar rating en localStorage (solo para esta sesión)
      localStorage.setItem("gw2_user_ratings", JSON.stringify(updatedRatings))

      // Actualizar el estado de las reseñas con la nueva calificación promedio
      if (data.review && data.review.rating) {
        const updatedReviews = reviews.map((review) => {
          if (review.id === reviewId) {
            return {
              ...review,
              rating: data.review.rating,
            }
          }
          return review
        })

        setReviews(updatedReviews)
        setFilteredReviews((prev) =>
          prev.map((review) => (review.id === reviewId ? { ...review, rating: data.review.rating } : review)),
        )
      }

      // Mostrar confirmación
      showNotification("success", `Has calificado esta opinión con ${rating} estrellas.`)
    } catch (error) {
      console.error("Error al calificar:", error)
      showNotification("error", "No se pudo guardar tu calificación. Inténtalo de nuevo más tarde.")
    }
  }

  // Filtrar y ordenar reseñas
  useEffect(() => {
    let result = [...reviews]

    // Filtrar por rol
    if (filter !== "all") {
      result = result.filter((review) => review.role === filter)
    }

    // Filtrar por término de búsqueda
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase()
      result = result.filter(
        (review) =>
          review.author.toLowerCase().includes(searchLower) || review.content.toLowerCase().includes(searchLower),
      )
    }

    // Ordenar
    switch (sortOrder) {
      case "recent":
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "highest":
        result.sort((a, b) => {
          const ratingA = a.userRating || a.rating || 0
          const ratingB = b.userRating || b.rating || 0
          return ratingB - ratingA
        })
        break
      case "lowest":
        result.sort((a, b) => {
          const ratingA = a.userRating || a.rating || 0
          const ratingB = b.userRating || b.rating || 0
          return ratingA - ratingB
        })
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
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("es-ES", options)
  }

  // Estadísticas de las reseñas
  const calculateStats = () => {
    if (reviews.length === 0) return { avg: 0, total: 0, verified: 0 }

    const total = reviews.length
    const verified = reviews.filter((r) => r.verified).length

    // Calcular promedio usando valoraciones precargadas
    const sum = reviews.reduce((acc, review) => {
      // Usar valoración precargada para el promedio general
      return acc + (review.rating || 0)
    }, 0)

    const avg = Math.round((sum / total) * 10) / 10

    return { avg, total, verified }
  }

  const stats = calculateStats()

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Estilos CSS para animaciones */}
      <style jsx global>
        {notificationStyles}
      </style>

      <Header />

      {/* Componente de notificación */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 max-w-md animate-fade-in-down">
          <div
            className={`
              rounded-lg shadow-lg border p-4 flex items-start transform transition-all duration-300
              ${
                notification.type === "success"
                  ? "bg-green-900/90 border-green-500"
                  : notification.type === "error"
                    ? "bg-red-900/90 border-red-500"
                    : notification.type === "warning"
                      ? "bg-yellow-900/90 border-yellow-500"
                      : "bg-blue-900/90 border-blue-500"
              }
            `}
          >
            <div className="flex-shrink-0 mr-3">
              {notification.type === "success" && <FaCheckCircle className="w-5 h-5 text-green-400" />}
              {notification.type === "error" && <FaTimes className="w-5 h-5 text-red-400" />}
              {notification.type === "warning" && <FaInfo className="w-5 h-5 text-yellow-400" />}
              {notification.type === "info" && <FaInfo className="w-5 h-5 text-blue-400" />}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{notification.message}</p>
            </div>
            <button
              onClick={closeNotification}
              className="ml-4 flex-shrink-0 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-24 bg-dark-950 overflow-hidden">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/images/patterns/grid.svg")',
              backgroundSize: "30px 30px",
              transform: "rotate(45deg)",
            }}
          ></div>
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
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                miembros
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Descubre por qué nuestra comunidad GW2 es valorada por sus miembros. Opiniones reales de jugadores reales.
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
                <div className="flex justify-center space-x-1 my-3">{renderStars(stats.avg)}</div>
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
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
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
          <div
            className="bg-dark-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-xl p-6 mb-8"
            data-aos="fade-up"
          >
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
                    onClick={() => setSearchTerm("")}
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-3 w-full md:w-auto">
                <Button
                  onClick={() =>
                    setSortOrder(sortOrder === "recent" ? "highest" : sortOrder === "highest" ? "lowest" : "recent")
                  }
                  variant="outline"
                  rounded="lg"
                  className="bg-dark-700 border-gray-600 flex-1 md:flex-none"
                  leftIcon={
                    sortOrder === "recent" ? (
                      <FaSortAmountDown className="text-primary-400" />
                    ) : sortOrder === "highest" ? (
                      <FaSortAmountUp className="text-yellow-400" />
                    ) : (
                      <FaSortAmountUp className="text-gray-400" />
                    )
                  }
                >
                  <span className="whitespace-nowrap">
                    {sortOrder === "recent"
                      ? "Recientes"
                      : sortOrder === "highest"
                        ? "Mayor valoración"
                        : "Menor valoración"}
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
              <div className="mt-6 pt-6 border-t border-gray-700" data-aos={isFiltersVisible ? "fade-down" : ""}>
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
                          className={`rounded-lg data-[state=active]:bg-primary-500 data-[state=active]:text-white ${filter === "all" ? "shadow-lg" : ""}`}
                        >
                          Todas
                        </TabsTrigger>
                        <TabsTrigger
                          value="member"
                          className={`rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white ${filter === "member" ? "shadow-lg" : ""}`}
                        >
                          <span className="flex items-center">
                            <FaUserCircle className="mr-1 hidden md:inline" /> Miembros
                          </span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="patreon"
                          className={`rounded-lg data-[state=active]:bg-yellow-500 data-[state=active]:text-white ${filter === "patreon" ? "shadow-lg" : ""}`}
                        >
                          <span className="flex items-center">
                            <FaStar className="mr-1 hidden md:inline" /> Patreon
                          </span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="moderator"
                          className={`rounded-lg data-[state=active]:bg-green-500 data-[state=active]:text-white ${filter === "moderator" ? "shadow-lg" : ""}`}
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
                          setSearchTerm("")
                          setFilter("all")
                          setSortOrder("recent")
                        }}
                        variant="outline"
                        rounded="lg"
                        className="bg-dark-700 border-gray-600"
                        size="sm"
                      >
                        Limpiar
                      </Button>

                      <Button onClick={() => setIsFiltersVisible(false)} variant="gradient" rounded="lg" size="sm">
                        Aplicar
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                  <div className="bg-dark-700 px-4 py-2 rounded-lg border border-gray-600">
                    <p className="text-gray-300 text-sm flex items-center">
                      <FaComments className="mr-2 text-primary-400" />
                      Mostrando <span className="text-white font-bold mx-1">{filteredReviews.length}</span> de{" "}
                      <span className="text-white font-bold mx-1">{reviews.length}</span> opiniones
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
                        {review.role === "patreon" && (
                          <Badge className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold shadow-lg">
                            <FaStar className="mr-1" /> Patreon
                          </Badge>
                        )}
                        {review.role === "moderator" && (
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
                            src={review.avatar || "/images/avatars/default.jpg"}
                            alt={review.author}
                            fill
                            className="object-cover"
                          />
                          {review.verified && (
                            <div
                              className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-dark-800"
                              title="Verificado"
                            >
                              <FaCheckCircle className="text-white text-xs" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{review.author}</h3>
                          <span className="text-sm text-gray-400">{formatDate(review.date)}</span>
                          <div className="flex mt-1 space-x-1">
                            {/* Mostrar estrellas - dar prioridad a la valoración personal si existe */}
                            {renderStars(activeStars[review.id.toString()] || review.rating || 0)}
                          </div>
                        </div>
                      </div>

                      {/* Contenido de la review */}
                      <div className="relative mt-2">
                        <p className={expandedReview === review.id ? "text-gray-300" : "text-gray-300 line-clamp-4"}>
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
                            {expandedReview === review.id ? "Leer menos" : "Leer más"}
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
                                onMouseEnter={() => setHoverStars((prev) => ({ ...prev, [review.id]: star }))}
                                onMouseLeave={() => setHoverStars((prev) => ({ ...prev, [review.id]: 0 }))}
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
                            className={`bg-dark-700 border-gray-600 hover:bg-dark-600 ${userVotes[review.id.toString()] ? "text-primary-400 border-primary-400" : ""}`}
                            size="sm"
                            leftIcon={
                              <FaThumbsUp className={userVotes[review.id.toString()] ? "text-primary-400" : ""} />
                            }
                            disabled={userVotes[review.id.toString()]}
                          >
                            <span>
                              {review.helpful} útil{review.helpful !== 1 ? "es" : ""}
                            </span>
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
                    {loadingMore ? "Cargando..." : "Cargar más opiniones"}
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
                    setSearchTerm("")
                    setFilter("all")
                    setSortOrder("recent")
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
          <div className="bg-dark-900 rounded-3xl border border-gray-700 shadow-2xl p-8 md:p-12" data-aos="fade-up">
            <div className="text-center mb-10">
              <div className="inline-block relative mb-6">
                <span className="bg-gradient-to-r from-indigo-600 to-primary-500 text-white text-sm font-semibold px-5 py-1.5 rounded-full">
                  Comparte tu experiencia
                </span>
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-primary-500"></span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Abre un{" "}
                <span className="bg-gradient-to-r from-primary-400 to-indigo-500 bg-clip-text text-transparent">
                  ticket
                </span>{" "}
                en nuestro Discord
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                Para compartir tu experiencia y que tu opinión sea publicada en nuestra web, por favor abre un ticket en
                nuestro servidor de Discord. Nuestro equipo de moderación revisará tu opinión y la añadirá a la página.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
                <div
                  className="bg-dark-800 border border-gray-700 rounded-xl p-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaDiscord className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Paso 1</h3>
                  <p className="text-gray-300 mb-4">
                    Únete a nuestro servidor oficial de Discord si aún no eres miembro
                  </p>
                </div>

                <div
                  className="bg-dark-800 border border-gray-700 rounded-xl p-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaComments className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Paso 2</h3>
                  <p className="text-gray-300 mb-4">
                    Ve al canal de tickets y abre uno solicitando compartir tu opinión
                  </p>
                </div>

                <div
                  className="bg-dark-800 border border-gray-700 rounded-xl p-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
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
