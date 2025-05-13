
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, BarChart4, Target } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-np6-teal/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-np6-blue/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-np6-red/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block rounded-full bg-white px-3 py-1 border shadow-sm">
              <span className="text-np6-red font-medium text-sm">Nouvelle version 6.2 disponible ✨</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Automatisez votre <span className="accent-gradient-text">marketing</span> comme jamais
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              NP6 révolutionne la façon dont vous connectez avec vos clients. Augmentez vos conversions de <span className="font-bold text-np6-red">+45%</span> avec des campagnes personnalisées et des parcours client optimisés par l'IA.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <div className="w-4 h-4 rounded-full bg-np6-blue"></div>
                <span>Conforme RGPD</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <div className="w-4 h-4 rounded-full bg-np6-teal"></div>
                <span>Support 24/7</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <div className="w-4 h-4 rounded-full bg-np6-red pulse-accent"></div>
                <span>99.9% Uptime</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="accent-gradient-bg text-white hover:opacity-90 transition-opacity">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-np6-blue text-np6-blue hover:bg-np6-blue/10">
                Voir la démo
              </Button>
            </div>
            
            <div className="pt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">+2500</span> entreprises nous font confiance
              </p>
            </div>
            
            <div className="pt-2 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center py-2 px-3 bg-white rounded-lg shadow-sm border">
                <span className="text-2xl font-bold text-np6-blue">+230%</span>
                <span className="text-xs text-gray-500">ROI moyen</span>
              </div>
              <div className="flex flex-col items-center py-2 px-3 bg-white rounded-lg shadow-sm border">
                <span className="text-2xl font-bold text-np6-teal">+45%</span>
                <span className="text-xs text-gray-500">Taux de conversion</span>
              </div>
              <div className="flex flex-col items-center py-2 px-3 bg-white rounded-lg shadow-sm border">
                <span className="text-2xl font-bold text-np6-red">-30%</span>
                <span className="text-xs text-gray-500">Taux d'attrition</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Hero image */}
          <div className="relative animate-fade-in-right">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-np6-red/5 rounded-full blur-xl"></div>
            <div className="relative rounded-xl shadow-lg overflow-hidden border animate-bounce-subtle">
              <div className="aspect-[16/9] bg-gradient-to-br from-np6-blue via-np6-red/50 to-np6-teal p-5 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-md shadow-md">
                  <div className="h-8 bg-gray-100 border-b flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto text-xs text-gray-500">NP6 Campaign Builder</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-8 w-1/3 bg-gray-200 rounded-md"></div>
                      <div className="flex space-x-2">
                        <div className="p-1.5 rounded bg-np6-blue/10 text-np6-blue">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div className="p-1.5 rounded bg-np6-teal/10 text-np6-teal">
                          <BarChart4 className="h-4 w-4" />
                        </div>
                        <div className="p-1.5 rounded bg-np6-red/10 text-np6-red">
                          <Target className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-2 mb-4">
                      <div className="col-span-2">
                        <div className="p-2 bg-gray-100 rounded-md h-full">
                          <div className="h-3 w-3/4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-12 bg-np6-blue/20 rounded mb-2"></div>
                          <div className="flex justify-between mb-2">
                            <div className="h-2 w-8 bg-gray-200 rounded"></div>
                            <div className="h-2 w-6 bg-np6-red/50 rounded"></div>
                          </div>
                          <div className="h-12 bg-np6-teal/20 rounded"></div>
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="aspect-[1/1] bg-gray-100 rounded-md flex flex-col items-center justify-center p-1">
                            <div className="h-6 w-6 rounded-full bg-np6-blue/20 mb-1"></div>
                            <div className="h-2 w-8 bg-gray-200 rounded"></div>
                          </div>
                          <div className="aspect-[1/1] bg-gray-100 rounded-md flex flex-col items-center justify-center p-1">
                            <div className="h-6 w-6 rounded-full bg-np6-teal/20 mb-1"></div>
                            <div className="h-2 w-8 bg-gray-200 rounded"></div>
                          </div>
                          <div className="aspect-[1/1] bg-gray-100 rounded-md flex flex-col items-center justify-center p-1">
                            <div className="h-6 w-6 rounded-full bg-np6-red/20 mb-1"></div>
                            <div className="h-2 w-8 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        <div className="h-16 bg-gray-100 rounded-md mt-2 p-2">
                          <div className="flex justify-between mb-1">
                            <div className="h-2 w-16 bg-gray-200 rounded"></div>
                            <div className="h-2 w-8 bg-gray-200 rounded"></div>
                          </div>
                          <div className="flex items-end space-x-1 h-8">
                            <div className="h-3/4 w-3 bg-np6-blue rounded-t"></div>
                            <div className="h-1/2 w-3 bg-np6-blue rounded-t"></div>
                            <div className="h-full w-3 bg-np6-red rounded-t"></div>
                            <div className="h-4/5 w-3 bg-np6-blue rounded-t"></div>
                            <div className="h-2/3 w-3 bg-np6-teal rounded-t"></div>
                            <div className="h-1/3 w-3 bg-np6-blue rounded-t"></div>
                            <div className="h-5/6 w-3 bg-np6-teal rounded-t"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <div className="h-8 w-24 bg-np6-red rounded-md"></div>
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
