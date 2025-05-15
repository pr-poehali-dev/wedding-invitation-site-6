
import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Детали", href: "#details" },
  { label: "Программа", href: "#timeline" },
  { label: "Место", href: "#location" },
  { label: "RSVP", href: "#rsvp" }
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'}`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <a 
            href="#" 
            className="font-cormorant text-2xl font-semibold text-wedding-primary"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            А&В
          </a>
          
          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-montserrat text-sm font-medium text-wedding-text hover:text-wedding-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Мобильное меню кнопка */}
          <button
            className="md:hidden p-2 text-wedding-text focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <Icon name="X" className="h-6 w-6" />
            ) : (
              <Icon name="Menu" className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 pt-20 pb-6 px-4 md:hidden">
          <div className="h-full flex flex-col">
            <div className="flex-1">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block py-3 px-4 text-center text-lg font-medium text-wedding-text hover:text-wedding-primary border-b border-wedding-light/30"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <div className="text-center text-sm text-gray-500">
                <p>С нетерпением ждем встречи с вами на нашей свадьбе!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
