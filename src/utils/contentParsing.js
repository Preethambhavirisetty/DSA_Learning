export function cxBadgeClass(value) {
  if (!value || value === '—') {
    return '';
  }
  if (value.includes('O(1)')) {
    return 'cx-good';
  }
  if (value.includes('n²') || value.includes('n!')) {
    return 'cx-bad';
  }
  return 'cx-ok';
}

export function extractTocFromSections(sectionsHtml, fallbackItems = []) {
  if (!sectionsHtml) {
    return fallbackItems;
  }

  if (typeof window !== 'undefined' && typeof window.DOMParser !== 'undefined') {
    const parser = new window.DOMParser();
    const doc = parser.parseFromString(`<div>${sectionsHtml}</div>`, 'text/html');
    const headings = [...doc.querySelectorAll('.section h2')]
      .map((node) => node.textContent?.trim())
      .filter(Boolean);
    return headings.length ? headings : fallbackItems;
  }

  const matches = [...sectionsHtml.matchAll(/<h2>(.*?)<\/h2>/g)].map((match) =>
    match[1].replace(/<[^>]+>/g, '').trim(),
  );
  return matches.length ? matches : fallbackItems;
}

export function extractSectionBlocks(sectionsHtml) {
  if (!sectionsHtml) {
    return [];
  }

  if (typeof window !== 'undefined' && typeof window.DOMParser !== 'undefined') {
    const parser = new window.DOMParser();
    const doc = parser.parseFromString(`<div>${sectionsHtml}</div>`, 'text/html');
    const blocks = [...doc.querySelectorAll('.section')].map((node) => node.outerHTML);
    return blocks.length ? blocks : [sectionsHtml];
  }

  return [sectionsHtml];
}
