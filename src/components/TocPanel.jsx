export default function TocPanel({
  tocItems,
  activeIndex,
  onJump,
  topicTitle,
  notes,
  onNotesChange,
  onClearNotes,
}) {
  return (
    <aside className="hidden w-80 shrink-0 border-l border-stone-200 bg-stone-50 p-4 lg:block">
      <div className="mb-6">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">On This Page</div>
        <div className="space-y-1">
          {tocItems.map((item, index) => (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => onJump(index)}
              className={`block w-full rounded px-3 py-2 text-left text-sm transition ${
                activeIndex === index
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">Your Notes</div>
          <button
            type="button"
            onClick={onClearNotes}
            className="text-xs text-stone-500 hover:text-stone-800"
          >
            Clear
          </button>
        </div>
        <p className="mb-2 text-xs text-stone-500">
          {topicTitle ? `Notes for ${topicTitle}` : 'Select a topic to start writing notes'}
        </p>
        <textarea
          value={notes}
          onChange={(event) => onNotesChange(event.target.value)}
          placeholder="Write what you learned, tricky edge cases, and patterns to remember..."
          className="h-64 w-full resize-y rounded-lg border border-stone-200 bg-white p-3 text-sm text-stone-700 outline-none focus:border-orange-400"
        />
        <p className="mt-2 text-xs text-stone-400">Auto-saved for each topic in your browser.</p>
      </div>
    </aside>
  );
}
