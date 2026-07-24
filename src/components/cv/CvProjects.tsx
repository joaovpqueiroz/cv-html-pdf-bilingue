import type { Project } from "@/types/cv";

interface CvProjectsProps {
    title: string;
    items: Project[];
}

export function CvProjects({ title, items }: CvProjectsProps) {
    return (
        <section className="cv-section">
            <h2 className="cv-section-title">{title}</h2>

            <div className="project-list">
                {items.map((project) => (
                    <article className="project-item" key={project.name}>
                        <div className="project-heading">
                            <h3 className="project-name">{project.name}</h3>

                            <p className="project-technologies">
                                {project.technologies.join(" • ")}
                            </p>
                        </div>

                        <p className="project-description">{project.description}</p>

                        <ul className="project-highlights">
                            {project.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}