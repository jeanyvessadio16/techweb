export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  benefits: string[];
  targetAudience: string[];
  deliverables: string[];
  technologies: string[];
  iconName: string;
  highlightColor?: string;
}
