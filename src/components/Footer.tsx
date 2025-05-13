
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full accent-gradient-bg flex items-center justify-center">
                <span className="text-lg font-bold text-white">N</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">NP6</span>
                <span className="text-sm text-gray-400 ml-1.5">Marketing Automation</span>
              </div>
            </div>
            <p className="mb-6 text-gray-400 max-w-md">
              NP6 est une plateforme complète de marketing automation qui aide les entreprises à créer des expériences client personnalisées et à maximiser leur ROI marketing.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-np6-red mr-2" />
                <span className="text-sm">+33 (0)9 73 72 90 00</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-np6-red mr-2" />
                <a href="mailto:contact@np6.com" className="text-sm hover:text-white">contact@np6.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-np6-red mr-2 mt-0.5" />
                <span className="text-sm">4 Avenue Laurent Cély, 92600 Asnières-sur-Seine, France</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-np6-red transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-np6-red transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-np6-red transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-np6-red transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Solution</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Fonctionnalités</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Email Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Automatisation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Segmentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Analytics</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Tarifs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Webinaires</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Études de cas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Entreprise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Carrières</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Partenaires</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Presse</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white hover:text-np6-red transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm mb-2">
              © {new Date().getFullYear()} NP6. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-4">
              <img src="https://via.placeholder.com/60x30" alt="ISO 27001" className="h-6" />
              <img src="https://via.placeholder.com/60x30" alt="RGPD" className="h-6" />
              <img src="https://via.placeholder.com/60x30" alt="HDS" className="h-6" />
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-gray-500 hover:text-np6-red text-sm">Politique de confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-np6-red text-sm">Conditions d'utilisation</a>
            <a href="#" className="text-gray-500 hover:text-np6-red text-sm">Mentions légales</a>
            <a href="#" className="text-gray-500 hover:text-np6-red text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
