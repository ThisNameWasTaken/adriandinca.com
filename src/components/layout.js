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
import routeTransitions from './RouteTransitions';
import './layout.scss';
import { getSavedScroll, setSavedScroll } from './utils';
import RouteFab from './RouteFab';

function updateVhUnits() {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight / 100}px`
  );
}

updateVhUnits();
window.addEventListener('resize', updateVhUnits);

const Layout = ({ children, location }) => {
  const [prevLocation, setPrevLocation] = useState();

  useEffect(() => {
    setPrevLocation(location);

    const isSameOrInitialLocation =
      !prevLocation || location.pathname === prevLocation.pathname;

    document.documentElement.style.setProperty(
      routeTransitions.cssVars.duration,
      isSameOrInitialLocation ? '0s' : 'initial'
    );

    if (isSameOrInitialLocation) {
      const root = document.querySelector(
        'main:not([aria-hidden="true"]) > div'
      );

      if (location.hash) {
        const scrollTarget = document.querySelector(location.hash);

        scrollTarget &&
          root.scroll(scrollTarget.offsetLeft, scrollTarget.offsetTop);
      } else {
        root.scroll(0, 0);
      }
    }

    const isGoingBackwards =
      prevLocation &&
      (parseInt(prevLocation.key) || 0) < (parseInt(location.key) || 0);

    isGoingBackwards
      ? routeTransitions.moveToLeft()
      : routeTransitions.moveToRight();
  }, [location]);

  const onEnter = enteringElement => {
    const enteringElementInner = enteringElement.children[0];
    if (!enteringElementInner) return;

    // Disable smooth scrolling while updating entering route's scroll
    enteringElementInner.style.scrollBehavior = 'auto';

    // Update entering route's scroll
    requestAnimationFrame(() => {
      const savedScroll = getSavedScroll(location);

      if (savedScroll) {
        enteringElementInner.scroll(savedScroll);
      } else if (location.hash) {
        const scrollTarget = document.querySelector(location.hash);

        enteringElementInner.scroll(
          scrollTarget.offsetLeft,
          scrollTarget.offsetTop
        );
      }
    });

    // Re-enable smooth scrolling after updating entering route's scroll
    requestAnimationFrame(() =>
      requestAnimationFrame(
        () => (enteringElementInner.style.scrollBehavior = 'smooth')
      )
    );
  };

  const onExit = exitingElement => {
    exitingElement.setAttribute('aria-hidden', 'true');

    const exitingElementInner = exitingElement.children[0];
    if (!exitingElementInner) return;

    setSavedScroll(
      {
        left: exitingElementInner.scrollLeft,
        top: exitingElementInner.scrollTop,
      },
      prevLocation
    );
  };

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
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames={routeTransitions.classNames}
              onEntering={onEnter}
              onExit={onExit}
              timeout={routeTransitions.sassVars.routeTransitionDuration}
            >
              <TopAppBarFixedAdjust>
                <div>{children}</div>
              </TopAppBarFixedAdjust>
            </CSSTransition>
          </TransitionGroup>
          <RouteFab location={location} />
        </>
      )}
    />
  );
};

export default Layout;
