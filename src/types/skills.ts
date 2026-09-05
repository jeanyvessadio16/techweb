export type SkillLevel = "Débutant" | "Intermédiaire" | "Avancé" | "Expert";

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  level?: SkillLevel;
  iconName?: string;
  color?: string;
  description?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}
