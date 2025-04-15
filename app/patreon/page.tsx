'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheck, FaCrown, FaStar, FaDiscord, FaQuestionCircle, FaTimes, FaArrowRight, FaPatreon, FaUser } from 'react-icons/fa'
import Header from '../Header'
import Footer from '../Footer'
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../components/Card'
import { Button } from '../components/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Badge } from '../components/Badge'

interface PlanFeature {
  title: string
  included: boolean
}

interface PatreonPlan {
  id: string
  name: string
  price: string
  monthlyPrice: string
  yearly: boolean
  features: PlanFeature[]
  popular?: boolean
  image: string
  color: string
  gradient: string
  badge?: string
}

export default function PatreonPage() {
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [activeTab, setActiveTab] = useState<'plans' | 'faq' | 'testimonials'>('plans')
  
  useEffect(() => {
    // Scroll al inicio de la página cuando se carga
    window.scrollTo(0, 0)
    
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  
  // Planes Patreon disponibles
  const patreonPlans: PatreonPlan[] = [
    {
      id: 'gold',
      name: 'Gold',
      price: period === 'monthly' ? '3.99' : '39.99',
      monthlyPrice: '3.99',
      yearly: period === 'yearly',
      image: '/images/vip1.png',
      color: 'text-yellow-400',
      gradient: 'from-yellow-900/20 via-dark-700 to-yellow-900/10',
      features: [
        { title: 'Rango exclusivo Gold', included: true },
        { title: 'Permisos de imagen en general', included: true },
        { title: 'Acceso a canales exclusivos', included: true },
        { title: 'Participación prioritaria en sorteos', included: true },
        { title: 'Soundboard habilitado', included: false },
        { title: 'Inmunidad al slowmode', included: false },
        { title: 'Rol personalizado', included: false },
        { title: 'Canal privado exclusivo', included: false },
      ]
    },
    {
      id: 'diamond',
      name: 'Diamond',
      price: period === 'monthly' ? '5.99' : '59.99',
      monthlyPrice: '5.99',
      yearly: period === 'yearly',
      badge: 'Más popular',
      popular: true,
      image: '/images/vip2.png',
      color: 'text-blue-400',
      gradient: 'from-blue-900/20 via-dark-700 to-blue-900/10',
      features: [
        { title: 'Rango exclusivo Diamond', included: true },
        { title: 'Permisos de imagen en general', included: true },
        { title: 'Acceso a canales exclusivos', included: true },
        { title: 'Participación prioritaria en sorteos', included: true },
        { title: 'Soundboard habilitado', included: true },
        { title: 'Inmunidad al slowmode', included: true },
        { title: 'Rol personalizado', included: true },
        { title: 'Canal privado exclusivo', included: false },
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: period === 'monthly' ? '9.99' : '99.99',
      monthlyPrice: '9.99',
      yearly: period === 'yearly',
      image: '/images/vip3.png',
      color: 'text-purple-400',
      gradient: 'from-purple-900/20 via-dark-700 to-purple-900/10',
      features: [
        { title: 'Rango exclusivo Platinum', included: true },
        { title: 'Permisos de imagen en general', included: true },
        { title: 'Acceso a canales exclusivos', included: true },
        { title: 'Participación prioritaria en sorteos', included: true },
        { title: 'Soundboard habilitado', included: true },
        { title: 'Inmunidad al slowmode', included: true },
        { title: 'Rol personalizado', included: true },
        { title: 'Canal privado exclusivo', included: true },
      ]
    }
  ]
  
  // Preguntas frecuentes
  const faqs = [
    {
      question: '¿Cómo puedo adquirir un plan Patreon?',
      answer: 'Puedes adquirir un plan Patreon a través de la página oficial de Patreon. Una vez que hayas seleccionado el plan que te interesa, serás redirigido a un proceso de pago seguro.'
    },
    {
      question: '¿Cuál es la diferencia entre los planes Patreon?',
      answer: 'Cada plan Patreon ofrece diferentes niveles de ventajas. Los planes de nivel superior incluyen todas las características de los niveles inferiores más beneficios adicionales como roles personalizados, inmunidad al slowmode y canales privados.'
    },
    {
      question: '¿Puedo cambiar de plan una vez que me he suscrito?',
      answer: 'Sí, puedes actualizar o cambiar tu plan en cualquier momento a través de Patreon. Si decides actualizar a un plan superior, se te cobrará el nuevo monto en el siguiente ciclo de facturación.'
    },
    {
      question: '¿Se renueva automáticamente mi suscripción?',
      answer: 'Sí, todas las suscripciones de Patreon se renuevan automáticamente al final del período de facturación. Puedes cancelar la renovación automática en cualquier momento desde tu panel de usuario de Patreon.'
    },
    {
      question: '¿Hay reembolsos si no estoy satisfecho?',
      answer: 'Las políticas de reembolso se manejan directamente por Patreon. Te recomendamos revisar las políticas actuales de Patreon sobre reembolsos o contactar con su servicio de atención al cliente.'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-900">
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 bg-dark-800">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="bg-primary-900/30 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                Patreon
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Apoya nuestra <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Comunidad</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Únete a nuestro Patreon y obtén acceso a beneficios exclusivos mientras apoyas el crecimiento de nuestra comunidad.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <div className="container-custom mb-16">
          <div className="flex justify-center mb-12" data-aos="fade-up">
            <div className="inline-flex p-1 bg-dark-800 rounded-lg">
              {[
                { id: 'plans', label: 'Planes Patreon' },
                { id: 'faq', label: 'Preguntas Frecuentes' },
                { id: 'testimonials', label: 'Testimonios' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-primary-900 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(tab.id as any)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Period Toggle */}
        {activeTab === 'plans' && (
          <div className="container-custom">
            <div className="flex justify-center mb-20" data-aos="fade-up">
              <div className="inline-flex items-center bg-dark-800 p-2 rounded-full shadow-lg">
                <span className={`mr-4 font-medium px-4 py-2 rounded-full ${period === 'monthly' ? 'bg-primary-900 text-white' : 'text-gray-400'}`}>
                  Mensual
                </span>
                <div 
                  className="relative w-16 h-8 bg-dark-700 rounded-full cursor-pointer"
                  onClick={() => setPeriod(period === 'monthly' ? 'yearly' : 'monthly')}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-primary-500 rounded-full transition-all duration-300 transform ${
                      period === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                    } top-1`} 
                  />
                </div>
                <div className="ml-4 flex items-center">
                  <span className={`font-medium px-4 py-2 rounded-full ${period === 'yearly' ? 'bg-primary-900 text-white' : 'text-gray-400'}`}>
                    Anual
                  </span>
                  <span className="ml-3 text-xs bg-green-900 text-green-400 px-3 py-1 rounded-full">
                    20% Descuento
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Plans Section */}
        {activeTab === 'plans' && (
          <section className="pb-32 bg-dark-900">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {patreonPlans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`relative ${plan.popular ? 'transform -translate-y-4 md:scale-105' : ''}`}
                    data-aos="fade-up"
                  >
                    {plan.badge && (
                      <div className="absolute -top-5 inset-x-0 flex justify-center">
                        <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    
                    <Card 
                      variant="gradient" 
                      hover="lift"
                      shadow={plan.popular ? 'glow' : 'lg'}
                      className={`border border-gray-700 bg-dark-800`}
                    >
                      <CardHeader className="pt-8 pb-4">
                        <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg image-zoom bg-dark-900">
                          <Image 
                            src={plan.image} 
                            alt={plan.name} 
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-dark-900 opacity-50"></div>
                        </div>
                        <h3 className={`text-3xl font-bold text-center ${plan.color} mb-2`}>
                          {plan.name}
                        </h3>
                      </CardHeader>
                      
                      <CardContent className="pt-4 pb-6">
                        <div className="text-center mb-8">
                          <div className="flex items-center justify-center">
                            <span className="text-gray-400 mr-1 text-xl">€</span>
                            <span className={`text-5xl font-bold ${plan.color}`}>{plan.price}</span>
                            <span className="text-gray-400 ml-1 text-xl">/{period === 'monthly' ? 'mes' : 'año'}</span>
                          </div>
                          
                          {period === 'yearly' && (
                            <div className="mt-3 text-sm text-gray-400">
                              <span className="line-through">{(Number(plan.monthlyPrice) * 12).toFixed(2)}€</span>
                              <span className="ml-2 text-green-400">20% descuento</span>
                            </div>
                          )}
                        </div>
                        
                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-4 p-3 bg-dark-900 rounded-lg border border-gray-700 shadow-md">
                              {feature.included ? (
                                <FaCheck className={`mt-1 flex-shrink-0 ${plan.color}`} />
                              ) : (
                                <FaTimes className="mt-1 flex-shrink-0 text-gray-500" />
                              )}
                              <span className={feature.included ? 'text-gray-200' : 'text-gray-500'}>
                                {feature.title}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      
                      <CardFooter className="pt-2 pb-8">
                        <Button 
                          href="https://www.patreon.com/gatitos2"
                          external
                          variant={plan.popular ? 'gradient' : 'outline'}
                          rounded="default"
                          animation="float"
                          className="w-full py-3"
                          leftIcon={<FaPatreon />}
                        >
                          Suscribirse
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
              
              <div className="mt-20 text-center" data-aos="fade-up">
                <p className="text-gray-300 mb-10 max-w-2xl mx-auto bg-dark-800 p-6 rounded-lg border border-gray-700 shadow-lg">
                  Todos los planes incluyen prioridad de voz en los canales de Discord, notificación de eventos exclusivos y acceso prioritario a los sorteos.
                </p>
                <Link 
                  href="/contact" 
                  className="text-primary-400 hover:text-primary-300 inline-flex items-center bg-dark-800 p-4 rounded-lg border border-gray-700 shadow-md"
                >
                  ¿Tienes más preguntas sobre Patreon? Contáctanos <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <section className="pb-32 bg-dark-900">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto space-y-8">
                {faqs.map((faq, index) => (
                  <Card 
                    key={index} 
                    variant="glass"
                    hover="border"
                    className="bg-dark-800 border border-gray-700 shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-5">
                        <div className="bg-primary-900 p-4 rounded-lg mt-1">
                          <FaQuestionCircle className="text-primary-400 text-2xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-white">{faq.question}</h3>
                          <p className="text-gray-300 text-lg">{faq.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <div className="mt-16 text-center bg-dark-800 p-8 rounded-lg border border-gray-700 shadow-lg" data-aos="fade-up">
                  <h3 className="text-2xl font-bold mb-4 text-white">¿No encuentras respuesta a tu pregunta?</h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Podemos ayudarte con cualquier duda que tengas sobre Patreon. No dudes en contactarnos.
                  </p>
                  <Button 
                    href="/contact"
                    variant="gradient"
                    rounded="default"
                    animation="float"
                    className="py-3 px-6"
                    size="lg"
                  >
                    Contactar al Soporte
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {activeTab === 'testimonials' && (
          <section className="pb-32 bg-dark-900">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Alex",
                    role: "Patreon Diamond",
                    time: "1 año",
                    image: "/images/vip1.png",
                    text: "Los canales exclusivos para Patreon son increíbles, el contenido exclusivo vale totalmente la pena. Recomiendo a cualquiera que quiera apoyar la comunidad.",
                    rating: 5
                  },
                  {
                    name: "Sara",
                    role: "Patreon Platinum",
                    time: "7 meses",
                    image: "/images/vip2.png",
                    text: "Mi canal privado como Patreon Platinum me permite conectar con mis amigos en un espacio exclusivo. Los sorteos exclusivos también son fantásticos.",
                    rating: 5
                  },
                  {
                    name: "Carlos",
                    role: "Patreon Gold",
                    time: "3 meses",
                    image: "/images/vip3.png",
                    text: "Por el precio, el plan Gold en Patreon ofrece un gran valor. Los permisos adicionales y el acceso a canales exclusivos hacen que la experiencia sea mucho mejor.",
                    rating: 4
                  },
                  {
                    name: "Laura",
                    role: "Patreon Diamond",
                    time: "5 meses",
                    image: "/images/vip1.png",
                    text: "Desde que me convertí en Patreon, he disfrutado mucho más de la comunidad. La inmunidad al slowmode y el rol personalizado son mis características favoritas.",
                    rating: 5
                  },
                  {
                    name: "Mateo",
                    role: "Patreon Platinum",
                    time: "1 año",
                    image: "/images/vip2.png",
                    text: "Vale cada céntimo. Apoyar a través de Patreon es una excelente manera de contribuir, y los beneficios son increíbles. Muy recomendable.",
                    rating: 5
                  },
                  {
                    name: "Elena",
                    role: "Patreon Gold",
                    time: "4 meses",
                    image: "/images/vip3.png",
                    text: "Al principio dudaba, pero después de probar el plan Gold en Patreon, estoy muy contenta. Es una gran forma de apoyar a la comunidad mientras obtienes beneficios útiles.",
                    rating: 4
                  }
                ].map((testimonial, index) => (
                  <Card 
                    key={index} 
                    variant="default"
                    hover="glow"
                    className="h-full bg-dark-800 border border-gray-700 shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center gap-5 mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-500 shadow-md">
                          <Image 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                          <p className="text-primary-400">{testimonial.role} • {testimonial.time}</p>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={i < testimonial.rating ? "text-yellow-400" : "text-gray-600"} 
                                size={16}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          {/* Fondo sólido para áreas invisibles */}
          <div className="absolute inset-0 bg-dark-800"></div>
          <div className="absolute inset-0 bg-gradient-custom"></div>
          <div className="bg-dark-800 absolute top-0 left-0 right-0 h-16"></div>
          <div className="bg-dark-800 absolute bottom-0 left-0 right-0 h-16"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
            <FaPatreon className="text-7xl text-[#F96854] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Apóyanos en Patreon
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto bg-dark-800/80 p-6 rounded-lg border border-gray-700 shadow-lg">
              Conviértete en Patreon hoy y disfruta de los mejores beneficios mientras apoyas a nuestra comunidad.
            </p>
            <Button 
              href="https://www.patreon.com/gatitos2"
              external
              variant="gradient"
              size="lg"
              rounded="full"
              animation="float"
              className="px-12 py-5 text-xl button-pulse shadow-lg"
              leftIcon={<FaPatreon className="text-2xl" />}
            >
              Únete a Patreon
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 