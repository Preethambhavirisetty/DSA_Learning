export function getVisibleTopicIdSet(categories, query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return null;
  }

  const ids = new Set();
  for (const category of categories) {
    for (const topic of category.topics) {
      if (topic.label.toLowerCase().includes(normalized)) {
        ids.add(topic.id);
      }
    }
  }

  return ids;
}

export function shouldAutoExpand(category, visibleTopicIdSet) {
  if (!visibleTopicIdSet) {
    return false;
  }

  return category.topics.some((topic) => visibleTopicIdSet.has(topic.id));
}
