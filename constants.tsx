
import { ExperienceItem, EducationItem, Skill } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Mirante Tecnologia",
    role: "UX/UI & Frontend Specialist",
    period: "2024 – Present",
    description: [
      "Arquitetura front-end escalável em React com foco em alta performance e UX/UI refinado",
      "Criação de protótipos de alta fidelidade no Figma e colaboração com stakeholders",
      "Implementação de testes unitários automatizados para garantir a qualidade e robustez do código",
      "Aplicação de práticas da metodologia SAFe para gestão ágil de projetos em larga escala",
    ]
  },
  {
    company: "YDUQS",
    role: "Software Engineer | Java, Node & React Specialist",
    period: "2020 – 2024",
    description: [
      "Liderança técnica no desenvolvimento de sistemas educacionais utilizando Java (Spring) e Node.js",
      "Construção de aplicações web modernas com React, Next.js e NestJS",
      "Design de APIs RESTful escaláveis e seguras atendendo milhares de usuários",
      "Foco em acessibilidade (WCAG), performance e manutenibilidade de código (Clean Code)"
    ]
  },
  {
    company: "Qualicorp",
    role: "Full Stack Developer | Python & Node",
    period: "2021 – 2023",
    description: [
      "Desenvolvimento de serviços de backend e APIs utilizando Python e Node.js",
      "Implementação de interfaces interativas e responsivas com Vue.js",
      "Criação de jobs automatizados para processamento de dados e integração com Neo4j",
      "Participação ativa em discussões de UX e estratégia de produto"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Pós-graduação em UX Design",
    institution: "Centro Universitário IBMR",
    period: "2021 – 2022"
  },
  {
    degree: "Bacharelado em Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário UniCarioca",
    period: "2015 – 2018"
  }
];

export const SKILLS: Skill[] = [
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
];

export const SYSTEM_PROMPT = `
Você é o assistente de IA do portfólio de Kleiton Albuquerque.
Responda de forma profissional e direta sobre a carreira dele.
Kleiton é um Engenheiro de Software Sênior com forte domínio em Java, Python, React e IA.
Destaque sua experiência atual integrando LLMs (Gemini) em sistemas governamentais.
`;
