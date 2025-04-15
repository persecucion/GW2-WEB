// components/AboutUs.tsx
import React from 'react';
import Image from 'next/image';
import { FaGamepad, FaStar, FaHeart } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
            SOBRE NOSOTROS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Somos más que un servidor de Discord - somos una familia global unida por la pasión por los videojuegos y la amistad sincera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Eventos en Vivo",
              description: "Participa en eventos exclusivos y transmisiones en vivo con nuestra comunidad.",
              image: "/images/evento.png",
              icon: <FaGamepad className="text-4xl text-blue-400" />
            },
            {
              title: "Contenido Premium",
              description: "Accede a sorteos y contenido exclusivo creado especialmente para ti.",
              image: "/images/sorteo.png",
              icon: <FaStar className="text-4xl text-yellow-400" />
            },
            {
              title: "Comunidad Global",
              description: "Conecta con personas de todo el mundo y forma parte de algo más grande.",
              image: "/images/server.png",
              icon: <FaHeart className="text-4xl text-pink-400" />
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-750 transition-all duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="p-6">
                <div className="mb-4 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  {item.icon}
                </div>
                
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
