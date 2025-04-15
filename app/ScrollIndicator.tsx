// components/ScrollIndicator.tsx
import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scrolldown"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
