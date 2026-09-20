// Consistent eyebrow, title, and optional introduction block.
export function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="intro">{copy}</p>}
    </div>
  );
}
