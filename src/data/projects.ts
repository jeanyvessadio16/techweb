import { Project, UpcomingProjectsInfo } from "@/types/project";

export const PROJECTS_DATA: Project[] = [
  {
    id: "fani-impact-lab",
    title: "Fani Impact Lab",
    subtitle: "Conseil stratégique en entrepreneuriat, innovation & développement des écosystèmes",
    category: "web",
    categoryLabel: "Plateforme Web Institutionnelle",
    problem:
      "Le cabinet Fani Impact Lab avait besoin d'une vitrine numérique professionnelle et crédible pour présenter son accompagnement des écosystèmes d'innovation, ses programmes d'entrepreneuriat et ses expertises auprès des partenaires institutionnels et privés.",
    solution:
      "Conception d'une plateforme web moderne et épurée sur Next.js, mettant en valeur l'identité visuelle du cabinet, la clarté de son offre de conseil et offrant un temps de chargement ultra-rapide sur mobile et ordinateur.",
    description:
      "Plateforme web officielle de Fani Impact Lab, cabinet de conseil stratégique spécialisé dans l'entrepreneuriat, l'innovation et le développement des écosystèmes.",
    imageUrl: "/images/projects/fanimpactlab.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX Design", "SEO"],
    deliverables: [
      "Design d'interface moderne & institutionnel UI/UX",
      "Architecture web réactive et optimisée SEO",
      "Présentation claire des expertises en entrepreneuriat et accompagnement d'écosystèmes",
      "Optimisation des performances d'affichage sur tous les terminaux",
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
    categoryLabel: "Plateforme Numérique d'Impact Social",
    problem:
      "La jeunesse et les femmes de la région de Ziguinchor manquaient d'un espace numérique centralisé pour accéder aux opportunités d'apprentissage, aux programmes d'insertion professionnelle et aux ressources d'incubation.",
    solution:
      "Développement d'un portail web communautaire accessible, fluide et structuré, permettant de promouvoir les programmes de formation, de faciliter les inscriptions et d'accentuer l'inclusion numérique locale.",
    description:
      "Plateforme numérique d'impact social dédiée à l'accompagnement, la formation et l'entrepreneuriat des jeunes et des femmes de la région de Ziguinchor.",
    imageUrl: "/images/projects/acceent.jpg",
    tags: ["Next.js", "React", "TypeScript", "UI/UX Design", "Accessibilité", "Performance"],
    deliverables: [
      "Portail web communautaire et éducatif",
      "Navigation intuitive & responsive Mobile-First",
      "Valorisation des programmes d'accompagnement et des opportunités locales",
      "Balisage SEO sémantique et temps de chargement accéléré",
    ],
    year: "2026",
    demoUrl: "https://acceent.vercel.app/",
    featured: true,
  },
];

export const UPCOMING_PROJECTS_DATA: UpcomingProjectsInfo = {
  title: "Projets & Solutions Sur-Mesure",
  description:
    "Chaque projet est conçu avec une attention particulière portée aux besoins réels du client et aux bénéfices utilisateurs. Mon architecture modulaire me permet de développer rapidement de nouvelles fonctionnalités.",
  technologiesExplored: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Prisma"],
};
