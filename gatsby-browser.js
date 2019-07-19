import ROUTE_TRANSITIONS from './src/components/RouteTransitions';
import { scrollHashIntoView } from './src/components/utils';

import routeTransitionsStyles from './src/components/RouteTransitions.scss';
import topAppBarStyles from './src/components/material/TopAppBar.scss';

const routeTransitionDuration = parseInt(
  routeTransitionsStyles.routeTransitionDuration
);

const topAppBarHeight = parseInt(topAppBarStyles.topAppBarHeight);
const topAppBarMobileHeight = parseInt(topAppBarStyles.topAppBarMobileHeight);
const topAppBarMobileBreakPoint = parseInt(
  topAppBarStyles.topAppBarMobileBreakPoint
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

function updateRouteEnterFixedElementTopOffset(offset) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.ENTER_FIXED_ELEMENT_TOP_OFFSET,
    `${offset}px`
  );
}

function updateRouteExitFixedElementTopOffset(offset) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.EXIT_FIXED_ELEMENT_TOP_OFFSET,
    `${offset}px`
  );
}

function updateRouteEnterFixedElementBottomOffset(offset) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.ENTER_FIXED_ELEMENT_BOTTOM_OFFSET,
    `${offset}px`
  );
}

function updateRouteExitFixedElementBottomOffset(offset) {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.EXIT_FIXED_ELEMENT_BOTTOM_OFFSET,
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
let windowWidth = window.innerWidth;

window.addEventListener('resize', () => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
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
    window.scrollX,
    window.scrollY,
  ];

  window.location['action'] = routerProps.location.action;

  const isNewRouteWithHash =
    routerProps.location.hash &&
    routerProps.location.action === 'PUSH' &&
    routerProps.location.pathname !== prevRouterProps.location.pathname;

  const hashElement =
    isNewRouteWithHash &&
    document.getElementById(routerProps.location.hash.replace('#', ''));

  updateRouteEnterFixedElementTopOffset(scrollY);
  updateRouteExitFixedElementTopOffset(prevScrollY);

  const windowRelativeScrollDiff =
    Math.abs(prevScrollY - scrollY) - windowHeight;

  const topAppBarOffset =
    windowWidth <= topAppBarMobileBreakPoint
      ? topAppBarMobileHeight
      : topAppBarHeight;

  const exitOffset =
    windowRelativeScrollDiff < -topAppBarOffset
      ? -scrollY
      : -scrollY + windowRelativeScrollDiff + topAppBarOffset;

  const enterOffset = -scrollY;

  updateRouteEnterFixedElementBottomOffset(enterOffset);
  updateRouteExitFixedElementBottomOffset(exitOffset);

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
