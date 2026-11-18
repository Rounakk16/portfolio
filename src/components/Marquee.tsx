export function Marquee() {
  const items = [
    'AI & Machine Learning',
    'Full-Stack Development',
    'Computer Vision',
    'Python',
    'Graphic Design',
    'Video Editing',
    'API Integration',
    'Building since 2025',
  ];

  return (
    <div className="relative border-y border-line py-4 overflow-hidden bg-paper">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center gap-10 px-5" aria-hidden={set === 1}>
            {items.map((item) => (
              <span key={item} className="flex items-center gap-10">
                <span className="font-serif italic text-lg text-ink/70">{item}</span>
                <span className="accent-text text-sm">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
