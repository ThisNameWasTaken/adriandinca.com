/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const onClientEntry = () => {
  window.addEventListener('load', () => {
    const fontLink = document.createElement('link');
    fontLink.href =
      'https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  });
};
