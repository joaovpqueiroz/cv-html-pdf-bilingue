"use client";

import { useState } from "react";

import { CvHeader } from "@/components/cv/CvHeader";
import { cvContent } from "@/content/cv";
import type { Locale } from "@/types/cv";
import { CvSummary } from "@/components/cv/CvSummary";
import { CvSkills } from "@/components/cv/CvSkills";
import { CvExperience } from "@/components/cv/CvExperience";
import { CvProjects } from "@/components/cv/CvProjects";
import { CvEducation } from "@/components/cv/CvEducation";
import { CvLanguages } from "@/components/cv/CvLanguages";
import { CvProfessionalDevelopment } from "@/components/cv/CvProfessionalDevelopment";

export function Cv() {
    const [locale, setLocale] = useState<Locale>("pt-BR");

    const content = cvContent[locale];

    function toggleLocale() {
        setLocale((currentLocale) =>
            currentLocale === "pt-BR" ? "en-US" : "pt-BR",
        );
    }

    function handlePrint() {
        window.print();
    }

    return (
        <main className="cv-shell">
            <div className="cv-actions">
                <button
                    className="cv-action"
                    type="button"
                    onClick={toggleLocale}
                >
                    {locale === "pt-BR" ? "EN" : "PT"}
                </button>

                <button
                    className="cv-action"
                    type="button"
                    onClick={handlePrint}
                >
                    {locale === "pt-BR" ? "Salvar como PDF" : "Save as PDF"}
                </button>
            </div>

            <article className="cv-page">
                <CvHeader header={content.header} />

                <CvSummary
                    title={content.summary.title}
                    summary={content.summary.text}
                />

                <CvSkills
                    title={content.skills.title}
                    levelGuideLabel={content.skills.levelGuideLabel}
                    levelDefinitions={content.skills.levelDefinitions}
                    categories={content.skills.categories}
                />

                <CvExperience
                    title={content.experience.title}
                    items={content.experience.items}
                />

                <CvProjects
                    title={content.projects.title}
                    items={content.projects.items}
                />

                <CvEducation
                    title={content.education.title}
                    items={content.education.items}
                />

                <CvProfessionalDevelopment
                    title={content.professionalDevelopment.title}
                    items={content.professionalDevelopment.items}
                />

                <CvLanguages
                    title={content.languages.title}
                    items={content.languages.items}
                />
            </article>
        </main>
    );
}