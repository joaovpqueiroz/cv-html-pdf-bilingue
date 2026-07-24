import type { CvContentByLocale } from "@/types/cv";

export const cvContent: CvContentByLocale = {
    "pt-BR": {
        header: {
            name: "João Queiroz",
            title: "Backend Java Engineer | SAP Commerce Cloud",
            specialization: [
                "Arquitetura e Performance",
                "Integrações",
                "E-commerce escalável",
                "Spring",
            ],
            location: "São Paulo, SP - Brasil",
            email: "contato@joaoqueiroz.dev",
            links: [
                {
                    label: "Portfólio",
                    href: "https://joaoqueiroz.dev",
                },
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/joaovpqueiroz/",
                },
                {
                    label: "GitHub",
                    href: "https://github.com/joaovpqueiroz",
                },
            ],
        },
        summary: {
            title: "Resumo Profissional",
            text: "Engenheiro de software especializado em desenvolvimento backend com Java e SAP Commerce Cloud (Hybris), com experiência em projetos de e-commerce de média e alta complexidade. Atua na construção e evolução de soluções escaláveis, arquitetura de integrações, APIs REST e otimização de performance em ambientes críticos. Sua trajetória inclui evolução de plataformas em produção, modernização de aplicações legadas, migração de Java 8 para Java 17 e integração com gateways de pagamento e serviços externos. Busca gerar impacto real no produto e no negócio por meio de soluções estáveis, eficientes e sustentáveis.",
        },
        skills: {
            title: "Competências Técnicas",
            levelGuideLabel: "Como interpretar os níveis?",
            levelDefinitions: {
                specialist: {
                    label: "Especialista",
                    description:
                        "Lidera tecnicamente, resolve problemas complexos, toma decisões e orienta outros profissionais.",
                },
                advanced: {
                    label: "Avançado",
                    description:
                        "Atua com autonomia, implementa soluções completas e resolve a maioria dos problemas sem apoio.",
                },
                intermediate: {
                    label: "Intermediário",
                    description:
                        "Utiliza com segurança no dia a dia, consultando referências em cenários mais complexos.",
                },
                basic: {
                    label: "Básico",
                    description:
                        "Possui conhecimento prático inicial e está desenvolvendo autonomia profissional.",
                },
            },
            categories: [
                {
                    title: "Backend e APIs",
                    skills: [
                        { name: "Java", level: "advanced" },
                        { name: "Spring", level: "advanced" },
                        { name: "APIs REST", level: "advanced" },
                        { name: "Clean Code e SOLID", level: "advanced" },
                    ],
                },
                {
                    title: "Enterprise Commerce",
                    skills: [
                        {
                            name: "SAP Commerce Cloud (Hybris)",
                            level: "advanced",
                        },
                        {
                            name: "Integrações de e-commerce",
                            level: "advanced",
                        },
                        {
                            name: "Gateways de pagamento",
                            level: "advanced",
                        },
                        {
                            name: "Performance e escalabilidade",
                            level: "intermediate",
                        },
                    ],
                },
                {
                    title: "Modernização e Cloud",
                    skills: [
                        { name: "Java 8 e Java 17", level: "advanced" },
                        { name: "Migração de aplicações", level: "advanced" },
                        { name: "Amazon S3", level: "intermediate" },
                    ],
                },
                {
                    title: "Engenharia e colaboração",
                    skills: [
                        { name: "Scrum", level: "advanced" },
                        {
                            name: "Documentação de software",
                            level: "advanced",
                        },
                        {
                            name: "Refinamento técnico",
                            level: "advanced",
                        },
                        {
                            name: "Times internacionais",
                            level: "intermediate",
                        },
                    ],
                },
                {
                    title: "Inteligência Artificial",
                    skills: [
                        { name: "Engenharia de Prompt", level: "intermediate" },
                        { name: "Spring AI", level: "intermediate" },
                    ],
                },
            ],
        },
        experience: {
            title: "Experiência Profissional",
            items: [
                {
                    company: "Hitss Brasil",
                    role: "Desenvolvedor Backend Java",
                    period: "dez/2023 - atual",
                    context:
                        "Alocado na Claro Brasil como SAP Commerce Developer",
                    highlights: [
                        "Atua no desenvolvimento backend Java em uma operação de e-commerce de alta complexidade baseada em SAP Commerce Cloud (Hybris).",
                        "Contribui para a evolução e a estabilidade da plataforma, com foco em arquitetura, integrações e performance em ambiente crítico.",
                        "Colabora com equipes multidisciplinares na análise de requisitos técnicos e na implementação de soluções alinhadas às necessidades do produto e do negócio.",
                    ],
                },
                {
                    company: "Keyrus",
                    role: "Desenvolvedor Java",
                    period: "abr/2021 - nov/2023",
                    highlights: [
                        "Desenvolveu novas funcionalidades e sustentou plataformas SAP Commerce em produção para os projetos Amway e Alkosto.",
                        "Participou da modernização da plataforma Amway, migrando o Java 8 para o Java 17 e o SAP Commerce da versão 5.4 para a 22.05.",
                        "Implementou APIs REST para integração com serviços externos, novos métodos de pagamento e integrações com gateways de pagamento.",
                        "Desenvolveu uma funcionalidade de geração de relatórios de pontuação integrada ao Amazon S3.",
                        "Atuou em uma squad multidisciplinar internacional, utilizando Scrum e refinando especificações com base em requisitos técnicos.",
                        "Realizou correções e melhorias em código legado, além de produzir e manter documentação de software.",
                    ],
                },
            ],
        },
        projects: {
            title: "Projetos Selecionados",
            items: [
                {
                    name: "Alkosto",
                    technologies: [
                        "Java",
                        "SAP Commerce Cloud",
                        "Gateways de pagamento",
                        "Scrum",
                    ],
                    description:
                        "Evolução de uma plataforma de commerce em uma squad multidisciplinar internacional.",
                    highlights: [
                        "Desenvolveu novas funcionalidades e integrações com gateways de pagamento.",
                        "Colaborou com profissionais de diferentes disciplinas e localidades durante todo o ciclo de desenvolvimento.",
                    ],
                },
                {
                    name: "Migração Amway",
                    technologies: [
                        "Java 17",
                        "SAP Commerce 22.05",
                        "Modernização",
                        "Scrum",
                    ],
                    description:
                        "Modernização tecnológica da plataforma, atualizando versões de linguagem e do SAP Commerce.",
                    highlights: [
                        "Migrou a aplicação de Java 8 para Java 17.",
                        "Migrou o SAP Commerce (Hybris) da versão 5.4 para a 22.05.",
                        "Implementou novas funcionalidades após a atualização da base tecnológica.",
                    ],
                },
                {
                    name: "Amway",
                    technologies: [
                        "Java",
                        "SAP Commerce",
                        "REST APIs",
                        "Amazon S3",
                    ],
                    description:
                        "Desenvolvimento e sustentação de uma plataforma de commerce em produção.",
                    highlights: [
                        "Criou APIs REST para integração com serviços externos e implementou novos métodos de pagamento.",
                        "Desenvolveu relatórios de pontuação integrados ao Amazon S3.",
                        "Evoluiu código legado e manteve a documentação técnica da solução.",
                    ],
                },
            ],
        },
        education: {
            title: "Formação Acadêmica",
            items: [
                {
                    institution: "Universidade de São Paulo",
                    course:
                        "MBA em Engenharia de Software (Pós-graduação Lato Sensu)",
                    period: "mai/2026 - em andamento",
                },
                {
                    institution: "FIAP",
                    course: "Análise de Sistemas de Computação",
                    period: "2020 - dez/2021",
                },
                {
                    institution: "Universidade de São Paulo",
                    course: "Pró-Profissão em Tecnologia da Informação",
                    period: "mar/2019 - mar/2021",
                },
            ],
        },
        professionalDevelopment: {
            title: "Certificações",
            items: [
                {
                    institution: "Universidade de São Paulo",
                    title:
                        "Engenharia de Prompt para Engenheiros de Software",
                    period: "mar/2026",
                    description:
                        "Aplicação de técnicas de engenharia de prompt no contexto de desenvolvimento de software.",
                },
                {
                    institution: "FIAP",
                    title: "Desenvolvimento Java Enterprise",
                    period: "jun/2021",
                    description:
                        "Desenvolvimento de aplicações corporativas com Java.",
                },
                {
                    institution: "FIAP",
                    title: "DevOps & Agile Culture",
                    period: "jan/2021",
                    description:
                        "Fundamentos de DevOps, colaboração e cultura ágil.",
                },
                {
                    institution: "Universidade de São Paulo",
                    title: "Introdução à Ciência da Computação com Python",
                    period: "mar/2020",
                    description:
                        "Fundamentos de programação e ciência da computação utilizando Python.",
                },
                {
                    institution: "FIAP",
                    title: "Cyber Secure Culture",
                    period: "fev/2020",
                    description:
                        "Fundamentos de segurança e cultura de proteção da informação.",
                },
            ],
        },
        languages: {
            title: "Idiomas",
            items: [
                {
                    name: "Português",
                    level: "Nativo ou bilíngue",
                },
                {
                    name: "Inglês",
                    level: "Proficiência profissional",
                },
            ],
        },
    },
    "en-US": {
        header: {
            name: "João Queiroz",
            title: "Backend Java Engineer | SAP Commerce Cloud",
            specialization: [
                "Architecture and Performance",
                "Integrations",
                "Scalable e-commerce",
                "Spring",
            ],
            location: "São Paulo, SP - Brazil",
            email: "contato@joaoqueiroz.dev",
            links: [
                {
                    label: "Portfolio",
                    href: "https://joaoqueiroz.dev",
                },
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/joaovpqueiroz/",
                },
                {
                    label: "GitHub",
                    href: "https://github.com/joaovpqueiroz",
                },
            ],
        },
        summary: {
            title: "Professional Summary",
            text: "Software engineer specializing in backend development with Java and SAP Commerce Cloud (Hybris), experienced in medium- and high-complexity e-commerce projects. Works on scalable solution development, integration architecture, REST APIs, and performance optimization in critical environments. His background includes evolving production platforms, modernizing legacy applications, migrating from Java 8 to Java 17, and integrating payment gateways and external services. Focused on delivering stable, efficient, and sustainable solutions that create tangible product and business impact.",
        },
        skills: {
            title: "Technical Skills",
            levelGuideLabel: "How to interpret skill levels?",
            levelDefinitions: {
                specialist: {
                    label: "Specialist",
                    description:
                        "Provides technical leadership, solves complex problems, makes decisions, and guides other professionals.",
                },
                advanced: {
                    label: "Advanced",
                    description:
                        "Works autonomously, implements complete solutions, and solves most problems without assistance.",
                },
                intermediate: {
                    label: "Intermediate",
                    description:
                        "Uses the technology confidently in daily work and consults references in more complex scenarios.",
                },
                basic: {
                    label: "Basic",
                    description:
                        "Has initial practical knowledge and is developing professional autonomy.",
                },
            },
            categories: [
                {
                    title: "Backend and APIs",
                    skills: [
                        { name: "Java", level: "advanced" },
                        { name: "Spring", level: "advanced" },
                        { name: "REST APIs", level: "advanced" },
                        { name: "Clean Code and SOLID", level: "advanced" },
                    ],
                },
                {
                    title: "Enterprise Commerce",
                    skills: [
                        {
                            name: "SAP Commerce Cloud (Hybris)",
                            level: "advanced",
                        },
                        {
                            name: "E-commerce integrations",
                            level: "advanced",
                        },
                        {
                            name: "Payment gateways",
                            level: "advanced",
                        },
                        {
                            name: "Performance and scalability",
                            level: "intermediate",
                        },
                    ],
                },
                {
                    title: "Modernization and Cloud",
                    skills: [
                        { name: "Java 8 and Java 17", level: "advanced" },
                        { name: "Application migration", level: "advanced" },
                        { name: "Amazon S3", level: "intermediate" },
                    ],
                },
                {
                    title: "Engineering and Collaboration",
                    skills: [
                        { name: "Scrum", level: "advanced" },
                        {
                            name: "Software documentation",
                            level: "advanced",
                        },
                        {
                            name: "Technical refinement",
                            level: "advanced",
                        },
                        {
                            name: "International teams",
                            level: "intermediate",
                        },
                    ],
                },
                {
                    title: "Artificial Intelligence",
                    skills: [
                        { name: "Prompt Engineering", level: "intermediate" },
                        { name: "Spring AI", level: "intermediate" },
                    ],
                },
            ],
        },
        experience: {
            title: "Professional Experience",
            items: [
                {
                    company: "Hitss Brasil",
                    role: "Backend Java Developer",
                    period: "Dec 2023 - Present",
                    context:
                        "Assigned to Claro Brasil as a SAP Commerce Developer",
                    highlights: [
                        "Develops Java backend solutions for a high-complexity e-commerce operation built on SAP Commerce Cloud (Hybris).",
                        "Contributes to platform evolution and stability, focusing on architecture, integrations, and performance in a critical environment.",
                        "Collaborates with multidisciplinary teams to analyze technical requirements and deliver solutions aligned with product and business needs.",
                    ],
                },
                {
                    company: "Keyrus",
                    role: "Java Developer",
                    period: "Apr 2021 - Nov 2023",
                    highlights: [
                        "Developed new features and maintained production SAP Commerce platforms for the Amway and Alkosto projects.",
                        "Helped modernize the Amway platform by migrating Java 8 to Java 17 and SAP Commerce 5.4 to version 22.05.",
                        "Implemented REST APIs for external service integrations, new payment methods, and payment gateway integrations.",
                        "Developed a score-reporting feature integrated with Amazon S3.",
                        "Worked in an international multidisciplinary squad using Scrum and refined specifications based on technical requirements.",
                        "Fixed and improved legacy code while creating and maintaining software documentation.",
                    ],
                },
            ],
        },
        projects: {
            title: "Selected Projects",
            items: [
                {
                    name: "Alkosto",
                    technologies: [
                        "Java",
                        "SAP Commerce Cloud",
                        "Payment gateways",
                        "Scrum",
                    ],
                    description:
                        "E-commerce platform evolution within an international multidisciplinary squad.",
                    highlights: [
                        "Developed new features and payment gateway integrations.",
                        "Collaborated with professionals across disciplines and locations throughout the development lifecycle.",
                    ],
                },
                {
                    name: "Amway Migration",
                    technologies: [
                        "Java 17",
                        "SAP Commerce 22.05",
                        "Modernization",
                        "Scrum",
                    ],
                    description:
                        "Technology modernization initiative upgrading both the language and SAP Commerce versions.",
                    highlights: [
                        "Migrated the application from Java 8 to Java 17.",
                        "Migrated SAP Commerce (Hybris) from version 5.4 to 22.05.",
                        "Delivered new features after updating the technology foundation.",
                    ],
                },
                {
                    name: "Amway",
                    technologies: [
                        "Java",
                        "SAP Commerce",
                        "REST APIs",
                        "Amazon S3",
                    ],
                    description:
                        "Development and maintenance of a production commerce platform.",
                    highlights: [
                        "Built REST APIs for external service integrations and implemented new payment methods.",
                        "Developed score reports integrated with Amazon S3.",
                        "Improved legacy code and maintained the solution's technical documentation.",
                    ],
                },
            ],
        },
        education: {
            title: "Education",
            items: [
                {
                    institution: "University of São Paulo",
                    course:
                        "MBA in Software Engineering (Lato Sensu Graduate Program)",
                    period: "May 2026 - Present",
                },
                {
                    institution: "FIAP",
                    course: "Computer Systems Analysis",
                    period: "2020 - Dec 2021",
                },
                {
                    institution: "University of São Paulo",
                    course:
                        "Pró-Profissão Program in Information Technology",
                    period: "Mar 2019 - Mar 2021",
                },
            ],
        },
        professionalDevelopment: {
            title: "Certifications",
            items: [
                {
                    institution: "University of São Paulo",
                    title: "Prompt Engineering for Software Engineers",
                    period: "Mar 2026",
                    description:
                        "Application of prompt engineering techniques in software development.",
                },
                {
                    institution: "FIAP",
                    title: "Enterprise Java Development",
                    period: "Jun 2021",
                    description:
                        "Enterprise application development with Java.",
                },
                {
                    institution: "FIAP",
                    title: "DevOps & Agile Culture",
                    period: "Jan 2021",
                    description:
                        "Fundamentals of DevOps, collaboration, and agile culture.",
                },
                {
                    institution: "University of São Paulo",
                    title: "Introduction to Computer Science with Python",
                    period: "Mar 2020",
                    description:
                        "Programming and computer science fundamentals using Python.",
                },
                {
                    institution: "FIAP",
                    title: "Cyber Secure Culture",
                    period: "Feb 2020",
                    description:
                        "Fundamentals of security and information protection culture.",
                },
            ],
        },
        languages: {
            title: "Languages",
            items: [
                {
                    name: "Portuguese",
                    level: "Native or bilingual",
                },
                {
                    name: "English",
                    level: "Professional working proficiency",
                },
            ],
        },
    },
};
