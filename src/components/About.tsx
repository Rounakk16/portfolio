export function About() {
  const facts = [
    ['Based in', 'Jaipur, India'],
    ['Studying', 'B.Tech CSE — AI & Data Science'],
    ['Year', 'Second year'],
    ['Schooling', 'ICSE, Agra'],
    ['Building since', '2025'],
    ['Currently exploring', 'LLM agents, systems design'],
  ];

  return (
    <section id="about" className="py-20 md:py-32 border-t border-line bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
              § 04 — About
            </p>
            <div className="font-serif text-2xl md:text-3xl leading-relaxed tracking-tightest text-balance">
              <p className="mb-6">
                I'm a second-year B.Tech student studying Computer Science with a
                focus on Artificial Intelligence and Data Science. I started
                building things in 2025 and haven't really stopped since.
              </p>
              <p className="mb-6 italic font-light text-muted">
                My projects tend to sit where AI meets real problems — a
                backtesting engine for stock strategies, a medical assistant for
                symptoms, a vision model for agriculture, and a personal
                assistant I named after the one in Iron Man.
              </p>
              <p>
                When I'm not training models or wiring up APIs, I do graphic
                design and video editing. Good engineering and good design use
                the same muscle.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <dl className="divide-y divide-line">
              {facts.map(([label, value]) => (
                <div key={label} className="py-3 flex justify-between gap-4 text-sm">
                  <dt className="text-muted font-mono text-xs uppercase tracking-wider self-center">
                    {label}
                  </dt>
                  <dd className="text-ink text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
