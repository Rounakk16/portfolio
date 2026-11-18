import { ArrowUpRight } from 'lucide-react';

const socials = [
  { label: 'Email', value: 'rounakapoor2005@gmail.com', href: 'mailto:rounakapoor2005@gmail.com' },
  { label: 'GitHub', value: '/Rounakk16', href: 'https://github.com/Rounakk16' },
  { label: 'Instagram', value: '@rounakk161', href: 'https://instagram.com/rounakk161' },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
          § 05 — Contact
        </p>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tightest leading-[1.02] text-balance">
          Let's build something
          <span className="italic font-light accent-text block">that thinks.</span>
        </h2>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="text-lg text-ink/80 leading-relaxed max-w-md">
              Open to internships, collaborations, and freelance projects. If
              you've got an idea that needs an AI brain or a full-stack build —
              send a note. A sentence is enough.
            </p>
            <a
              href="mailto:rounakapoor2005@gmail.com"
              className="group mt-8 inline-flex items-center gap-2 font-serif text-xl md:text-3xl tracking-tightest link-underline"
            >
              rounakapoor2005@gmail.com
              <ArrowUpRight className="w-6 h-6 emphasis-text transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <ul className="divide-y divide-line">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between py-4 hover:emphasis-text transition-colors duration-300"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:emphasis-text">
                      {s.label}
                    </span>
                    <span className="text-sm text-ink group-hover:emphasis-text">{s.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
