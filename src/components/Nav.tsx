import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Now', href: '#now' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg font-medium tracking-tightest">
          Rounak Kapoor
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors duration-300 link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-1 text-sm font-medium text-ink"
        >
          <span className="hidden sm:inline">Available for work</span>
          <span className="sm:hidden">Hire me</span>
          <ArrowUpRight className="w-4 h-4 accent-text transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}
