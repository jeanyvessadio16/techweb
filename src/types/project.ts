export type ProjectCategory = "all" | "web" | "fullstack" | "design";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  problem?: string;
  solution?: string;
  description: string;
  imageUrl: string;
  tags: string[];
  features?: string[];
  deliverables?: string[];
  year: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface UpcomingProjectsInfo {
  title: string;
  description: string;
  technologiesExplored: string[];
}
