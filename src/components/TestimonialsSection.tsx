
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "NP6 a transformé notre approche marketing. La facilité d'utilisation combinée à des fonctionnalités puissantes nous a permis d'augmenter notre taux de conversion de 35% en seulement quelques mois.",
    author: "Marie Dubois",
    position: "CMO, TechCorp",
  },
  {
    content: "L'automatisation des parcours client avec NP6 nous a fait gagner un temps précieux. Nous pouvons maintenant nous concentrer sur la stratégie plutôt que sur l'exécution technique.",
    author: "Thomas Martin",
    position: "Directeur Marketing, InnovGroup",
  },
  {
    content: "La segmentation avancée de NP6 nous a permis d'adresser nos clients avec une précision que nous n'avions jamais atteinte auparavant. Résultat : +28% d'engagement sur nos campagnes.",
    author: "Sophie Bernard",
    position: "Marketing Manager, RetailPlus",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que nos clients <span className="gradient-text">disent de nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment NP6 aide des entreprises comme la vôtre à transformer leur stratégie marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap items-center justify-center gap-12 opacity-70">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-12 bg-gray-200 w-32 rounded"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
