import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            RasAutos
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
            <Link to="/catalogo" className="text-gray-700 hover:text-blue-600">Catálogo</Link>
            <Link to="/nosotros" className="text-gray-700 hover:text-blue-600">Nosotros</Link>
            <Link to="/contacto" className="text-gray-700 hover:text-blue-600">Contacto</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+56912345678" className="flex items-center text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              <span>+56 9 1234 5678</span>
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
              <Link to="/catalogo" className="text-gray-700 hover:text-blue-600">Catálogo</Link>
              <Link to="/nosotros" className="text-gray-700 hover:text-blue-600">Nosotros</Link>
              <Link to="/contacto" className="text-gray-700 hover:text-blue-600">Contacto</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;