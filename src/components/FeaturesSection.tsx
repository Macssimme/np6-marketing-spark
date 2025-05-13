
import React from 'react';
import { Mail, Target, BarChart, Users, Zap, Layout, Code, Shield, Database, PieChart, MessageCircle, Bot, LineChart, PiSquare } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

// Custom Workflow icon since it's not in lucide-react
const WorkflowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="8" height="8" x="3" y="3" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width="8" height="8" x="13" y="13" rx="2" />
  </svg>
);

const featureData = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Marketing Avancé",
    description: "Créez et envoyez des emails attrayants avec A/B testing automatisé, personnalisation dynamique et 99,8% de délivrabilité garantie.",
    details: [
      "Éditeur drag & drop intuitif avec plus de 200 templates",
      "Personnalisation avancée avec variables dynamiques et contenu conditionnel",
      "Optimisation automatique des heures d'envoi par IA prédictive",
      "Adaptation responsive sur tous les appareils et clients mail"
    ]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Segmentation ultra-précise",
    description: "Ciblez précisément vos audiences avec une segmentation basée sur plus de 250 critères comportementaux et données CRM.",
    details: [
      "Segmentation RFM (Récence, Fréquence, Montant) avancée",
      "Profils unifiés avec données cross-canal",
      "Segments dynamiques auto-actualisés",
      "Look-alike modeling pour cibler des profils similaires"
    ]
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Analyses en temps réel",
    description: "Suivez et analysez vos campagnes avec des tableaux de bord interactifs, rapports personnalisés et tracking précis.",
    details: [
      "KPIs en temps réel avec alertes personnalisables",
      "Attribution multi-touch pour mesurer l'impact de chaque point de contact",
      "Export automatisé vers BigQuery et PowerBI",
      "Analyses prédictives de tendances et comportements"
    ]
  },
  {
    icon: <WorkflowIcon />,
    title: "Parcours client omnicanaux",
    description: "Orchestrez des parcours client personnalisés et automatisés à travers tous vos canaux de communication.",
    details: [
      "Builder visuel avec plus de 50 triggers et conditions",
      "Intégration native SMS, push, web, réseaux sociaux",
      "Wait steps intelligents basés sur le comportement utilisateur",
      "Tests A/B/n automatisés pour optimiser les conversions"
    ]
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Intelligence Artificielle",
    description: "Exploitez la puissance de l'IA pour optimiser vos campagnes et prédire les comportements clients.",
    details: [
      "Génération de contenu optimisé pour les conversions",
      "Prédictions de propension à l'achat et risque d'attrition",
      "Optimisation autonome des objets pour maximiser l'ouverture",
      "Segmentation avancée via clustering comportemental"
    ]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "CDP intégrée",
    description: "Centralisez toutes vos données client dans une plateforme unifiée pour une vision à 360° de votre audience.",
    details: [
      "Unification d'identités cross-device et cross-canal",
      "Enrichissement automatique via plus de 30 sources de données",
      "Gouvernance des données conforme RGPD",
      "API RESTful complète pour intégrations personnalisées"
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sécurité et conformité",
    description: "Infrastructure sécurisée, hébergement en France et conformité totale aux normes RGPD et ePrivacy.",
    details: [
      "Chiffrement des données au repos et en transit (AES-256)",
      "Double authentification et contrôle d'accès granulaire",
      "Audit logs complets et détection d'anomalies",
      "DPO dédié et conseil en conformité RGPD"
    ]
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "API et intégrations",
    description: "Connectez NP6 à votre écosystème technique via notre API RESTful et plus de 100 intégrations natives.",
    details: [
      "SDK développeur complet (JavaScript, Python, PHP, Java)",
      "Webhooks personnalisables pour événements en temps réel",
      "Intégration native avec CRM leaders (Salesforce, HubSpot, MS Dynamics)",
      "Connecteurs e-commerce (Shopify, Magento, WooCommerce, PrestaShop)"
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center py-1 px-3 mb-3 rounded-full border bg-white shadow-sm">
            <div className="w-2 h-2 rounded-full bg-np6-red mr-2"></div>
            <span className="text-sm font-medium">Technologies avancées</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une suite complète pour votre <span className="accent-gradient-text">marketing automation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment NP6 peut transformer votre stratégie marketing avec des outils puissants, intelligents et intuitifs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <Collapsible key={index} className="group hover-scale-accent">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all group-hover:shadow-lg group-hover:border-np6-red/20">
                <div className="inline-flex items-center justify-center p-3 bg-np6-blue/10 rounded-lg mb-4">
                  <div className="text-np6-blue">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-np6-red transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-full justify-between text-np6-blue hover:text-np6-red hover:bg-np6-red/5">
                    <span>Fonctionnalités détaillées</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-data-[state=open]:rotate-180 transition-transform">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="mt-4 pt-4 border-t border-dashed">
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-np6-red flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">
                Architecture technique <span className="text-np6-red">performante</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                NP6 est construit sur une infrastructure moderne et robuste pour garantir performance, scalabilité et fiabilité
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 mx-auto mb-4 rounded-full bg-np6-blue/10">
                  <Zap className="h-6 w-6 text-np6-blue" />
                </div>
                <h4 className="text-lg font-semibold text-center mb-2">Infrastructure cloud</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-np6-red rounded-full mr-2"></div>
                    <span>Architecture microservices Kubernetes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-np6-red rounded-full mr-2"></div>
                    <span>Auto-scaling horizontal et vertical</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-np6-red rounded-full mr-2"></div>
                    <span>Datacenter tier-3+ en France</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 mx-auto mb-4 rounded-full bg-np6-teal/10">
                  <Database className="h-6 w-6 text-np6-teal" />
                </div>
                <h4 className="text-lg font-semibold text-center mb-2">Traitement des données</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-np6-red rounded-full mr-2"></div>
                    <span>Base de données NoSQL haute performance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-np6-red rounded-full mr-2"></div>
                    <span>Traitement BigData en temps réel</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-np6-red rounded-full mr-2"></div>
                    <span>Modèles ML optimisés pour prédictions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 mx-auto mb-4 rounded-full bg-np6-red/10">
                  <Shield className="h-6 w-6 text-np6-red" />
                </div>
                <h4 className="text-lg font-semibold text-center mb-2">Sécurité avancée</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-np6-red rounded-full mr-2"></div>
                    <span>Certifications ISO 27001 et HDS</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-np6-red rounded-full mr-2"></div>
                    <span>Protection DDoS et WAF intégré</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-np6-red rounded-full mr-2"></div>
                    <span>Audit de sécurité trimestriel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
