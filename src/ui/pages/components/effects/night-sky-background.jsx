import React from "react";

export function NightSkyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space gradient - Much darker */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
      
      {/* Nebula effect - Much more subtle */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-indigo-900/10 blur-3xl"></div>
      
      {/* Stars layer 1 - Small stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
      </div>
      
      {/* Stars layer 2 - Medium stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
              opacity: Math.random() * 0.3 + 0.2,
            }}
          />
        ))}
      </div>
      
      {/* Stars layer 3 - Large bright stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 3}px`,
              height: `${Math.random() * 4 + 3}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
              opacity: Math.random() * 0.2 + 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Shooting stars - More subtle */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Milky Way effect - Much more subtle */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent transform rotate-12 scale-150 blur-sm"></div>
      
      {/* Atmospheric glow - Removed for darker look */}
    </div>
  );
} 