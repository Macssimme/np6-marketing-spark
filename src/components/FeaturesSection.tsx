
import React from 'react';
import { Mail, Target, BarChart, Users, Zap, Layout } from 'lucide-react';

const featureData = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Marketing",
    description: "Créez et envoyez des emails attrayants qui convertissent. Analysez les performances en temps réel."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Segmentation avancée",
    description: "Ciblez précisément vos audiences avec une segmentation basée sur le comportement et les données."
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Analyses détaillées",
    description: "Suivez et analysez vos campagnes avec des rapports précis et des tableaux de bord interactifs."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Parcours client",
    description: "Créez des parcours client personnalisés et automatisés pour chaque segment de votre audience."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automatisation",
    description: "Automatisez vos tâches marketing récurrentes pour gagner du temps et augmenter l'efficacité."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Templates responsive",
    description: "Une bibliothèque de templates optimisés pour tous les appareils, personnalisables en quelques clics."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une suite complète pour votre <span className="gradient-text">marketing automation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment NP6 peut transformer votre stratégie marketing avec des outils puissants et intuitifs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-np6-blue/10 rounded-lg mb-4">
                <div className="text-np6-blue">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
