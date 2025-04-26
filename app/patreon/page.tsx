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
                <FaPatreon className="inline-block mr-2 text-[#F96854]" /> APOYA NUESTRA COMUNIDAD
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Conviértete en </span>
              <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Patreon</span>
            </h1>
            
            <p className="text-lg text-blue-100/80 mb-10 max-w-4xl mx-auto">
              Únete a nuestro Patreon y obtén acceso a beneficios exclusivos mientras apoyas el crecimiento de nuestra comunidad de Guild Wars 2.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation - Modernized */}
      <section className="relative pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center" data-aos="fade-up">
            <div className="inline-flex p-1 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/80 shadow-lg">
              {[
                { id: 'plans', label: 'Planes Patreon', icon: <FaCrown className="mr-2" /> },
                { id: 'faq', label: 'Preguntas Frecuentes', icon: <FaQuestionCircle className="mr-2" /> },
                { id: 'testimonials', label: 'Testimonios', icon: <FaUser className="mr-2" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  onClick={() => setActiveTab(tab.id as any)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Period Toggle - Modernized */}
      {activeTab === 'plans' && (
        <section className="relative pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center mb-12" data-aos="fade-up">
              <div className="inline-flex items-center bg-gray-900/80 backdrop-blur-sm p-2 rounded-xl border border-gray-800/80 shadow-lg">
                <button 
                  className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                    period === 'monthly' 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setPeriod('monthly')}
                >
                  Mensual
                </button>
                
                <div className="mx-3 text-gray-500">|</div>
                
                <button 
                  className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                    period === 'yearly' 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setPeriod('yearly')}
                >
                  Anual
                  <span className="ml-2 text-xs bg-green-900/80 text-green-400 px-2 py-0.5 rounded-full">
                    20% Descuento
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Plans Section - Modernized */}
      {activeTab === 'plans' && (
        <section className="relative pb-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 -top-24 -right-24 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute w-96 h-96 -bottom-24 -left-24 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {patreonPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`relative ${plan.popular ? 'md:-translate-y-4' : ''}`}
                  data-aos="fade-up"
                >
                  {plan.badge && (
                    <div className="absolute -top-5 inset-x-0 flex justify-center z-10">
                      <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg border border-yellow-400/30 flex items-center gap-1">
                        <FaStar className="text-white" />
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className={`relative bg-gradient-to-br from-gray-900/90 to-gray-950 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
                    <div className="relative">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={plan.image} 
                          alt={plan.name} 
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-transparent"></div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className={`text-3xl font-bold text-center mb-4 bg-gradient-to-r ${
                        plan.id === 'gold' ? 'from-yellow-400 to-yellow-600' :
                        plan.id === 'diamond' ? 'from-blue-400 to-blue-600' :
                        'from-purple-400 to-purple-600'
                      } bg-clip-text text-transparent`}>
                        {plan.name}
                      </h3>
                      
                      <div className="text-center mb-8">
                        <div className="flex items-center justify-center">
                          <span className="text-gray-400 mr-1 text-xl">€</span>
                          <span className={`text-5xl font-bold text-white`}>{plan.price}</span>
                          <span className="text-gray-400 ml-1 text-xl">/{period === 'monthly' ? 'mes' : 'año'}</span>
                        </div>
                        
                        {period === 'yearly' && (
                          <div className="mt-3 text-sm">
                            <span className="text-gray-500 line-through">{(Number(plan.monthlyPrice) * 12).toFixed(2)}€</span>
                            <span className="ml-2 text-green-400">20% descuento</span>
                          </div>
                        )}
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                            {feature.included ? (
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                plan.id === 'gold' ? 'bg-yellow-500' :
                                plan.id === 'diamond' ? 'bg-blue-500' :
                                'bg-purple-500'
                              }`}>
                                <FaCheck className="text-white text-xs" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gray-700">
                                <FaTimes className="text-gray-500 text-xs" />
                              </div>
                            )}
                            <span className={feature.included ? 'text-gray-200' : 'text-gray-500'}>
                              {feature.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <button 
                        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                          plan.popular 
                            ? `bg-gradient-to-r ${
                              plan.id === 'gold' ? 'from-yellow-600 to-yellow-700' :
                              plan.id === 'diamond' ? 'from-blue-600 to-blue-700' :
                              'from-purple-600 to-purple-700'
                            } text-white hover:shadow-lg`
                            : 'bg-gray-800 border border-gray-700 text-white hover:bg-gray-700'
                        }`}
                      >
                        <FaPatreon className="mr-2" /> Suscribirse
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center" data-aos="fade-up">
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-950 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-lg max-w-3xl mx-auto">
                <p className="text-gray-300 mb-4">
                  Todos los planes incluyen prioridad de voz en los canales de Discord, notificación de eventos exclusivos y acceso prioritario a los sorteos.
                </p>
                <Link 
                  href="/contact" 
                  className="text-primary-400 hover:text-primary-300 inline-flex items-center"
                >
                  ¿Tienes más preguntas sobre Patreon? Contáctanos <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section - Modernized */}
      {activeTab === 'faq' && (
        <section className="relative pb-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 -top-24 -right-24 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute w-96 h-96 -bottom-24 -left-24 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/90 to-gray-950 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-lg shadow-lg flex-shrink-0">
                        <FaQuestionCircle className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-950 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-700/50 shadow-lg mt-12" data-aos="fade-up">
                <h3 className="text-2xl font-bold mb-4 text-white">¿No encuentras respuesta a tu pregunta?</h3>
                <p className="text-gray-300 mb-6">
                  Podemos ayudarte con cualquier duda que tengas sobre Patreon. No dudes en contactarnos.
                </p>
                <button 
                  className="py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                >
                  Contactar al Soporte
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section - Modernized */}
      {activeTab === 'testimonials' && (
        <section className="relative pb-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 -top-24 -right-24 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute w-96 h-96 -bottom-24 -left-24 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900/90 to-gray-950 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/10 hover:border-blue-500/30"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500 shadow-md">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                        <p className="text-blue-400">{testimonial.role} • {testimonial.time}</p>
                        <div className="flex mt-1">
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
                    <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA - Modernized */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
        
        {/* Decorative orbs */}
        <div className="absolute top-1/3 right-20 w-64 h-64 rounded-full bg-blue-900/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-20 w-64 h-64 rounded-full bg-purple-900/10 blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-primary-500/20 p-8 md:p-12">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-[#F96854]/20 to-[#F96854]/10 rounded-full mb-6 border border-[#F96854]/30">
              <FaPatreon className="text-4xl text-[#F96854]" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Apóyanos en </span>
              <span className="bg-gradient-to-r from-[#F96854] to-[#FF7863] bg-clip-text text-transparent">Patreon</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Conviértete en Patreon hoy y disfruta de los mejores beneficios mientras apoyas a nuestra comunidad.
            </p>
            
            <button 
              className="px-8 py-4 bg-gradient-to-r from-[#F96854] to-[#FF7863] text-white font-medium rounded-lg shadow-lg hover:from-[#FF7863] hover:to-[#F96854] transition-all duration-300 flex items-center justify-center mx-auto"
            >
              <FaPatreon className="mr-2" /> Únete a Patreon
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
