interface ConceptCardProps {
  term: string;
  description: string;
  color: string;
}

export default function ConceptCard({ term, description, color }: ConceptCardProps) {
  return (
    <div
      className="bg-editor-active rounded-lg p-4 border border-editor-border hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200"
      style={{ borderLeftColor: color, borderLeftWidth: 3 }}
    >
      <h3 className="text-sm font-semibold text-text-bright mb-1">{term}</h3>
      <p className="text-xs text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
