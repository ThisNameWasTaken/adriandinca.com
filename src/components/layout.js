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

function updateRouteTransitionDirection() {
  document.documentElement.style.setProperty(
    ROUTE.CSS_VARS.DIRECTION,
    `${window.isPopping ? ROUTE.DIRECTIONS.TO_LEFT : ROUTE.DIRECTIONS.TO_RIGHT}`
  );

  window.isPopping = false;
}

function updateRouteTransitionScroll() {
  document.documentElement.style.setProperty(
    ROUTE.CSS_VARS.SCROLL,
    `${-window.lastScrollY}px`
  );
}

const Layout = ({ children, location }) => {
  const [lastLocation, setLastLocation] = useState(location);

  useEffect(() => {
    window.addEventListener('popstate', () => {
      window.isPopping = true;
    });

    document.documentElement.style.scrollBehavior = 'auto';

    window.addEventListener('scroll', event => {
      updateRouteTransitionScroll();

      if (window.scrollY > 0) {
        window.lastScrollY = window.scrollY;
      }
    });

    return () => (document.documentElement.style.scrollBehavior = 'auto');
  }, []);

  useEffect(() => {
    const didLocationChange = lastLocation.pathname !== location.pathname;

    document.documentElement.style.setProperty(
      ROUTE.CSS_VARS.CURRENT_DURATION,
      `${didLocationChange ? routeTransitionDuration : 0}ms`
    );

    if (didLocationChange) {
      updateRouteTransitionDirection();
    }

    setLastLocation(location);
  }, [location]);

  function onExited() {
    window.lastScrollY = window.scrollY;
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
