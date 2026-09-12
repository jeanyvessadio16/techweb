import { ServiceItem } from "@/types/services";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "creation-sites-web",
    title: "Création de Sites Web",
    badge: "Sites Vitrines & Institutionnels",
    shortDescription: "Sites web modernes, vitrines et institutionnels optimisés pour Google et conçus pour convertir vos visiteurs.",
    fullDescription: "Je conçois des sites web sur-mesure pour les entreprises, organisations, entrepreneurs et associations. Chaque site est pensé pour être rapide, élégant, accessible et parfaitement adapté à votre image de marque.",
    problem: "Un site web obsolète, lent ou mal structuré fait perdre en crédibilité et ne génère aucun prospect qualifié.",
    solution: "Conception d'un site web ultra-rapide, 100% responsive et structuré stratégiquement pour valoriser votre offre et inciter à la prise de contact.",
    benefits: [
      "Visibilité renforcée sur Google grâce à un référencement naturel (SEO) soigné",
      "Expérience utilisateur fluide sur smartphone, tablette et ordinateur",
      "Design haut de gamme véhiculant immédiatement votre professionnalisme",
      "Sécurité et temps de chargement optimisés pour un taux de rebond minimal",
    ],
    targetAudience: [
      "Entreprises & PME",
      "Porteurs de projets & Entrepreneurs",
      "Institutions & Organisations",
      "Associations & Écosystèmes locaux",
    ],
    deliverables: [
      "Site vitrine ou institutionnel clé en main",
      "Design responsive Mobile-First & Accessibilité",
      "Optimisation SEO technique & balisage sémantique",
      "Formulaire de contact sécurisé & intégration Google Maps",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO Schema.org"],
    iconName: "Globe",
    highlightColor: "#1e3a8a",
  },
  {
    id: "developpement-applications-web",
    title: "Développement d'Applications Web",
    badge: "Applications Sur-Mesure & SaaS",
    shortDescription: "Applications web métiers, dashboards et outils sur-mesure rapides et sécurisés avec React & Node.js.",
    fullDescription: "Développement d'applications web robustes adaptées à vos processus métier spécifiques. De la gestion de données aux tableaux de bord complexes avec authentification sécurisée.",
    problem: "Les logiciels standards manquent de flexibilité et les tâches manuelles répétitives ralentissent la croissance de votre activité.",
    solution: "Création d'une application web sur-mesure automatisant vos processus et offrant une interface intuitive pour vos équipes ou vos clients.",
    benefits: [
      "Gain de temps majeur grâce à l'automatisation et la centralisation des données",
      "Sécurité renforcée des données et gestion fine des autorisations utilisateurs",
      "Architecture évolutive capable d'absorber la croissance de votre entreprise",
      "Accessibilité en ligne 24/7 sur tous les navigateurs web",
    ],
    targetAudience: [
      "Entreprises nécessitant un outil métier interne",
      "Startups & SaaS",
      "Organisations gérant des bases de données complexes",
      "Gestionnaires de projets et équipes opérationnelles",
    ],
    deliverables: [
      "Tableaux de bord (Dashboards) & Interfaces d'administration",
      "Système d'authentification sécurisé (JWT, OAuth)",
      "API REST performantes et structurées",
      "Modélisation et intégration de base de données (PostgreSQL, Supabase, Prisma)",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Prisma"],
    iconName: "LayoutGrid",
    highlightColor: "#0284c7",
  },
];
