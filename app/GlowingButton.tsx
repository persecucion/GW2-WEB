'use client';

import React, { useState, useRef, useEffect } from 'react';

interface GlowingButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ href, children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    if (isHovered) {
      window.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isHovered]);

  return (
    <a
      href={href}
      ref={buttonRef}
      className={`relative inline-flex items-center px-6 py-3 overflow-hidden rounded-full transition-all duration-300 ease-out group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:bg-gradient-to-r from-blue-600 to-blue-800"></span>
      <span className="relative z-10 flex items-center">{children}</span>
      {isHovered && (
        <span
          className="absolute inset-0 w-full h-full transition-all duration-400 ease-out"
          style={{
            background: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.6), transparent)`,
            mixBlendMode: 'screen',
            filter: 'blur(5px)',
          }}
        ></span>
      )}
    </a>
  );
};

export default GlowingButton;

