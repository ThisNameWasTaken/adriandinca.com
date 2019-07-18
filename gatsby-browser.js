import ROUTE_TRANSITIONS from './src/components/RouteTransitions';

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

function updateRouteScrollY(scrollY) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.SCROLL,
    `${scrollY}px`
  );
}

function updateRouteDirection(isGoingBackwards) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.DIRECTION,
    `${
      isGoingBackwards
        ? ROUTE_TRANSITIONS.DIRECTIONS.TO_LEFT
        : ROUTE_TRANSITIONS.DIRECTIONS.TO_RIGHT
    }`
  );
}

export const shouldUpdateScroll = ({
  routerProps,
  prevRouterProps,
  getSavedScrollPosition,
}) => {
  const isGoingBackwards =
    prevRouterProps &&
    (parseInt(routerProps.location.key) || 0) -
      (parseInt(prevRouterProps.location.key) || 0) <
      0;

  const [, scrollY] = getSavedScrollPosition(routerProps.location) || [0, 0];

  const [, prevScrollY] = getSavedScrollPosition(prevRouterProps.location) || [
    0,
    0,
  ];

  const newScroll = isGoingBackwards
    ? scrollY - prevScrollY
    : routerProps.location.action === 'PUSH'
    ? -prevScrollY
    : scrollY - prevScrollY;

  updateRouteScrollY(newScroll);

  const isNewRouteWithHash =
    routerProps.location.hash &&
    routerProps.location.action === 'PUSH' &&
    routerProps.location.pathname !== prevRouterProps.location.pathname;

  return isNewRouteWithHash ? [0, 0] : true;
};

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  const isGoingBackwards =
    prevLocation &&
    (parseInt(location.key) || 0) - (parseInt(prevLocation.key) || 0) < 0;

  updateRouteDirection(isGoingBackwards);
};
