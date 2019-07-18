import ROUTE_TRANSITIONS from './src/components/RouteTransitions';
import { scrollHashIntoView } from './src/components/utils';

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

let windowHeight = window.innerHeight;

window.addEventListener('resize', () => {
  windowHeight = window.innerHeight;
});

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

  window.location['action'] = routerProps.location.action;

  const isNewRouteWithHash =
    routerProps.location.hash &&
    routerProps.location.action === 'PUSH' &&
    routerProps.location.pathname !== prevRouterProps.location.pathname;

  const hashElement =
    isNewRouteWithHash &&
    document.getElementById(routerProps.location.hash.replace('#', ''));

  const newScroll = isGoingBackwards
    ? scrollY - prevScrollY
    : routerProps.location.action === 'PUSH'
    ? -prevScrollY
    : scrollY - prevScrollY;

  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.ENTER_FIXED_ELEMENT_OFFSET,
    `${scrollY}px`
  );

  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.EXIT_FIXED_ELEMENT_OFFSET,
    `${prevScrollY}px`
  );

  // TODO: Do some checking
  requestAnimationFrame(() => {
    if (routerProps.location.pathname === prevRouterProps.location.pathname)
      return;

    // if (!hashElement) return;

    const hashHeight = hashElement.offsetHeight;
    const hashTop = hashElement.offsetTop;

    const hashBottom = hashElement ? hashTop + hashHeight : 0;

    const enteringRouteHeight = document.querySelector(
      '.route-transition-enter-active'
    ).scrollHeight;

    const isHashAtTheBottom =
      hashElement &&
      hashBottom === enteringRouteHeight &&
      hashHeight < windowHeight;

    console.log({
      enteringRouteHeight,
      hashBottom,
      hashHeight,
      windowHeight,
      isHashAtTheBottom,
    });

    document.documentElement.style.setProperty(
      ROUTE_TRANSITIONS.CSS_VARS.ENTER_SCROLL,
      `${
        hashElement
          ? isHashAtTheBottom
            ? windowHeight - hashBottom
            : -hashTop
          : 0
      }px`
    );
  });

  updateRouteScrollY(newScroll);

  return isNewRouteWithHash ? [0, 0] : true;
};

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  const isGoingBackwards =
    prevLocation &&
    (parseInt(location.key) || 0) - (parseInt(prevLocation.key) || 0) < 0;

  updateRouteDirection(isGoingBackwards);
};

export const onInitialClientRender = () => {
  scrollHashIntoView();
};
