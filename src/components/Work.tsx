import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';

export function Work() {
  return (
    <section id="work" className="py-20 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
              § 01 — Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tightest">
              Four projects I've
              <span className="italic font-light"> built so far.</span>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted max-w-xs text-right">
            Links coming soon — these are all real, and most are done.
          </p>
        </div>

        <div className="space-y-0">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group block border-t border-line py-8 md:py-10 transition-colors duration-500 hover:bg-amber-soft"
            >
              <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="md:col-span-1 font-mono text-sm text-muted">
                  {project.number}
                </div>

                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tightest group-hover:emphasis-text transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">{project.category}</p>
                </div>

                <div className="md:col-span-5">
                  <p className="text-ink/80 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono uppercase tracking-wider text-muted border border-line rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 flex md:justify-end items-start gap-3">
                  <span className="font-mono text-sm text-muted">{project.year}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted group-hover:emphasis-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
