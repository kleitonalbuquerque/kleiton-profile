
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  logo: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
