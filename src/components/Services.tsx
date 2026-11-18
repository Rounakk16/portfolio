import { services } from '@/data/content';

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-20 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
            § 03 — How I Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tightest text-balance">
            Three ways we might
            <span className="italic font-light"> collaborate.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line">
          {services.map((service) => (
            <div key={service.id} className="bg-paper p-8 md:p-10 group hover:bg-accent-soft transition-colors duration-500">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif text-2xl tracking-tightest">{service.title}</h3>
                <span className="font-mono text-xs text-muted">
                  0{services.indexOf(service) + 1}
                </span>
              </div>
              <p className="text-ink/80 leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-muted">
                    <span className="accent-text">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
