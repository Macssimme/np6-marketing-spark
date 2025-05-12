
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">NP6</span>
              <span className="text-sm text-gray-400">Marketing Automation</span>
            </div>
            <p className="mb-4 text-gray-400 max-w-md">
              NP6 est une plateforme complète de marketing automation qui aide les entreprises à créer des expériences client personnalisées et à maximiser leur ROI marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Fonctionnalités</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Tarifs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cas d'usage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Ressources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Carrières</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Presse</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Statut</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NP6. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Politique de confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Mentions légales</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
