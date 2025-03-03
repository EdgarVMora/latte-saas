import React, { useState, useEffect } from 'react';
import { GiftIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Funciones', href: '#funciones' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Planes', href: '#planes' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Ajuste para el navbar fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false); // Cerrar menú móvil si está abierto
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y título */}
          <div className="flex-shrink-0 flex items-center group">
            <div className="relative">
              <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-lg group-hover:bg-green-500/30 transition-all duration-300 group-hover:scale-110"></div>
              <div className="relative flex items-center">
                <GiftIcon className="h-8 w-8 text-green-500 transform transition-transform group-hover:rotate-12 duration-300" />
                <span className="ml-2 text-xl font-bold tracking-wider text-gray-900 group-hover:text-green-500 transition-colors duration-300">REWARDS</span>
              </div>
            </div>
          </div>

          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-500 transition-colors duration-200 group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-x-1 -bottom-px h-px bg-green-500 transform scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100"></span>
              </a>
            ))}
            <button className="ml-8 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 active:scale-95">
              Comenzar
            </button>
          </div>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-green-500 hover:bg-green-50 transition-all duration-200 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'opacity-100 translate-y-0 h-auto' 
          : 'opacity-0 -translate-y-4 h-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-green-500 hover:bg-green-50 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
          <button className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-base font-medium transform transition-all duration-300 hover:bg-green-600 active:scale-95">
            Comenzar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 