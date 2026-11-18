import { capabilities, skills } from '@/data/content';

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-20 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
            § 03 — What I Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tightest text-balance">
            Three ways I can
            <span className="italic font-light"> help.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line mb-16">
          {capabilities.map((cap) => (
            <div key={cap.id} className="bg-paper p-8 md:p-10 group hover:bg-amber-soft transition-colors duration-500">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif text-2xl tracking-tightest">{cap.title}</h3>
                <span className="font-mono text-xs text-muted">
                  0{capabilities.indexOf(cap) + 1}
                </span>
              </div>
              <p className="text-ink/80 leading-relaxed text-sm">
                {cap.description}
              </p>
              <ul className="mt-6 space-y-2">
                {cap.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-muted">
                    <span className="emphasis-text">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang) => (
                <span
                  key={lang}
                  className="text-sm px-3 py-1.5 border border-line rounded-full text-ink hover:border-amber hover:accent-text transition-colors duration-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Frameworks
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((fw) => (
                <span
                  key={fw}
                  className="text-sm px-3 py-1.5 border border-line rounded-full text-ink hover:border-amber hover:accent-text transition-colors duration-300"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Domains
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.domains.map((dom) => (
                <span
                  key={dom}
                  className="text-sm px-3 py-1.5 border border-line rounded-full text-ink hover:border-amber hover:accent-text transition-colors duration-300"
                >
                  {dom}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
