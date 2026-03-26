export default function TopBar({ query, onChange, topicCount, onToggleMenu }) {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-stone-200 bg-white px-4 md:px-6">
      <button
        type="button"
        onClick={onToggleMenu}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-stone-200 text-stone-600 md:hidden"
        aria-label="Open topic menu"
      >
        ☰
      </button>
      <h1 className="font-serif text-xl tracking-tight text-stone-900">
        DSA Master <span className="text-orange-600">React</span>
      </h1>
      <div className="hidden h-6 w-px bg-stone-200 md:block" />
      <div className="relative w-full max-w-sm">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          value={query}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search topics..."
          className="h-9 w-full rounded-lg border border-stone-200 bg-stone-50 pl-9 pr-3 text-sm text-stone-800 outline-none transition focus:border-orange-500"
        />
      </div>
      <div className="ml-auto hidden text-xs text-stone-500 md:block">
        Topics: <span className="font-semibold text-stone-800">{topicCount}</span>
      </div>
    </header>
  );
}
