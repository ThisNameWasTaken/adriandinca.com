export function scrollHashIntoView(scrollOptions) {
  const hash = window.location.hash;
  if (!hash) return;

  const scrollTarget = document.querySelector(hash);
  if (!scrollTarget) return;

  requestAnimationFrame(() => scrollTarget.scrollIntoView(scrollOptions));
}
export const camelToKebab = string =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
