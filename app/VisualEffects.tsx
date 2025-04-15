// components/VisualEffects.tsx
import React from 'react';
import Snowfall from 'react-snowfall'; // Asegúrate de tener este paquete instalado

const VisualEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Snowfall
        snowflakeCount={200}
        radius={[0.5, 3.0]}
        speed={[0.5, 3.0]}
        wind={[-0.5, 2.0]}
        color="rgba(255, 255, 255, 0.2)"
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-purple-900/10"></div>
    </div>
  );
};

export default VisualEffects;
