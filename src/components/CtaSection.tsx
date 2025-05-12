
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <div className="gradient-bg p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à révolutionner votre marketing ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez plus de 2000 entreprises qui utilisent NP6 pour automatiser et optimiser leurs stratégies marketing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-np6-blue hover:bg-gray-100">
                Réserver une démo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
