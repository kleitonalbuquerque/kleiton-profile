/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // outras variáveis de ambiente do Vite podem ser adicionadas aqui
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

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
