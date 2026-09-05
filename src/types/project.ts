export type ProjectCategory = "all" | "web" | "saas" | "ecommerce" | "mobile";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: "web" | "saas" | "ecommerce" | "mobile";
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  year: string;
  keyFeatures?: string[];
}
