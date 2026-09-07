export type SkillLevel = "Pratique régulière" | "Maîtrise opérationnelle" | "Expertise de conception";

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  iconName?: string;
  color?: string;
  description: string;
  useCase?: string;
  benefit?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}
