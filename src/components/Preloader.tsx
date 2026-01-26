import React from 'react';

interface PreloaderProps {
  load: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ load }) => {
  return (
    <div
      className={`bg-custom-bg fixed inset-0 z-9999 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
        load ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated spinner */}
        <div className="loader"></div>

        {/* Text (optional) */}
        <div className="text-custom-accent animate-pulse font-mono text-sm tracking-widest">
          LOADING...
        </div>
      </div>
    </div>
  );
};
