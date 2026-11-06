import React from 'react';

/**
 * StageAtmosphere
 * Renders a vibrant, theatrical podium atmosphere with acoustic soundwaves,
 * warm spotlighting, and radiant academic jewel-tones that both students and teachers admire.
 */
export const StageAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Professional Stage Illumination (No harsh yellows or oranges) */}
      {/* Primary Signature Teal Spotlight (Top Left) */}
      <div 
        className="absolute -top-20 -left-20 w-[46rem] h-[46rem] rounded-full blur-[110px] opacity-45 dark:opacity-30 animate-aurora"
        style={{
          background: 'radial-gradient(circle, rgba(61, 171, 171, 0.45) 0%, rgba(13, 148, 136, 0.2) 50%, transparent 70%)'
        }}
      />

      {/* Elegant Crisp Ice-Blue / Azure Spotlight (Top Right - clean clarity & focus) */}
      <div 
        className="absolute -top-10 right-0 w-[48rem] h-[48rem] rounded-full blur-[120px] opacity-40 dark:opacity-25 animate-aurora"
        style={{
          animationDelay: '-5s',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 75%)'
        }}
      />

      {/* Deep Oxford Navy & Sapphire Ambient Glow (Center Right - academic poise) */}
      <div 
        className="absolute top-[35%] right-[-10%] w-[42rem] h-[42rem] rounded-full blur-[130px] opacity-35 dark:opacity-25 animate-float-slow"
        style={{
          animationDelay: '-2s',
          background: 'radial-gradient(circle, rgba(30, 58, 138, 0.3) 0%, rgba(14, 116, 144, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Pure Emerald-Teal Distinction Glow (Center Left) */}
      <div 
        className="absolute top-[50%] -left-28 w-[40rem] h-[40rem] rounded-full blur-[120px] opacity-35 dark:opacity-20 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(15, 118, 110, 0.35) 0%, rgba(20, 184, 166, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Subtle Cyan-Slate Foundation Mist (Bottom Center) */}
      <div 
        className="absolute bottom-5 left-1/3 w-[42rem] h-[42rem] rounded-full blur-[120px] opacity-30 dark:opacity-20 animate-aurora"
        style={{
          animationDelay: '-7s',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(61, 171, 171, 0.12) 50%, transparent 70%)'
        }}
      />



      {/* Delicate Acoustic Soundwave Curves SVG */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.06] text-[#3dabab]" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="soundwave-mesh" width="120" height="80" patternUnits="userSpaceOnUse">
            <path 
              d="M 0 40 Q 30 10 60 40 T 120 40" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2" 
            />
            <path 
              d="M 0 40 Q 30 70 60 40 T 120 40" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.8" 
              strokeDasharray="2 3" 
            />
            <circle cx="60" cy="40" r="1.5" fill="currentColor" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#soundwave-mesh)" />
      </svg>

      {/* Subtle Geometric Stage Matrix Pattern */}
      <div className="absolute inset-0 bg-stage-pattern opacity-70 dark:opacity-80" />
    </div>
  );
};
