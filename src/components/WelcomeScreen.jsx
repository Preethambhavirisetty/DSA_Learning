const quickTopics = [
  { id: 'arrays', label: 'Arrays' },
  { id: 'linked-list', label: 'Linked List' },
  { id: 'binary-search', label: 'Binary Search' },
  { id: 'trees', label: 'Trees' },
  { id: 'dynamic-programming', label: 'Dynamic Programming' },
  { id: 'graphs', label: 'Graphs' },
];

export default function WelcomeScreen({ onSelectTopic }) {
  return (
    <div className="flex h-full min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 rounded-2xl bg-orange-100 px-4 py-2 text-2xl">📚</div>
      <h2 className="font-serif text-3xl text-stone-900">Choose A Topic To Start</h2>
      <p className="mt-3 max-w-2xl text-stone-600">
        Pick any topic from the sidebar for intuition, complexity analysis, and code examples.
      </p>
      <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-3">
        {quickTopics.map((topic) => (
          <button
            key={topic.id}
            type="button"
            onClick={() => onSelectTopic(topic.id)}
            className="rounded-xl border border-stone-200 bg-white p-3 text-sm font-medium text-stone-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-700"
          >
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}
