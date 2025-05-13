
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <div className="accent-gradient-bg p-12 text-white text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-np6-red/20 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center py-1.5 px-3 mb-6 rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-white font-medium">Prêt à transformer votre marketing ?</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Démarrez votre révolution marketing <span className="underline decoration-np6-red decoration-wavy underline-offset-4">aujourd'hui</span>
              </h2>
              
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Rejoignez plus de 2500 entreprises qui utilisent NP6 pour automatiser et optimiser leurs stratégies marketing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                  <div className="font-bold text-2xl mb-1">+45%</div>
                  <p className="text-sm opacity-80">d'augmentation moyenne du taux de conversion</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                  <div className="font-bold text-2xl mb-1">30 min</div>
                  <p className="text-sm opacity-80">pour lancer votre première campagne</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                  <div className="font-bold text-2xl mb-1">24/7</div>
                  <p className="text-sm opacity-80">support technique et stratégique</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-np6-blue hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20 transition-all">
                  Réserver une démo personnalisée
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="mt-8 flex flex-col items-center">
                <p className="text-sm opacity-80 mb-2">Aucune carte de crédit requise</p>
                <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    <span className="text-xs">Installation rapide</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    <span className="text-xs">Assistance à la migration</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    <span className="text-xs">Onboarding personnalisé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md border">
            <h3 className="text-2xl font-bold mb-6 text-center">Questions fréquentes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <h4 className="font-semibold">Combien de temps faut-il pour démarrer ?</h4>
                <p className="text-gray-600 text-sm">Vous pouvez créer votre compte et lancer votre première campagne en moins de 30 minutes.</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-semibold">Puis-je migrer mes données existantes ?</h4>
                <p className="text-gray-600 text-sm">Oui, notre équipe vous accompagne dans la migration de vos contacts, modèles et campagnes.</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-semibold">NP6 est-il conforme au RGPD ?</h4>
                <p className="text-gray-600 text-sm">Absolument. Nos serveurs sont en France et toutes nos pratiques sont conformes au RGPD.</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-semibold">Proposez-vous une formation ?</h4>
                <p className="text-gray-600 text-sm">Oui, chaque plan inclut un onboarding personnalisé et l'accès à NP6 Academy.</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-np6-red hover:text-np6-blue font-medium">
                Voir toutes les questions fréquentes →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
