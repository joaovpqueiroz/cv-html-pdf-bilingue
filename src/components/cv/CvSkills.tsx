"use client";

import { useState } from "react";

import type {
    SkillCategory,
    SkillLevel,
    SkillLevelDefinition,
} from "@/types/cv";

interface CvSkillsProps {
    title: string;
    levelGuideLabel: string;
    levelDefinitions: Record<SkillLevel, SkillLevelDefinition>;
    categories: SkillCategory[];
}

export function CvSkills({
    title,
    levelGuideLabel,
    levelDefinitions,
    categories,
}: CvSkillsProps) {
    const [isGuideOpen, setIsGuideOpen] = useState(false);

    return (
        <section className="cv-section">
            <div className="cv-section-heading">
                <h2 className="cv-section-title">{title}</h2>

                <button
                    className="skill-guide-trigger"
                    type="button"
                    onClick={() => setIsGuideOpen((current) => !current)}
                    aria-expanded={isGuideOpen}
                >
                    {levelGuideLabel}
                </button>
            </div>

            {isGuideOpen && (
                <div className="skill-guide">
                    {Object.entries(levelDefinitions).map(
                        ([level, definition]) => (
                            <div className="skill-guide-item" key={level}>
                                <strong>{definition.label}</strong>
                                <p>{definition.description}</p>
                            </div>
                        ),
                    )}
                </div>
            )}

            <div className="skill-categories">
                {categories.map((category) => (
                    <div className="skill-category" key={category.title}>
                        <h3 className="skill-category-title">
                            {category.title}
                        </h3>

                        <div className="skill-list">
                            {category.skills.map((skill) => {
                                const definition = levelDefinitions[skill.level];

                                return (
                                    <div className="skill-item" key={skill.name}>
                                        <span className="skill-name">{skill.name}</span>

                                        <span
                                            className="skill-level"
                                            tabIndex={0}
                                            aria-label={`${definition.label}: ${definition.description}`}
                                        >
                                            {definition.label}

                                            <span className="skill-tooltip" role="tooltip">
                                                <strong>{definition.label}</strong>
                                                {definition.description}
                                            </span>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}