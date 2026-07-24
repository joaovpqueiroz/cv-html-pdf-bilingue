import type { Language } from "@/types/cv";

interface CvLanguagesProps {
    title: string;
    items: Language[];
}

export function CvLanguages({ title, items }: CvLanguagesProps) {
    return (
        <section className="cv-section">
            <h2 className="cv-section-title">{title}</h2>

            <div className="language-list">
                {items.map((item) => (
                    <div className="language-item" key={item.name}>
                        <span className="language-name">{item.name}</span>
                        <span className="language-level">{item.level}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}