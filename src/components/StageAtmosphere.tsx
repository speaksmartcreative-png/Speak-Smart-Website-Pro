import React from 'react';

/**
 * StageAtmosphere
 * Renders a vibrant, theatrical podium atmosphere with acoustic soundwaves,
 * warm spotlighting, and radiant academic jewel-tones that both students and teachers admire.
 */
export const StageAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Multi-Chromatic Luminous Stage Spotlights */}
      {/* Primary Electric Teal Stage Spotlight (Top Left) */}
      <div 
        className="absolute -top-20 -left-20 w-[46rem] h-[46rem] rounded-full blur-[100px] opacity-60 dark:opacity-40 animate-aurora"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 165, 0.5) 0%, rgba(6, 182, 212, 0.25) 45%, transparent 70%)'
        }}
      />

      {/* Champion Radiant Gold & Amber Podium Beam (Top Right - represents student victory & awards) */}
      <div 
        className="absolute -top-10 right-0 w-[48rem] h-[48rem] rounded-full blur-[110px] opacity-55 dark:opacity-35 animate-aurora"
        style={{
          animationDelay: '-4s',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(251, 191, 36, 0.22) 40%, rgba(249, 115, 22, 0.1) 60%, transparent 75%)'
        }}
      />

      {/* Royal Indigo / Violet Rhetoric Arc (Center-Right - intellectual debate & speechcraft) */}
      <div 
        className="absolute top-[35%] right-[-10%] w-[42rem] h-[42rem] rounded-full blur-[120px] opacity-45 dark:opacity-30 animate-float-slow"
        style={{
          animationDelay: '-2s',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.38) 0%, rgba(139, 92, 246, 0.18) 50%, transparent 70%)'
        }}
      />

      {/* Vivid Emerald Distinction Hearth (Center Left - Trinity exam triumphs) */}
      <div 
        className="absolute top-[50%] -left-28 w-[40rem] h-[40rem] rounded-full blur-[110px] opacity-45 dark:opacity-30 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(13, 148, 136, 0.2) 50%, transparent 70%)'
        }}
      />

      {/* Warm Electric Coral Sunset Spot (Bottom Center - youthful passion & podium energy) */}
      <div 
        className="absolute bottom-5 left-1/3 w-[42rem] h-[42rem] rounded-full blur-[115px] opacity-40 dark:opacity-28 animate-aurora"
        style={{
          animationDelay: '-7s',
          background: 'radial-gradient(circle, rgba(244, 63, 94, 0.32) 0%, rgba(251, 146, 60, 0.18) 50%, transparent 70%)'
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
