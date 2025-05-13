
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    price: "49",
    description: "Parfait pour les petites entreprises qui débutent avec l'automatisation marketing.",
    features: [
      "Jusqu'à 10 000 contacts",
      "Emails illimités",
      "Automatisation basique",
      "Segmentation standard",
      "Support par email"
    ],
    cta: "Commencer",
    popular: false
  },
  {
    name: "Professional",
    price: "149",
    description: "Pour les entreprises en croissance qui ont besoin d'outils plus avancés.",
    features: [
      "Jusqu'à 50 000 contacts",
      "Emails illimités",
      "Automatisation avancée",
      "Segmentation multi-critères",
      "Parcours client personnalisés",
      "API complète",
      "Support prioritaire"
    ],
    cta: "Essai 14 jours",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    description: "Solutions sur mesure pour les grandes entreprises avec des besoins spécifiques.",
    features: [
      "Contacts illimités",
      "Infrastructure dédiée",
      "Automatisation avancée",
      "Segmentation IA",
      "Intégration personnalisée",
      "Account manager dédié",
      "SLA garanti"
    ],
    cta: "Contacter les ventes",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un plan pour chaque <span className="gradient-text">besoin</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des tarifs transparents qui évoluent avec votre entreprise. Pas de frais cachés.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-lg overflow-hidden 
                ${tier.popular ? 'shadow-xl border-2 border-np6-teal scale-105 relative z-10' : 'shadow-md border border-gray-200'}
              `}
            >
              {tier.popular && (
                <div className="bg-np6-teal text-white text-center py-1 text-sm font-medium">
                  Recommandé
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  {tier.price.includes("Sur mesure") ? (
                    <span className="text-4xl font-bold">{tier.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">{tier.price}€</span>
                      <span className="text-gray-500">/mois</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <Button 
                  className={`w-full ${tier.popular ? 'gradient-bg hover:opacity-90' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  {tier.cta}
                </Button>
                
                <div className="mt-6">
                  <p className="font-medium text-sm text-gray-500 mb-4">Inclus dans ce plan :</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-np6-teal mr-2 shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Besoin d'une solution spécifique ? <a href="#contact" className="text-np6-blue font-medium">Contactez-nous</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
