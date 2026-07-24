import type { Experience } from "@/types/cv";

interface CvExperienceProps {
    title: string;
    items: Experience[];
}

export function CvExperience({ title, items }: CvExperienceProps) {
    return (
        <section className="cv-section">
            <h2 className="cv-section-title">{title}</h2>

            <div className="experience-list">
                {items.map((experience) => (
                    <article
                        className="experience-item"
                        key={`${experience.company}-${experience.period}`}
                    >
                        <div className="experience-heading">
                            <div>
                                <h3 className="experience-role">{experience.role}</h3>

                                <p className="experience-company">
                                    {experience.company}
                                </p>
                            </div>

                            <span className="experience-period">
                                {experience.period}
                            </span>
                        </div>

                        {experience.context && (
                            <p className="experience-context">
                                {experience.context}
                            </p>
                        )}

                        <ul className="experience-highlights">
                            {experience.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}