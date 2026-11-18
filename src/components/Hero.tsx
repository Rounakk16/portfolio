import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-32 grain">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full emphasis-bg animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-muted">
            Portfolio — Jaipur, India — Updated Nov 2026
          </span>
        </div>

        <h1 className="font-serif text-[2.75rem] leading-[1.02] tracking-tightest sm:text-6xl md:text-7xl lg:text-8xl text-balance animate-fade-up">
          A student building
          <br />
          <span className="italic font-light text-muted">intelligent things, </span>
          <span className="italic font-light accent-text">one project</span>
          <span className="italic font-light text-muted"> at a time.</span>
        </h1>

        <div className="mt-10 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-5 md:col-start-7">
            <p className="text-lg leading-relaxed text-ink/80 text-balance">
              I'm Rounak Kapoor — a B.Tech CSE student specializing in Artificial
              Intelligence and Data Science, based in Jaipur. I build AI tools,
              full-stack apps, and the occasional personal assistant named JARVIS.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-full transition-all duration-400 hover:emphasis-bg"
              >
                See my work
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#contact" className="text-sm link-underline text-ink">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
