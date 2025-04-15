// components/Testimonials.tsx
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
            TESTIMONIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
            Lo Que Dicen Nuestros Miembros
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Ana G.",
              role: "Miembro desde 2021",
              quote: "GW2 no es solo un servidor, es mi segunda familia. Aquí he encontrado amigos increíbles y momentos inolvidables.",
            },
            {
              name: "Carlos M.",
              role: "Moderador",
              quote: "Como moderador, puedo decir que la comunidad de GW2 es única. El respeto y la camaradería que se vive aquí es incomparable.",
            },
            {
              name: "Laura S.",
              role: "Streamer Asociada",
              quote: "Gracias a GW2, mi experiencia como streamer ha crecido exponencialmente. El apoyo de la comunidad es increíble.",
            },
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <FaQuoteLeft className="text-3xl text-blue-400 mb-4" />
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
