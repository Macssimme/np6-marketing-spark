
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const testimonials = [
  {
    content: "NP6 a transformé notre approche marketing. La personnalisation dynamique basée sur le comportement en temps réel nous a permis d'augmenter notre taux de conversion de 35% en seulement trois mois. L'interface intuitive nous permet d'itérer rapidement sur nos campagnes.",
    author: "Marie Dubois",
    position: "CMO, TechCorp",
    company: "TechCorp",
    logo: "/path/to/logo.svg",
    stats: {
      conversion: "+35%",
      engagement: "+42%",
      roi: "+127%"
    },
    modules: ["Email", "Analytics", "Automation"]
  },
  {
    content: "L'automatisation des parcours client avec NP6 nous a fait gagner un temps précieux. Nos équipes peuvent maintenant se concentrer sur la stratégie plutôt que l'exécution technique. L'intégration native avec notre CRM Salesforce a été un facteur décisif dans notre choix.",
    author: "Thomas Martin",
    position: "Directeur Marketing",
    company: "InnovGroup",
    logo: "/path/to/logo.svg",
    stats: {
      productivity: "+60%",
      campaigns: "x3",
      revenue: "+28%"
    },
    modules: ["Journeys", "CRM", "Automation"]
  },
  {
    content: "La segmentation avancée de NP6 nous a permis d'adresser nos clients avec une précision que nous n'avions jamais atteinte auparavant. La CDP intégrée nous offre une vue unifiée de chaque client, ce qui est indispensable pour notre stratégie omnicanale.",
    author: "Sophie Bernard",
    position: "Marketing Manager",
    company: "RetailPlus",
    logo: "/path/to/logo.svg",
    stats: {
      engagement: "+28%",
      retention: "+18%",
      personalization: "5x"
    },
    modules: ["CDP", "Segmentation", "Analytics"]
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center py-1 px-3 mb-3 rounded-full border bg-white shadow-sm">
            <div className="w-2 h-2 rounded-full bg-np6-red mr-2"></div>
            <span className="text-sm font-medium">Ce que nos clients disent</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Des résultats <span className="accent-gradient-text">mesurables</span> pour votre entreprise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment NP6 aide des entreprises comme la vôtre à transformer leur stratégie marketing et à obtenir des résultats concrets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:border-np6-red/20 hover-scale-accent">
              <CardContent className="p-6">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-2">Résultats obtenus :</p>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(testimonial.stats).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-2 rounded text-center">
                        <div className="font-bold text-np6-red">{value}</div>
                        <div className="text-xs text-gray-500">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-2">Modules utilisés :</p>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.modules.map((module) => (
                      <div key={module} className="flex items-center space-x-2">
                        <Checkbox id={`${index}-${module}`} checked disabled />
                        <label htmlFor={`${index}-${module}`} className="text-xs text-gray-600">
                          {module}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-center">Ils nous font confiance</h3>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-12 bg-gray-200 w-32 rounded flex items-center justify-center">
                  <div className="text-gray-400 font-medium">Logo {i}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="text-np6-red hover:text-np6-blue underline text-sm font-medium">
                Voir toutes nos études de cas →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
