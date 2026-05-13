// Utility functions
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
