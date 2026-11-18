export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-lg tracking-tightest">Rounak Kapoor</span>
          <span className="font-mono text-xs text-muted">© 2026</span>
        </div>
        <p className="font-mono text-xs text-muted">
          Set in Fraunces & Inter. Built by hand in Jaipur.
        </p>
        <a href="#top" className="text-sm text-muted hover:text-ink transition-colors duration-300 link-underline">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
