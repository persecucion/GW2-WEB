// components/Statistics.tsx
import React from 'react';
import { FaUsers, FaUserShield, FaComments } from 'react-icons/fa';
import CountUp from 'react-countup'; // Asegúrate de instalar react-countup si aún no lo has hecho

const Statistics = () => {
  const members = 1200;  // Define tus valores aquí
  const staff = 50;      // Define tus valores aquí
  const messages = 500;  // Define tus valores aquí

  return (
    <section className="py-24 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/stats-bg.jpg')] opacity-10 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
            ESTADÍSTICAS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
            Nuestros Números
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <FaUsers className="text-5xl mb-4 text-blue-400" />, 
              title: "Miembros Activos", 
              value: members,
              suffix: "+",
              gradient: "from-blue-400 to-blue-600"
            },
            { 
              icon: <FaUserShield className="text-5xl mb-4 text-purple-400" />, 
              title: "Staff Dedicado", 
              value: staff,
              suffix: "",
              gradient: "from-purple-400 to-purple-600"
            },
            { 
              icon: <FaComments className="text-5xl mb-4 text-green-400" />, 
              title: "Mensajes Compartidos", 
              value: messages,
              suffix: "k",
              gradient: "from-green-400 to-green-600"
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative backdrop-blur-sm bg-gray-900/80 rounded-3xl p-8 text-center transform hover:-translate-y-2 transition-all duration-500 border border-gray-700/50">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">{stat.title}</h3>
                  <div className="relative">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={3}
                      separator=","
                      className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text`}
                    />
                    <span className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text ml-1`}>
                      {stat.suffix}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
