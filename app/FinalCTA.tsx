import React from 'react';
import { FaDiscord, FaArrowRight } from 'react-icons/fa';
import GlowingButton from './GlowingButton';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10" data-aos="fade-up">
        <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
          ÚNETE AHORA
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text">
          ¿Listo para ser parte de algo especial?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          No esperes más para unirte a la comunidad más acogedora de Discord.
        </p>
        <GlowingButton
          href="https://discord.gg/gatitos2"
          className="relative group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 overflow-hidden"
        >
          <span className="relative flex items-center">
            <FaDiscord className="mr-2 text-xl transform group-hover:scale-110 transition-transform duration-300" />
            <span>Únete Ahora</span>
            <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </GlowingButton>
      </div>
    </section>
  );
};

export default FinalCTA;
