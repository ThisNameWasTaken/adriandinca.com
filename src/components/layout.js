/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';

import Header from './header';
import './layout.scss';

import routeTransitionsStyles from '../components/route-transitions.scss';

const routeTransitionDuration = parseInt(
  routeTransitionsStyles.routeTransitionDuration
);

const ROUTE = {
  DIRECTIONS: {
    TO_LEFT: -1,
    TO_RIGHT: 1,
  },
  CSS_VARS: {
    CURRENT_DURATION: '--current-route-transition-duration',
    DIRECTION: '--route-transition-direction',
    SCROLL: '--route-transition-scroll',
  },
};

let isGoingBackwards = false;

function updateRouteTransitionDirection() {
  document.documentElement.style.setProperty(
    ROUTE.CSS_VARS.DIRECTION,
    `${isGoingBackwards ? ROUTE.DIRECTIONS.TO_LEFT : ROUTE.DIRECTIONS.TO_RIGHT}`
  );
}

let isPlayingRouteTransition = false;

function updateRouteTransitionScroll() {
  if (isPlayingRouteTransition) return;

  document.documentElement.style.setProperty(
    ROUTE.CSS_VARS.SCROLL,
    `${-window.scrollY}px`
  );
}

window.addEventListener('scroll', event => {
  updateRouteTransitionScroll();
});

const Layout = ({ children, location }) => {
  const [lastLocation, setLastLocation] = useState(location);

  useEffect(() => {
    isGoingBackwards =
      (parseInt(location.key) || 0) - (parseInt(lastLocation.key) || 0) < 0;

    const didLocationChange = lastLocation.pathname !== location.pathname;

    document.documentElement.style.setProperty(
      ROUTE.CSS_VARS.CURRENT_DURATION,
      `${didLocationChange ? routeTransitionDuration : 0}ms`
    );

    if (didLocationChange) {
      updateRouteTransitionDirection();
    }

    isPlayingRouteTransition = didLocationChange;

    setLastLocation(location);
  }, [location]);

  function onExited() {
    isPlayingRouteTransition = false;
    updateRouteTransitionScroll();
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <TopAppBarFixedAdjust>
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="route-transition"
                timeout={routeTransitionDuration}
                onExited={onExited}
              >
                {children}
              </CSSTransition>
            </TransitionGroup>
          </TopAppBarFixedAdjust>
        </>
      )}
    />
  );
};

export default Layout;
