// /app/InteractiveBackground.tsx
import React, { useEffect, useState } from 'react';

const InteractiveBackground = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = document.querySelector('.background-effect') as HTMLElement;
      if (element) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        element.style.transform = `translate(-${x}%, -${y}%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`interactive-background ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="background-effect">
        <h1 className="text-white text-4xl font-bold">Fondo Interactivo</h1>
      </div>
    </div>
  );
};

export default InteractiveBackground;
