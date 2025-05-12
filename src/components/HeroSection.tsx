
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-np6-teal/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-np6-blue/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block rounded-full bg-white px-3 py-1 border shadow-sm">
              <span className="text-gray-600 text-sm">Nouvelle version disponible ✨</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Automatisez votre <span className="gradient-text">marketing</span> comme jamais
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              NP6 révolutionne la façon dont vous connectez avec vos clients. Augmentez vos conversions avec des campagnes personnalisées et des parcours client optimisés.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-np6-blue text-np6-blue hover:bg-np6-blue/10">
                Voir la démo
              </Button>
            </div>
            <div className="pt-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">+2000</span> entreprises nous font confiance
              </p>
            </div>
          </div>
          
          {/* Right column - Hero image */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-xl shadow-lg overflow-hidden border animate-bounce-subtle">
              <div className="aspect-[16/9] bg-gradient-to-br from-np6-blue to-np6-teal p-5 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-md shadow-md">
                  <div className="h-8 bg-gray-100 border-b flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="h-8 w-1/3 bg-gray-200 rounded-md mb-4"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="aspect-[1/1] bg-gray-100 rounded-md"></div>
                      <div className="aspect-[1/1] bg-gray-100 rounded-md"></div>
                      <div className="aspect-[1/1] bg-gray-100 rounded-md"></div>
                    </div>
                    <div className="h-24 bg-gray-100 rounded-md mt-4"></div>
                    <div className="mt-4 flex justify-end">
                      <div className="h-8 w-24 bg-np6-blue rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
