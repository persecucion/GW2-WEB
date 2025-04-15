import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
      <p className="mb-4">
        GW2 es una comunidad vibrante y acogedora de jugadores apasionados. Nos dedicamos a crear un espacio donde los gamers pueden conectarse, compartir experiencias y disfrutar juntos.
      </p>
      <p className="mb-4">
        Fundada en [año], nuestra comunidad ha crecido hasta convertirse en un hogar digital para miles de jugadores de todo el mundo. Nuestro objetivo es fomentar un ambiente inclusivo y divertido donde cada miembro pueda sentirse valorado y apoyado.
      </p>
      <p className="mb-4">
        En GW2, creemos en el poder de los videojuegos para unir a las personas. Organizamos eventos regulares, torneos y actividades sociales para mantener nuestra comunidad activa y comprometida.
      </p>
      <Link href="/" className="text-blue-400 hover:underline">
        Volver a la página principal
      </Link>
    </div>
  );
}
