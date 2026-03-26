import { shouldAutoExpand } from '../services/topicFilterService';

export default function Sidebar({
  categories,
  expanded,
  onToggle,
  activeTopicId,
  onSelectTopic,
  visibleTopicIdSet,
  mobileOpen,
  onCloseMobile,
}) {
  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          onClick={onCloseMobile}
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
          aria-label="Close topic menu"
        />
      )}
      <aside
        className={`fixed left-0 top-14 z-30 h-[calc(100vh-56px)] w-72 border-r border-stone-200 bg-white transition-transform md:static md:z-0 md:h-auto md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-stone-200 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-stone-500">
          Learning Map
        </div>
        <div className="h-[calc(100%-44px)] overflow-y-auto py-2 md:h-[calc(100vh-56px)]">
          {visibleTopicIdSet && visibleTopicIdSet.size === 0 && (
            <div className="px-5 py-4 text-sm text-stone-500">No topics match your search.</div>
          )}
          {categories.map((category) => {
            const isExpanded = expanded.has(category.id) || shouldAutoExpand(category, visibleTopicIdSet);
            const visibleTopics = visibleTopicIdSet
              ? category.topics.filter((topic) => visibleTopicIdSet.has(topic.id))
              : category.topics;

            return (
              <div key={category.id} className="mb-1">
                <button
                  type="button"
                  onClick={() => onToggle(category.id)}
                  className="flex w-full items-center gap-2 px-5 py-2 text-left hover:bg-stone-50"
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: category.color }} />
                  <span className="flex-1 text-sm font-medium text-stone-700">{category.label}</span>
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs text-stone-500">{visibleTopics.length}</span>
                  <span className={`text-xs text-stone-400 transition ${isExpanded ? 'rotate-90' : ''}`}>▶</span>
                </button>
                {isExpanded && (
                  <div className="pb-1">
                    {visibleTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => {
                          onSelectTopic(topic.id);
                          onCloseMobile();
                        }}
                        className={`block w-full border-l-2 py-2 pl-9 pr-3 text-left text-sm transition ${
                          activeTopicId === topic.id
                            ? 'border-orange-600 bg-orange-50 font-medium text-orange-700'
                            : 'border-transparent text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                        }`}
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
