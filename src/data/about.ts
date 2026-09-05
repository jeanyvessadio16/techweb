import { AboutData } from "@/types/about";

export const ABOUT_DATA: AboutData = {
  title: "À propos de moi",
  subtitle: "Concepteur & Développeur Front-End orienté impact et précision",
  paragraphs: [
    "Je suis Jean-Yves SADIO, développeur web spécialisé dans la conception d'applications front-end modernes, réactives et ergonomiques sous le nom TECHWEB-JY.",
    "Mon objectif quotidien est de concevoir des expériences utilisateur fluides et mémorables, alliant rigueur technique, accessibilité et design épuré. Je porte une attention particulière à la clarté du code, à la fluidité des micro-interactions et à la rapidité d'affichage.",
    "Que ce soit pour créer une application SaaS complexe, un tableau de bord analytique ou une refonte complète de site e-commerce, je m'assure que chaque composant réponde aux besoins des utilisateurs finaux tout en respectant les standards de l'industrie.",
  ],
  stats: [
    {
      id: "experience",
      value: "+3 ans",
      label: "D'expérience pratique",
      description: "En développement d'interfaces React & Next.js modernes",
    },
    {
      id: "projects",
      value: "20+",
      label: "Projets réalisés",
      description: "Applications web, landing pages et plateformes SaaS",
    },
    {
      id: "responsive",
      value: "100%",
      label: "Responsive & Testé",
      description: "Adaptation pixel-perfect sur mobile, tablette et desktop",
    },
    {
      id: "satisfaction",
      value: "100%",
      label: "Engagement qualité",
      description: "Code documenté, maintenable et axé performance",
    },
  ],
  values: [
    {
      id: "clean-code",
      title: "Code Propre & Robuste",
      description: "Architecture modulaire TypeScript, conventions strictes et maintenabilité sur le long terme.",
      iconName: "ShieldCheck",
    },
    {
      id: "ux-first",
      title: "UX & Ergonomie IHM",
      description: "Parcours utilisateurs intuitifs, temps de chargement optimisés et interactions sans friction.",
      iconName: "Sparkles",
    },
    {
      id: "communication",
      title: "Rigueur & Transparence",
      description: "Respect scrupuleux des délais, écoute active et communication claire tout au long du projet.",
      iconName: "Clock",
    },
  ],
  career: [
    {
      id: "1",
      year: "2023 - Aujourd'hui",
      role: "Développeur Front-End Indépendant",
      companyOrContext: "TECHWEB-JY",
      description: "Accompagnement d'entreprises et créateurs dans la conception d'applications Next.js, interfaces SaaS et intégrations UI sur-mesure.",
    },
    {
      id: "2",
      year: "2021 - 2023",
      role: "Développeur Web JavaScript / React",
      companyOrContext: "Projets & Collaborations Tech",
      description: "Développement d'interfaces responsives, consommation d'APIs REST, mise en place de design systems réutilisables.",
    },
  ],
};
