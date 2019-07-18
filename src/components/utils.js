export function scrollHashIntoView(scrollOptions) {
  const hash = window.location.hash;
  if (!hash) return;

  const scrollTarget = document.querySelector(hash);
  if (!scrollTarget) return;

  requestAnimationFrame(() => scrollTarget.scrollIntoView(scrollOptions));
}
