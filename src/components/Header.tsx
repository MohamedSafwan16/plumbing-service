import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-lg"
      : "bg-transparent"
  }`}
>
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between py-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div
          className={`p-2 rounded-lg ${
            isScrolled ? "bg-blue-600" : "bg-blue-600"
          }`}
        >
          <Wrench className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1
            className={`text-xl font-bold ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Sanco Services
          </h1>
          <p
            className={`text-xs ${
              isScrolled ? "text-gray-600" : "text-gray-200"
            }`}
          >
            Premium Plumbing
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {["home", "services", "about", "areas", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`transition-colors font-medium ${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      {/* Emergency Call Button */}
      <a
        href="tel:+447946041983"
        className="hidden md:flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
      >
        <Phone className="h-4 w-4" />
        <span>Emergency Call</span>
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`md:hidden p-2 rounded-lg transition-colors ${
          isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
        }`}
      >
        {isMenuOpen ? (
          <X
            className={`h-6 w-6 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          />
        ) : (
          <Menu
            className={`h-6 w-6 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          />
        )}
      </button>
    </div>
  </div>
</header>

  );
};

export default Header;