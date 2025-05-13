
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">NP6</span>
          <span className="hidden md:block text-sm text-gray-500">Marketing Automation</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-np6-blue transition-colors">
            Fonctionnalités
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-np6-blue transition-colors">
            Témoignages
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-np6-blue transition-colors">
            Tarifs
          </a>
          <a href="#contact" className="text-gray-600 hover:text-np6-blue transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex border-np6-blue text-np6-blue hover:bg-np6-blue/10">
            Se connecter
          </Button>
          <Button className="gradient-bg hover:opacity-90 transition-opacity">
            Essai gratuit
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
