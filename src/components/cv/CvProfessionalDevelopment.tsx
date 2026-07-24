import type { ProfessionalDevelopment } from "@/types/cv";

interface CvProfessionalDevelopmentProps {
    title: string;
    items: ProfessionalDevelopment[];
}

export function CvProfessionalDevelopment({
    title,
    items,
}: CvProfessionalDevelopmentProps) {
    return (
        <section className="cv-section">
            <h2 className="cv-section-title">{title}</h2>

            <div className="professional-development-list">
                {items.map((item) => (
                    <article
                        className="professional-development-item"
                        key={`${item.institution}-${item.title}`}
                    >
                        <div className="professional-development-heading">
                            <div>
                                <h3 className="professional-development-title">
                                    {item.title}
                                </h3>

                                <p className="professional-development-institution">
                                    {item.institution}
                                </p>
                            </div>

                            {item.period && (
                                <span className="professional-development-period">
                                    {item.period}
                                </span>
                            )}
                        </div>

                        <p className="professional-development-description">
                            {item.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}