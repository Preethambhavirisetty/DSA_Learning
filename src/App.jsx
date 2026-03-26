import { useEffect, useMemo, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import TocPanel from './components/TocPanel';
import TopBar from './components/TopBar';
import WelcomeScreen from './components/WelcomeScreen';
import { useTopicNotes } from './hooks/useTopicNotes';
import { getCategories, getTopicById } from './services/contentService';
import { copyCodeFromButton } from './services/copyService';
import { getVisibleTopicIdSet } from './services/topicFilterService';
import {
  cxBadgeClass,
  extractSectionBlocks,
  extractTocFromSections,
} from './utils/contentParsing';

export default function App() {
  const categories = useMemo(() => getCategories(), []);
  const initialTopicId = categories[0]?.topics?.[0]?.id || null;
  const [query, setQuery] = useState('');
  const [activeTopicId, setActiveTopicId] = useState(initialTopicId);
  const [expanded, setExpanded] = useState(() => new Set([categories[0]?.id]));
  const [activeTocIndex, setActiveTocIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentAreaRef = useRef(null);
  const {
    notes,
    setNotes,
    sectionNotes,
    loadTopicNotes,
    updateSectionNote,
    clearTopicNotes,
  } = useTopicNotes({
    initialTopicId,
    getTopicById,
    activeTopicId,
  });

  const activeTopic = activeTopicId ? getTopicById(activeTopicId) : null;
  const visibleTopicIdSet = useMemo(
    () => getVisibleTopicIdSet(categories, query),
    [categories, query],
  );

  const totalTopics = useMemo(
    () => categories.reduce((sum, category) => sum + category.topics.length, 0),
    [categories],
  );
  const tocItems = useMemo(
    () => extractTocFromSections(activeTopic?.sections, activeTopic?.toc || []),
    [activeTopic],
  );
  const sectionBlocks = useMemo(
    () => extractSectionBlocks(activeTopic?.sections),
    [activeTopic],
  );

  const toggleCategory = (categoryId) => {
    setExpanded((previous) => {
      const next = new Set(previous);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const handleSelectTopic = (topicId) => {
    setActiveTopicId(topicId);
    setActiveTocIndex(0);
    setMobileMenuOpen(false);
    loadTopicNotes(topicId);
    requestAnimationFrame(() => {
      contentAreaRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  const handleQueryChange = (value) => {
    setQuery(value);
    const matches = getVisibleTopicIdSet(categories, value);
    if (matches && matches.size === 1) {
      const [singleMatch] = [...matches];
      if (singleMatch && activeTopicId !== singleMatch) {
        handleSelectTopic(singleMatch);
      }
    }
  };

  const jumpToSection = (index) => {
    const sections = contentAreaRef.current?.querySelectorAll('.section');
    const target = sections?.[index];
    if (!target || !contentAreaRef.current) {
      return;
    }

    setActiveTocIndex(index);
    contentAreaRef.current.scrollTo({
      top: target.offsetTop - 16,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.copyCode = async (button) => {
      try {
        const ok = await copyCodeFromButton(button);
        if (!ok) {
          return;
        }
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 1500);
      } catch {
        button.textContent = 'Failed';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 1500);
      }
    };

    return () => {
      delete window.copyCode;
    };
  }, []);

  const clearNotes = () => {
    clearTopicNotes(activeTopicId);
  };

  const handleSectionNoteChange = (index, value) => {
    updateSectionNote(activeTopicId, index, value);
  };

  return (
    <div className="h-screen overflow-hidden bg-stone-100 text-stone-900">
      <TopBar
        query={query}
        onChange={handleQueryChange}
        topicCount={totalTopics}
        onToggleMenu={() => setMobileMenuOpen((open) => !open)}
      />
      <div className="flex h-[calc(100vh-56px)] flex-col md:flex-row">
        <Sidebar
          categories={categories}
          expanded={expanded}
          onToggle={toggleCategory}
          activeTopicId={activeTopicId}
          onSelectTopic={handleSelectTopic}
          visibleTopicIdSet={visibleTopicIdSet}
          mobileOpen={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        <main ref={contentAreaRef} className="flex-1 overflow-y-auto bg-stone-50">
          {!activeTopic ? (
            <WelcomeScreen onSelectTopic={handleSelectTopic} />
          ) : (
            <article className="mx-auto max-w-4xl px-5 py-8 md:px-10">
              <div className="mb-3 text-sm text-stone-500">
                {activeTopic.category} <span className="mx-1">›</span> {activeTopic.title}
              </div>
              <div className="mb-5 flex flex-wrap gap-2">
                {activeTopic.tags.map((tag) => (
                  <span key={tag.label} className={`tag tag-${tag.type}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
              <h2 className="font-serif text-4xl text-stone-900">{activeTopic.title}</h2>
              <p className="mt-3 text-lg leading-7 text-stone-600">{activeTopic.subtitle}</p>

              <div className="my-7 grid gap-2 rounded-xl border border-stone-200 bg-white p-3 md:grid-cols-5">
                {Object.entries(activeTopic.complexity).map(([key, value]) => (
                  <div key={key} className="rounded-lg border border-stone-100 bg-stone-50 p-3">
                    <div className="text-xs uppercase tracking-wider text-stone-500">{key}</div>
                    <div className={`mt-1 text-sm font-semibold ${cxBadgeClass(value)}`}>{value}</div>
                  </div>
                ))}
              </div>

              <div className="article-body">
                {sectionBlocks.map((sectionHtml, index) => (
                  <div key={`${activeTopicId}-section-${index}`} className="mb-6">
                    <div dangerouslySetInnerHTML={{ __html: sectionHtml }} />
                    <div className="rounded-lg border border-stone-200 bg-white p-3">
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-500">
                        Notes For This Section
                      </label>
                      <textarea
                        value={sectionNotes[index] || ''}
                        onChange={(event) => handleSectionNoteChange(index, event.target.value)}
                        placeholder="Write key ideas, edge cases, and what to revise later..."
                        className="h-24 w-full resize-y rounded-md border border-stone-200 bg-stone-50 p-2 text-sm text-stone-700 outline-none focus:border-orange-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}
        </main>

        <TocPanel
          tocItems={tocItems}
          activeIndex={activeTocIndex}
          onJump={jumpToSection}
          topicTitle={activeTopic?.title || ''}
          notes={notes}
          onNotesChange={setNotes}
          onClearNotes={clearNotes}
        />
      </div>
    </div>
  );
}
