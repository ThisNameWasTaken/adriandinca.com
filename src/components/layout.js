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

import routeTransitionsStyles from '../components/RouteTransitions.scss';
import ROUTE_TRANSITIONS from './RouteTransitions';

const routeTransitionDuration = parseInt(
  routeTransitionsStyles.routeTransitionDuration
);

let isGoingBackwards = false;

function updateRouteTransitionDirection() {
  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.DIRECTION,
    `${
      isGoingBackwards
        ? ROUTE_TRANSITIONS.DIRECTIONS.TO_LEFT
        : ROUTE_TRANSITIONS.DIRECTIONS.TO_RIGHT
    }`
  );
}

let isPlayingRouteTransition = false;

function updateRouteTransitionScroll() {
  if (isPlayingRouteTransition) return;

  document.documentElement.style.setProperty(
    ROUTE_TRANSITIONS.CSS_VARS.SCROLL,
    `${-window.scrollY}px`
  );
}

function scrollHashIntoView() {
  const hash = window.location.hash;
  if (!hash) return;

  const scrollTarget = document.querySelector(hash);
  if (!scrollTarget) return;

  scrollTarget.scrollIntoView();
}

const Layout = ({ children, location }) => {
  const [lastLocation, setLastLocation] = useState(location);

  useEffect(() => {
    window.addEventListener('scroll', updateRouteTransitionScroll);

    return () => {
      window.removeEventListener('scroll', updateRouteTransitionScroll);
    };
  }, []);

  useEffect(() => {
    isGoingBackwards =
      (parseInt(location.key) || 0) - (parseInt(lastLocation.key) || 0) < 0;

    const didLocationChange = lastLocation.pathname !== location.pathname;

    document.documentElement.style.setProperty(
      ROUTE_TRANSITIONS.CSS_VARS.CURRENT_DURATION,
      `${didLocationChange ? routeTransitionDuration : 0}ms`
    );

    if (didLocationChange) {
      updateRouteTransitionDirection();
    } else {
      document.documentElement.style.scrollBehavior = 'smooth';
      scrollHashIntoView();
    }

    isPlayingRouteTransition = didLocationChange;

    setLastLocation(location);
  }, [location]);

  function onExited() {
    isPlayingRouteTransition = false;
    updateRouteTransitionScroll();

    document.documentElement.style.scrollBehavior = 'smooth';
    scrollHashIntoView();
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
