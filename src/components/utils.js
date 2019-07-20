const savedScrollStorageName = '@ad-saved-scroll|';

export const getSavedScroll = location => {
  const savedScroll = sessionStorage.getItem(
    `${savedScrollStorageName}${location.key}`
  );

  return savedScroll ? JSON.parse(savedScroll) : null;
};

export const setSavedScroll = (scroll, location) =>
  sessionStorage.setItem(
    `${savedScrollStorageName}${location.key}`,
    JSON.stringify(scroll)
  );
