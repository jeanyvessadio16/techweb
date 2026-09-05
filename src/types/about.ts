export interface StatHighlight {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface CareerMilestone {
  id: string;
  year: string;
  role: string;
  companyOrContext: string;
  description: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  paragraphs: string[];
  stats: StatHighlight[];
  values: ValueItem[];
  career: CareerMilestone[];
}
