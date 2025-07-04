"use client";
import { useState, useEffect } from "react";

export function AceternityNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newIsScrolled = scrollTop > 20;
      setIsScrolled(newIsScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Products",
      link: "#products",
    },
    {
      name: "Services",
      link: "#services",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Offset for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const desktopClasses = isScrolled 
    ? "bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-700/50 py-3 px-6 w-full max-w-4xl rounded-full" 
    : "bg-transparent py-3 px-6 w-full max-w-5xl";
  
  const mobileClasses = isScrolled 
    ? "bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-700/50 py-3 px-4 w-full max-w-3xl rounded-full" 
    : "bg-transparent py-3 px-6 w-full max-w-4xl";

  return (
    <div className="relative w-full z-50">
      {/* Desktop Navigation */}
      <div className={`hidden lg:block fixed top-6 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out ${desktopClasses}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-500 ${
              isScrolled ? "scale-110" : "scale-100"
            }`}>
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className={`text-xl font-bold transition-all duration-500 ${
              isScrolled ? "text-white scale-105" : "text-white scale-100"
            }`}>
              Trimurti Solutions
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={`nav-item-${idx}`}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.link);
                }}
                className={`relative font-medium transition-all duration-500 hover:scale-105 group ${
                  isScrolled ? "text-gray-200 hover:text-white" : "text-white hover:text-gray-200"
                }`}>
                <span className="block">{item.name}</span>
                <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 w-0 group-hover:w-full"></div>
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className={`px-6 py-2 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform transition-all duration-500 hover:scale-105 hover:bg-[#21e065] ${
              isScrolled ? "shadow-lg" : "shadow-md"
            }`}>
              Login
            </button>
            <button className={`px-6 py-2 rounded-full bg-blue-600 font-bold text-white tracking-widest uppercase transform transition-all duration-500 hover:scale-105 hover:bg-blue-700 ${
              isScrolled ? "shadow-lg" : "shadow-md"
            }`}>
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-6 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out ${mobileClasses}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-500 ${
              isScrolled ? "scale-110" : "scale-100"
            }`}>
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className={`text-xl font-bold transition-all duration-500 ${
              isScrolled ? "text-white scale-105" : "text-white scale-100"
            }`}>
              Trimurti Solutions
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-500 ${
              isScrolled ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-white/10"
            }`}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`mt-4 transition-all duration-500 ${
            isScrolled 
              ? "bg-gray-900/95 backdrop-blur-md shadow-lg border border-gray-700/50" 
              : "bg-white/95 backdrop-blur-md shadow-lg"
          } rounded-2xl p-6`}>
            <div className="space-y-4">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.link);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block font-medium transition-colors duration-200 ${
                    isScrolled ? "text-gray-200 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
                  }`}>
                  {item.name}
                </a>
              ))}
              <div className={`flex flex-col gap-3 pt-4 ${
                isScrolled ? "border-t border-gray-700" : "border-t border-gray-200"
              }`}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-2 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-all duration-200 w-full"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-2 rounded-full bg-blue-600 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-blue-700 transition-all duration-200 w-full"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 