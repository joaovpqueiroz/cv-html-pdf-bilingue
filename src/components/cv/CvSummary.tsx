interface CvSummaryProps {
    summary: string;
    title: string;
}

export function CvSummary({ summary, title }: CvSummaryProps) {
    return (
        <section className="cv-section">
            <h2 className="cv-section-title">{title}</h2>

            <p className="cv-summary">{summary}</p>
        </section>
    );
}