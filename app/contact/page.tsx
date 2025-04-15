'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { 
  FaDiscord, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaTwitter, 
  FaCheck,
  FaSpinner
} from 'react-icons/fa'
import Header from '../Header'
import Footer from '../Footer'
import { Card, CardContent } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { Input } from '../components/Input'
import { Label } from '../components/Label'
import { Textarea } from '../components/Textarea'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Scroll al inicio cuando se carga la página
    window.scrollTo(0, 0)
    
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Éxito simulado
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (err) {
      setError('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-dark-800">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <span className="bg-primary-900/30 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
              Contacto
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Contacta con <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Nosotros</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Estamos aquí para ayudarte con cualquier pregunta o consulta que tengas sobre nuestra comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            {[
              {
                title: "Discord",
                description: "La forma más rápida de contactarnos es a través de nuestro servidor de Discord",
                icon: <FaDiscord className="text-white" size={24} />,
                action: {
                  label: "Unirse a Discord",
                  href: "https://discord.gg/gatitos2",
                  external: true
                },
                bgColor: "bg-indigo-600",
                borderColor: "border-indigo-500",
                delay: 100
              },
              {
                title: "Email",
                description: "Para consultas más formales, puedes contactarnos vía correo electrónico",
                icon: <FaEnvelope className="text-white" size={24} />,
                info: "contacto@gw2.com",
                bgColor: "bg-secondary-600",
                borderColor: "border-secondary-500",
                delay: 200
              },
              {
                title: "Horario de Soporte",
                description: "Nuestro equipo está disponible para atenderte en los siguientes horarios",
                icon: <FaClock className="text-white" size={24} />,
                info: "Lunes a Domingo: 10:00 - 22:00 (CET)",
                bgColor: "bg-purple-600",
                borderColor: "border-purple-500",
                delay: 300
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className={`bg-dark-800 border ${item.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center mb-6 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  
                  {item.action ? (
                    <Button
                      href={item.action.href}
                      external={item.action.external}
                      variant="default"
                      rounded="default"
                      className={item.bgColor}
                    >
                      {item.action.label}
                    </Button>
                  ) : (
                    <p className="text-white font-medium">{item.info}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 bg-dark-800">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div 
            className="bg-dark-700 rounded-2xl border border-gray-600 shadow-xl p-8 md:p-10"
            data-aos="fade-up"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Envíanos un Mensaje</h2>
              <p className="text-gray-300">
                Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-dark-600 rounded-xl border border-green-500 p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">¡Mensaje Enviado!</h3>
                <p className="text-gray-300 mb-8">
                  Gracias por contactarnos. Te responderemos a la mayor brevedad posible.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="secondary"
                  rounded="default"
                  className="bg-dark-700 border-gray-600"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-dark-600 border-gray-600 focus:border-primary-500"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-dark-600 border-gray-600 focus:border-primary-500"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-white mb-2">Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-dark-600 border-gray-600 focus:border-primary-500"
                    placeholder="Asunto de tu mensaje"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white mb-2">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-dark-600 border-gray-600 focus:border-primary-500"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    required
                  />
                </div>
                
                {error && (
                  <div className="p-4 rounded-lg bg-red-800 border border-red-500 text-white">
                    {error}
                  </div>
                )}
                
                <Button 
                  type="submit"
                  variant="default"
                  rounded="default"
                  className="w-full bg-primary-600 py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <FaSpinner className="animate-spin mr-2" />
                      Enviando...
                    </span>
                  ) : 'Enviar Mensaje'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div 
            className="bg-dark-700 rounded-3xl border border-primary-500 shadow-2xl p-8 md:p-12 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-300">
              ¿Prefieres hablar en tiempo real?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Únete a nuestra comunidad de Discord donde podrás hablar directamente con otros miembros y nuestro equipo de moderación.
            </p>
            <Button 
              href="https://discord.gg/gatitos2"
              external
              variant="default"
              size="lg"
              rounded="full"
              leftIcon={<FaDiscord className="text-xl" />}
              className="bg-indigo-600 border border-indigo-500 shadow-lg px-8 py-4"
            >
              Unirse a Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Location & FAQ Links */}
      <section className="relative py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-dark-700 rounded-xl border border-primary-500 shadow-xl p-8"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center shadow-lg mr-4">
                  <FaMapMarkerAlt className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">Ubicación</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Somos una comunidad global y online, con miembros de todas partes del mundo, principalmente de países hispanohablantes.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden border border-primary-500 shadow-lg">
                <div className="w-full h-full bg-dark-600 flex items-center justify-center">
                  <Image
                    src="/images/world-map.png"
                    alt="World Map"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div 
              className="bg-dark-700 rounded-xl border border-secondary-500 shadow-xl p-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary-600 flex items-center justify-center shadow-lg mr-4">
                  <FaCheck className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">Preguntas Frecuentes</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Revisa nuestras preguntas frecuentes para encontrar respuestas a las consultas más comunes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="bg-dark-600 p-4 rounded-lg border border-gray-600">
                  <h4 className="font-medium text-white mb-1">¿Cuánto tiempo tardan en contestar?</h4>
                  <p className="text-gray-300 text-sm">Generalmente respondemos en menos de 24 horas en días laborables.</p>
                </li>
                <li className="bg-dark-600 p-4 rounded-lg border border-gray-600">
                  <h4 className="font-medium text-white mb-1">¿Puedo solicitar una colaboración?</h4>
                  <p className="text-gray-300 text-sm">Sí, estamos abiertos a colaboraciones. Detalla tu propuesta en el formulario.</p>
                </li>
              </ul>
              <Button 
                href="/faq"
                variant="secondary"
                rounded="default"
                className="w-full bg-dark-600 border-gray-600 hover:border-secondary-500"
              >
                Ver todas las preguntas frecuentes
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 