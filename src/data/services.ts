import { ServiceItem } from "@/types/services";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "frontend-dev",
    title: "Développement Web Front-End",
    badge: "Front-End & UI",
    shortDescription: "Création d'interfaces web modernes, réactives et performantes.",
    fullDescription: "Conception et développement d'interfaces web réactives, rapides et modernes avec React.js et Next.js, adaptées à tous les écrans et optimisées pour le référencement.",
    iconName: "Code2",
    deliverables: [
      "Applications Web React.js & Next.js sur-mesure",
      "Interfaces 100% responsives (Mobile, Tablette, Desktop)",
      "Optimisation de la vitesse d'affichage & SEO",
      "Intégration UI/UX intuitive et accessible",
    ],
    technologies: ["React.js", "Next.js", "JavaScript", "HTML5/CSS3"],
    highlightColor: "#1e3a8a",
  },
  {
    id: "backend-api",
    title: "Back-End & Bases de Données",
    badge: "Back-End & APIs",
    shortDescription: "Développement d'APIs REST, sécurité et gestion de données.",
    fullDescription: "Développement d'APIs REST structurées, gestion de l'authentification et administration de bases de données pour alimenter vos applications web en toute sécurité.",
    iconName: "Server",
    deliverables: [
      "Conception d'APIs RESTful performantes (Node.js)",
      "Gestion des utilisateurs & authentification sécurisée",
      "Bases de données relationnelles PostgreSQL & Supabase",
      "Modélisation et requêtage avec ORM Prisma",
    ],
    technologies: ["Node.js", "PostgreSQL", "Supabase", "Prisma", "API REST"],
    highlightColor: "#059669",
  },
];
