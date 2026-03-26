import { useEffect, useState } from 'react';
import { extractSectionBlocks } from '../utils/contentParsing';

function getTopicNotesKey(topicId) {
  return `dsa-notes:${topicId}`;
}

function getSectionNoteKey(topicId, sectionIndex) {
  return `dsa-section-note:${topicId}:${sectionIndex}`;
}

function loadSectionNotes(topicId, sectionCount) {
  if (!topicId || sectionCount <= 0 || typeof localStorage === 'undefined') {
    return [];
  }

  return Array.from({ length: sectionCount }, (_, index) =>
    localStorage.getItem(getSectionNoteKey(topicId, index)) || '',
  );
}

export function useTopicNotes({ initialTopicId, getTopicById, activeTopicId }) {
  const [notes, setNotes] = useState(
    () => (initialTopicId ? localStorage.getItem(getTopicNotesKey(initialTopicId)) || '' : ''),
  );

  const [sectionNotes, setSectionNotes] = useState(() => {
    const initialTopic = initialTopicId ? getTopicById(initialTopicId) : null;
    const initialSections = extractSectionBlocks(initialTopic?.sections);
    return loadSectionNotes(initialTopicId, initialSections.length);
  });

  const loadTopicNotes = (topicId) => {
    if (!topicId) {
      setNotes('');
      setSectionNotes([]);
      return;
    }

    setNotes(localStorage.getItem(getTopicNotesKey(topicId)) || '');
    const nextTopic = getTopicById(topicId);
    const sectionCount = extractSectionBlocks(nextTopic?.sections).length;
    setSectionNotes(loadSectionNotes(topicId, sectionCount));
  };

  const updateSectionNote = (topicId, index, value) => {
    setSectionNotes((previous) => {
      const next = [...previous];
      next[index] = value;
      return next;
    });

    if (topicId) {
      localStorage.setItem(getSectionNoteKey(topicId, index), value);
    }
  };

  const clearTopicNotes = (topicId) => {
    if (!topicId) {
      return;
    }
    setNotes('');
    localStorage.removeItem(getTopicNotesKey(topicId));
  };

  useEffect(() => {
    if (!activeTopicId) {
      return;
    }
    localStorage.setItem(getTopicNotesKey(activeTopicId), notes);
  }, [activeTopicId, notes]);

  return {
    notes,
    setNotes,
    sectionNotes,
    loadTopicNotes,
    updateSectionNote,
    clearTopicNotes,
  };
}
