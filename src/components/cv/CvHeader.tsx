import type { Header } from "@/types/cv";

interface CvHeaderProps {
    header: Header;
}

export function CvHeader({ header }: CvHeaderProps) {
    return (
        <header className="cv-header">
            <div className="cv-header-main">
                <h1 className="cv-name">{header.name}</h1>

                <p className="cv-title">{header.title}</p>

                <p className="cv-specialization">
                    {header.specialization.join(" • ")}
                </p>
            </div>

            <div className="cv-contact">
                <span>{header.location}</span>

                {header.email && (
                    <a href={`mailto:${header.email}`}>{header.email}</a>
                )}

                {header.links.map(
                    (link) =>
                        link.href && (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {link.label}
                            </a>
                        ),
                )}
            </div>
        </header>
    );
}