import ROUTE_TRANSITIONS from './src/components/RouteTransitions';
import { scrollHashIntoView } from './src/components/utils';

import routeTransitionsStyles from './src/components/RouteTransitions.scss';

const routeTransitionDuration = parseInt(
  routeTransitionsStyles.routeTransitionDuration
);

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

function updateRouteEnterScrollY(scrollY) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.ENTER_SCROLL,
    `${scrollY}px`
  );
}

function updateRouteExitScrollY(scrollY) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.EXIT_SCROLL,
    `${scrollY}px`
  );
}

function updateRouteEnterFixedElementOffset(offset) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.ENTER_FIXED_ELEMENT_OFFSET,
    `${offset}px`
  );
}

function updateRouteExitFixedElementOffset(offset) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.EXIT_FIXED_ELEMENT_OFFSET,
    `${offset}px`
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

function updateRouteCurrentDuration(duration) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.CURRENT_DURATION,
    `${duration}ms`
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

  updateRouteEnterFixedElementOffset(scrollY);

  updateRouteExitFixedElementOffset(prevScrollY);

  requestAnimationFrame(() => {
    if (routerProps.location.pathname === prevRouterProps.location.pathname)
      return;

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

    updateRouteEnterScrollY(
      hashElement
        ? isHashAtTheBottom
          ? windowHeight - hashBottom
          : -hashTop
        : 0
    );
  });

  updateRouteExitScrollY(
    isGoingBackwards
      ? scrollY - prevScrollY
      : routerProps.location.action === 'PUSH'
      ? -prevScrollY
      : scrollY - prevScrollY
  );

  return isNewRouteWithHash ? [0, 0] : true;
};

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  const isGoingBackwards =
    prevLocation &&
    (parseInt(location.key) || 0) - (parseInt(prevLocation.key) || 0) < 0;

  updateRouteDirection(isGoingBackwards);

  if (prevLocation) {
    updateRouteCurrentDuration(routeTransitionDuration);
  }
};

export const onInitialClientRender = () => {
  scrollHashIntoView();
};
