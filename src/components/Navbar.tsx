
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full accent-gradient-bg flex items-center justify-center">
              <span className="text-lg font-bold text-white">N</span>
            </div>
            <div>
              <span className="text-2xl font-bold accent-gradient-text">NP6</span>
              <span className="hidden md:inline-block text-sm text-gray-500 ml-1.5">Marketing Automation</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <a href="#features" className="text-gray-600 hover:text-np6-red transition-colors flex items-center gap-1 py-2">
                Fonctionnalités
                <ChevronDown className="h-4 w-4 opacity-70" />
              </a>
              <div className="absolute left-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                <div className="bg-white shadow-lg rounded-lg p-4 min-w-[220px] grid grid-cols-1 gap-1">
                  <a href="#" className="text-gray-600 hover:text-np6-red p-2 text-sm rounded hover:bg-gray-50">Email Marketing</a>
                  <a href="#" className="text-gray-600 hover:text-np6-red p-2 text-sm rounded hover:bg-gray-50">Automation</a>
                  <a href="#" className="text-gray-600 hover:text-np6-red p-2 text-sm rounded hover:bg-gray-50">Segmentation</a>
                  <a href="#" className="text-gray-600 hover:text-np6-red p-2 text-sm rounded hover:bg-gray-50">Analytics</a>
                  <a href="#" className="text-gray-600 hover:text-np6-red p-2 text-sm rounded hover:bg-gray-50">CDP</a>
                </div>
              </div>
            </div>
            <a href="#testimonials" className="text-gray-600 hover:text-np6-red transition-colors py-2">
              Témoignages
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-np6-red transition-colors py-2">
              Tarifs
            </a>
            <div className="relative group">
              <a href="#" className="text-gray-600 hover:text-np6-red transition-colors flex items-center gap-1 py-2">
                Ressources
                <ChevronDown className="h-4 w-4 opacity-70" />
              </a>
              <div className="absolute left-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                <div className="bg-white shadow-lg rounded-lg p-4 min-w-[220px] grid grid-cols-1 gap-1">
                  <a href="#" className="text-gray-600 hover:text-np6-red p-2 text-sm rounded hover:bg-gray-50">Blog</a>
                  <a href="#" className="text-gray-600 hover:text-np6-red p-2 text-sm rounded hover:bg-gray-50">Webinaires</a>
                  <a href="#" className="text-gray-600 hover:text-np6-red p-2 text-sm rounded hover:bg-gray-50">Études de cas</a>
                  <a href="#" className="text-gray-600 hover:text-np6-red p-2 text-sm rounded hover:bg-gray-50">Documentation</a>
                </div>
              </div>
            </div>
            <a href="#contact" className="text-gray-600 hover:text-np6-red transition-colors py-2">
              Contact
            </a>
          </nav>
          
          {/* Action buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700 hover:text-np6-red hover:bg-transparent">
              FR
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
            <Button variant="outline" className="border-np6-blue text-np6-blue hover:bg-np6-blue/10">
              Se connecter
            </Button>
            <Button className="accent-gradient-bg hover:opacity-90 transition-opacity text-white">
              Essai gratuit
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-3">
              <a href="#features" className="text-gray-600 hover:text-np6-red py-2 border-b border-gray-100">
                Fonctionnalités
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-np6-red py-2 border-b border-gray-100">
                Témoignages
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-np6-red py-2 border-b border-gray-100">
                Tarifs
              </a>
              <a href="#" className="text-gray-600 hover:text-np6-red py-2 border-b border-gray-100">
                Ressources
              </a>
              <a href="#contact" className="text-gray-600 hover:text-np6-red py-2 border-b border-gray-100">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="border-np6-blue text-np6-blue hover:bg-np6-blue/10 w-full">
                  Se connecter
                </Button>
                <Button className="accent-gradient-bg hover:opacity-90 transition-opacity text-white w-full">
                  Essai gratuit
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
