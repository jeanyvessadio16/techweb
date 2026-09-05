import { Project, UpcomingProjectsInfo } from "@/types/project";

export const PROJECTS_DATA: Project[] = [
  {
    id: "casamance-tourisme",
    title: "Casamance Tourisme Solidaire",
    subtitle: "Plateforme web de tourisme solidaire & valorisation du patrimoine",
    category: "web",
    categoryLabel: "Plateforme Web & UX",
    problem: "Manque de visibilité numérique centralisée pour promouvoir les destinations culturelles, éco-touristiques et artisanales de la région de la Casamance.",
    solution: "Création d'une identité numérique moderne et d'une plateforme d'exploration immersive valorisant le patrimoine, les hébergements chez l'habitant et les circuits culturels.",
    description: "Conception d’une identité numérique et d’une plateforme destinée à valoriser les destinations, la culture, le patrimoine et les expériences touristiques de la Casamance.",
    imageUrl: "/images/projects/casamance-tourisme.jpg",
    tags: ["UI/UX Design", "Développement Web", "Responsive Design", "Identité Visuelle"],
    deliverables: [
      "Branding & Charte graphique régionale",
      "Prototypage IHM & maquettage UI/UX",
      "Plateforme web réactive multi-écrans",
      "Valorisation dynamique du patrimoine local",
    ],
    year: "2024",
    featured: true,
  },
  {
    id: "plateforme-actualites",
    title: "Plateforme d’Actualités & CMS",
    subtitle: "Application web de gestion, rédaction et publication de contenus",
    category: "fullstack",
    categoryLabel: "Full-Stack & BDD",
    problem: "Nécessité de structurer un flux éditorial dynamique avec gestion multi-auteurs, hébergement média optimisé et persistance relationnelle performante.",
    solution: "Développement d'une application Full-Stack Next.js et Prisma connectée à une base de données PostgreSQL/Supabase pour la gestion et la diffusion d'articles en temps réel.",
    description: "Conception d’une plateforme permettant de gérer et publier des articles avec leurs auteurs, leurs images et différentes informations éditoriales.",
    imageUrl: "/images/projects/news-platform.jpg",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Supabase", "TypeScript"],
    features: [
      "Gestion avancée des auteurs & informations éditoriales",
      "Création et édition dynamique d’articles",
      "Gestion et optimisation du stock d’images",
      "Gestion des données avec une base de données relationnelle",
      "Interface fluide et 100% responsive",
    ],
    year: "2024",
    featured: true,
  },
];

export const UPCOMING_PROJECTS_DATA: UpcomingProjectsInfo = {
  title: "Projets en développement",
  description: "Je continue à développer de nouveaux projets afin d’explorer de nouvelles technologies, améliorer mes compétences et concevoir des solutions numériques répondant à des besoins concrets.",
  technologiesExplored: ["JavaScript", "React", "Next.js", "Prisma", "Supabase", "PostgreSQL"],
};
