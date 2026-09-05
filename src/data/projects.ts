import { Project, UpcomingProjectsInfo } from "@/types/project";

export const PROJECTS_DATA: Project[] = [
  {
    id: "fani-impact-lab",
    title: "Fani Impact Lab",
    subtitle: "Conseil stratégique en entrepreneuriat, innovation & développement des écosystèmes",
    category: "web",
    categoryLabel: "Plateforme Web & Conseil Stratégique",
    problem:
      "Besoin d'une vitrine numérique institutionnelle et d'outils digitaux pour présenter les expertises de conseil stratégique et l'accompagnement des écosystèmes d'innovation.",
    solution:
      "Conception d'une plateforme web moderne et intuitive valorisant les offres de conseil en entrepreneuriat, l'accompagnement d'écosystèmes et la transformation d'avenir.",
    description:
      "Plateforme web officielle de Fani Impact Lab, cabinet de conseil stratégique spécialisé dans l'entrepreneuriat, l'innovation et le développement des écosystèmes.",
    imageUrl: "/images/projects/fanimpactlab.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Conseil Stratégique"],
    deliverables: [
      "Design d'interface moderne & institutionnel UI/UX",
      "Présentation des expertises en entrepreneuriat et innovation",
      "Architecture web réactive et optimisée SEO",
      "Valorisation des programmes et écosystèmes",
    ],
    year: "2024",
    demoUrl: "https://fanimpactlab.vercel.app/",
    featured: true,
  },
  {
    id: "acceent-ziguinchor",
    title: "ACCEENT Ziguinchor",
    subtitle: "Accompagnement, Éducation & Entrepreneuriat des Jeunes et Femmes",
    category: "fullstack",
    categoryLabel: "Plateforme Sociale & Éducation",
    problem:
      "Manque d'accès centralisé aux opportunités d'apprentissage, d'entrepreneuriat et d'inclusion numérique pour la jeunesse et les femmes de la région.",
    solution:
      "Création d'un portail numérique communautaire et éducatif facilitant la formation, l'insertion professionnelle et l'incubation de projets locaux.",
    description:
      "Plateforme numérique d'impact social dédiée à l'accompagnement, la formation et l'entrepreneuriat des jeunes et des femmes de la région de Ziguinchor.",
    imageUrl: "/images/projects/acceent.jpg",
    tags: ["Next.js", "React", "TypeScript", "UI/UX Design", "Inclusion Numérique"],
    deliverables: [
      "Portail web communautaire et éducatif",
      "Ergonomie accessible & 100% responsive",
      "Valorisation des programmes d'accompagnement",
      "Optimisation SEO et temps de chargement ultra-rapide",
    ],
    year: "2026",
    demoUrl: "https://acceent.vercel.app/",
    featured: true,
  },
];

export const UPCOMING_PROJECTS_DATA: UpcomingProjectsInfo = {
  title: "Projets en développement",
  description:
    "Je continue à développer de nouveaux projets informatiques et applications sur-mesure afin d'explorer de nouvelles technologies et concevoir des solutions numériques répondant à des besoins réels.",
  technologiesExplored: ["TypeScript", "React", "Next.js", "Prisma", "Supabase", "PostgreSQL"],
};
