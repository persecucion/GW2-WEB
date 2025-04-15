'use client'

import type React from "react"
import { Card, CardContent } from ".//Card"
import { FaCheckCircle, FaStar, FaLock, FaShieldAlt, FaCrown } from "react-icons/fa"
import Image from "next/image"

export const VIPBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Acceso Exclusivo",
      description: "Obtén acceso a canales y contenido solo para VIP.",
      icon: FaLock,
      color: "text-yellow-500",
      image: "/images/vip-access.jpg",
      features: ["Canales exclusivos", "Contenido premium", "Eventos especiales"],
    },
    {
      title: "Recompensas Especiales",
      description: "Participa en sorteos y eventos exclusivos para miembros VIP.",
      icon: FaStar,
      color: "text-blue-500",
      image: "/images/vip-rewards.jpg",
      features: ["Sorteos semanales", "Premios exclusivos", "Eventos VIP"],
    },
    {
      title: "Soporte Prioritario",
      description: "Recibe soporte técnico y asistencia personalizada.",
      icon: FaShieldAlt,
      color: "text-green-500",
      image: "/images/vip-support.jpg",
      features: ["Atención 24/7", "Soporte personalizado", "Resolución rápida"],
    },
    {
      title: "Rango VIP",
      description: "Destaca en la comunidad con un rango VIP exclusivo.",
      icon: FaCrown,
      color: "text-purple-500",
      image: "/images/vip-rank.jpg",
      features: ["Insignia especial", "Nombre destacado", "Beneficios exclusivos"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {benefits.map((benefit, index) => (
        <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 overflow-hidden">
          <div className="relative h-48">
            <Image src={benefit.image || "/placeholder.svg"} alt={benefit.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
            <div className="absolute bottom-4 left-4 flex items-center">
              <benefit.icon className={`mr-2 h-6 w-6 ${benefit.color}`} />
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
            </div>
          </div>

          <CardContent className="space-y-4 p-6">
            <p className="text-gray-300">{benefit.description}</p>
            <ul className="space-y-2">
              {benefit.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-400">
                  <FaCheckCircle className={`h-4 w-4 ${benefit.color}`} />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
