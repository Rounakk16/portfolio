import { nowEntries } from '@/data/content';

export function Now() {
  return (
    <section id="now" className="py-20 md:py-32 border-t border-line bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
              § 02 — Now
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tightest text-balance">
              What I'm up to
              <span className="italic font-light block">these days.</span>
            </h2>
            <p className="mt-6 text-ink/80 leading-relaxed text-balance">
              A living page — not a newsletter, just a place to track what I'm
              studying, building, and thinking about. Updated when something
              changes.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-0">
              {nowEntries.map((entry) => (
                <article
                  key={entry.id}
                  className="group border-t border-line py-7 hover:bg-amber-soft transition-colors duration-500 -mx-4 px-4 rounded-sm"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest emphasis-text">
                      {entry.number}
                    </span>
                    <span className="text-xs text-muted">
                      {entry.date} · {entry.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl tracking-tightest leading-snug group-hover:emphasis-text transition-colors duration-300">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-ink/75 leading-relaxed text-sm md:text-base">
                    {entry.excerpt}
                  </p>
                </article>
              ))}
              <div className="border-t border-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
