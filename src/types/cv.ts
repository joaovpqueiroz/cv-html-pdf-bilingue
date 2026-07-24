export type Locale = "pt-BR" | "en-US";

export type SkillLevel =
    | "specialist"
    | "advanced"
    | "intermediate"
    | "basic";

export interface ContactLink {
    label: string;
    href: string;
}

export interface Header {
    name: string;
    title: string;
    specialization: string[];
    location: string;
    email: string;
    links: ContactLink[];
}

export interface Skill {
    name: string;
    level: SkillLevel;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    context?: string;
    highlights: string[];
}

export interface Project {
    name: string;
    technologies: string[];
    description: string;
    highlights: string[];
}

export interface Education {
    institution: string;
    course: string;
    period: string;
    certificateUrl?: string;
    certificateLabel?: string;
}

export interface ProfessionalDevelopment {
    institution: string;
    title: string;
    period?: string;
    description: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface SkillLevelDefinition {
    label: string;
    description: string;
}

export interface CvContent {
    header: Header;
    summary: {
        title: string;
        text: string;
    };
    skills: {
        title: string;
        levelGuideLabel: string;
        levelDefinitions: Record<SkillLevel, SkillLevelDefinition>;
        categories: SkillCategory[];
    };
    experience: {
        title: string;
        items: Experience[];
    };
    projects: {
        title: string;
        items: Project[];
    };
    education: {
        title: string;
        items: Education[];
    };
    professionalDevelopment: {
        title: string;
        items: ProfessionalDevelopment[];
    };
    languages: {
        title: string;
        items: Language[];
    };
}

export type CvContentByLocale = Record<Locale, CvContent>;