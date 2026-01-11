import React, { useMemo } from 'react';

const AmbientBackground: React.FC = () => {
  // Generate random particles (dust motes)
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * -20}s`,
      size: `${2 + Math.random() * 3}px`,
      opacity: 0.1 + Math.random() * 0.3, // Varying target opacity
    }));
  }, []);

  // Generate meteors (falling asteroids/stars)
  const meteors = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 120 - 10}%`, // Start slightly off-screen width-wise
      top: `${Math.random() * -50 - 20}%`, // Start above screen
      animationDuration: `${3 + Math.random() * 5}s`,
      animationDelay: `${Math.random() * 10}s`,
      width: `${100 + Math.random() * 150}px`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none bg-[#1c1917]">
      {/* Film Grain Overlay */}
      <div className="bg-grain"></div>

      {/* Deep Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#1c1917] opacity-90"></div>

      {/* Animated Orbs/Lights (Existing) */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#e7c8a0] opacity-[0.03] blur-[100px] animate-float-slow"></div>
      <div className="absolute bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[#57534e] opacity-[0.05] blur-[120px] animate-float-slower"></div>
      <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[#e7c8a0] opacity-[0.02] blur-[80px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-[#78716c] opacity-[0.04] blur-[90px] animate-float-slow" style={{ animationDelay: '2s' }}></div>

      {/* Flowing Lines Layer (New) */}
      {/* Uses wide SVG paths that gently oscillate horizontally */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#e7c8a0" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Line 1: Upper wave */}
        <path 
          d="M-200,200 Q400,0 1000,300 T2200,200" 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="1.5"
          className="animate-line-flow"
          style={{ animationDuration: '25s' }}
        />
        
        {/* Line 2: Middle wave */}
        <path 
          d="M-200,500 Q400,300 1000,600 T2200,500" 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="1"
          className="animate-line-flow"
          style={{ animationDuration: '35s', animationDirection: 'reverse' }}
        />

        {/* Line 3: Lower wave */}
        <path 
          d="M-200,800 Q400,600 1000,900 T2200,800" 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="2"
          className="animate-line-flow"
          style={{ animationDuration: '30s', opacity: 0.5 }}
        />
      </svg>

      {/* Floating Particles Layer */}
      <div className="absolute inset-0 w-full h-full">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#e7c8a0] animate-particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              '--target-opacity': p.opacity, // CSS variable for keyframe usage
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Meteor / Falling Asteroid Layer */}
      <div className="absolute inset-0 w-full h-full">
        {meteors.map((m) => (
          <div
            key={m.id}
            className="meteor-effect"
            style={{
              left: m.left,
              top: m.top,
              width: m.width,
              animationDuration: m.animationDuration,
              animationDelay: m.animationDelay,
            } as React.CSSProperties}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AmbientBackground;