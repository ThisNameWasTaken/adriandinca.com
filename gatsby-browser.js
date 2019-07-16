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
      'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
    fontLink.rel = 'font';
    document.head.appendChild(fontLink);
  });
};

export const shouldUpdateScroll = ({ routerProps, prevRouterProps }) => {
  // console.log({ routerProps, prevRouterProps });

  const didLocationChange =
    routerProps.location.pathname !== prevRouterProps.location.pathname;

  return didLocationChange ? [0, 0] : true;
};

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  // console.log({ location, prevLocation });

  if (!prevLocation) {
    document.documentElement.style.scrollBehavior = 'smooth';
    return;
  }

  const didLocationChange = location.pathname !== prevLocation.pathname;

  if (didLocationChange) {
    document.documentElement.style.scrollBehavior = 'auto';
  }
};
