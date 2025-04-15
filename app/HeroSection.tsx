// components/HeroSection.tsx
import React from 'react';
import GlowingButton from './GlowingButton'; // Asegúrate de importar tu componente GlowingButton
import { FaDiscord, FaArrowRight } from 'react-icons/fa';
import InteractiveBackground from './InteractiveBackground'; // Importa el componente de fondo interactivo

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <InteractiveBackground />
      
      {/* Fondo oscuro con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80 z-10"></div>
      
      {/* Contenido principal */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-6 pt-24">
        <h1 
          className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text animate-gradient-x"
          data-aos="zoom-in"
        >
          Bienvenido a GW2
        </h1>
        <p 
          className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Descubre una comunidad única donde cada momento se convierte en una experiencia inolvidable.
        </p>
        
        {/* Botón para unirse */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <GlowingButton
            href="https://discord.gg/gatitos2"
            className="relative group px-8 py-4 bg-blue-600 text-white rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 overflow-hidden"
          >
            <span className="relative flex items-center">
              <FaDiscord className="mr-2 text-xl" />
              Únete a la Aventura
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </GlowingButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
