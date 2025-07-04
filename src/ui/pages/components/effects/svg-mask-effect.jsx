"use client";
import { useRef, useState, useEffect } from "react";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      
      {/* Beautiful overlay with gradient and glow effects */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-slate-800/95 via-purple-900/90 to-slate-900/95 backdrop-blur-sm transition-all duration-700 ease-out"
        style={{
          clipPath: isHovered
            ? `circle(${revealSize}px at ${mousePosition.x}px ${mousePosition.y}px)`
            : `circle(0px at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
      >
        {/* Enhanced glowing border effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: isHovered 
              ? `radial-gradient(circle ${revealSize + 30}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.2) 30%, transparent 70%)`
              : 'transparent',
            transition: 'all 0.7s ease-out',
            filter: isHovered ? 'blur(1px)' : 'blur(0px)'
          }}
        />
        
        {/* Shimmer effect */}
        <div 
          className={`absolute inset-0 ${
            isHovered ? 'animate-pulse' : ''
          }`}
          style={{
            background: isHovered 
              ? `linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)`
              : 'transparent',
            backgroundSize: '200% 200%',
            animation: isHovered ? 'shimmer 2s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Animated particles effect */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full opacity-80 ${
                isHovered ? 'animate-pulse' : ''
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1.5s',
                background: `hsl(${200 + i * 20}, 70%, 60%)`,
                boxShadow: isHovered ? `0 0 10px hsl(${200 + i * 20}, 70%, 60%)` : 'none'
              }}
            />
          ))}
        </div>
        
        {/* Floating orbs effect */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className={`absolute rounded-full ${
                isHovered ? 'animate-bounce' : ''
              }`}
              style={{
                width: `${8 + i * 4}px`,
                height: `${8 + i * 4}px`,
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
                background: `radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(59, 130, 246, 0.4))`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s',
                opacity: isHovered ? 0.7 : 0
              }}
            />
          ))}
        </div>
        
        <div className="p-8 text-center relative z-10">
          <div className="bg-gradient-to-r from-slate-900/95 via-purple-900/90 to-slate-800/95 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30 shadow-2xl">
            <div className="text-white">
              {revealText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 