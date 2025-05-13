
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    price: "499",
    annualPrice: "399",
    description: "Parfait pour les petites entreprises qui débutent avec l'automatisation marketing.",
    features: [
      "Jusqu'à 25 000 contacts",
      "Emails illimités",
      "Automatisation basique",
      "Segmentation standard",
      "5 utilisateurs inclus",
      "Intégration de données par API",
      "Support par email et chat"
    ],
    cta: "Commencer",
    popular: false,
    highlight: {
      text: "Idéal pour démarrer",
      color: "bg-gray-100 text-gray-700"
    }
  },
  {
    name: "Professional",
    price: "1 499",
    annualPrice: "1 199",
    description: "Pour les entreprises en croissance qui ont besoin d'outils plus avancés.",
    features: [
      "Jusqu'à 100 000 contacts",
      "Emails illimités",
      "Automatisation avancée",
      "Segmentation multi-critères",
      "Parcours client personnalisés",
      "10 utilisateurs inclus",
      "API complète",
      "Intégrations CRM natives",
      "SMS et Push notifications",
      "Support prioritaire 24/5"
    ],
    cta: "Essai 14 jours",
    popular: true,
    highlight: {
      text: "Plus populaire",
      color: "bg-np6-red text-white"
    }
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
      "Utilisateurs illimités",
      "Intégration personnalisée",
      "Account manager dédié",
      "Tous les canaux disponibles",
      "Support VIP 24/7",
      "SLA garanti 99,99%",
      "Environnements de test dédiés",
      "Formations personnalisées"
    ],
    cta: "Contacter les ventes",
    popular: false,
    highlight: {
      text: "Solution complète",
      color: "bg-np6-blue text-white"
    }
  }
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);
  
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center py-1 px-3 mb-3 rounded-full border bg-white shadow-sm">
            <div className="w-2 h-2 rounded-full bg-np6-red mr-2"></div>
            <span className="text-sm font-medium">Tarification transparente</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un plan pour chaque <span className="accent-gradient-text">besoin</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des tarifs transparents qui évoluent avec votre entreprise. Pas de frais cachés et un support toujours inclus.
          </p>
          
          <div className="flex justify-center mt-8 mb-12">
            <div className="bg-white rounded-lg p-1 border inline-flex shadow-sm">
              <button
                onClick={() => setAnnual(false)}
                className={`px-4 py-2 rounded ${!annual ? 'bg-np6-red text-white' : 'text-gray-600'}`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-4 py-2 rounded flex items-center gap-2 ${annual ? 'bg-np6-red text-white' : 'text-gray-600'}`}
              >
                <span>Annuel</span>
                {annual && <span className="text-xs bg-white text-np6-red px-1.5 py-0.5 rounded-full">-20%</span>}
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-lg overflow-hidden 
                ${tier.popular ? 'shadow-xl border-2 border-np6-red scale-105 relative z-10' : 'shadow-md border border-gray-200'}
              `}
            >
              {tier.highlight && (
                <div className={`${tier.highlight.color} text-center py-1.5 text-sm font-medium`}>
                  {tier.highlight.text}
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  {tier.price.includes("Sur mesure") ? (
                    <span className="text-4xl font-bold">{tier.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">{annual && tier.annualPrice ? tier.annualPrice : tier.price}€</span>
                      <span className="text-gray-500">/mois</span>
                      {annual && <span className="ml-2 text-sm text-np6-red font-medium">(facturé annuellement)</span>}
                    </>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <Button 
                  className={`w-full ${tier.popular ? 'accent-gradient-bg hover:opacity-90' : tier.name === "Enterprise" ? 'bg-np6-blue hover:bg-np6-blue/90' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  {tier.cta}
                </Button>
                
                <div className="mt-6">
                  <p className="font-medium text-sm text-gray-500 mb-4">Inclus dans ce plan :</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className={`h-5 w-5 ${tier.popular ? 'text-np6-red' : tier.name === "Enterprise" ? 'text-np6-blue' : 'text-np6-teal'} mr-2 shrink-0`} />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {tier.name === "Professional" && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">Modules additionnels disponibles :</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">AI Content</span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Advanced Analytics</span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">WhatsApp</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto border">
            <h3 className="text-2xl font-bold mb-4">Vous avez des besoins spécifiques ?</h3>
            <p className="text-gray-600 mb-6">
              Notre équipe commerciale est à votre disposition pour créer une offre personnalisée adaptée à vos besoins et à votre budget.
            </p>
            <Button className="bg-np6-red hover:bg-np6-red/90 text-white">
              Demander un devis personnalisé
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
