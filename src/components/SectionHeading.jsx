export default function SectionHeading({ eyebrow, title, intro, align = 'left' }) {
  return (
    <div className={`max-w-3xl mb-12 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl lg:text-4xl font-serif leading-tight mb-4">{title}</h2>
      {intro && <p className="text-charcoal/70 text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}
