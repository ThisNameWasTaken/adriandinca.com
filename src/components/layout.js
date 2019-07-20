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

const Layout = ({ children, location }) => {
  const [prevLocation, setPrevLocation] = useState(null);

  useEffect(() => {
    setPrevLocation(location);
  }, [location]);

  const onEnter = enteringElement => {
    const enteringElementInner = enteringElement.children[0];
    if (!enteringElementInner) return;

    // Disable smooth scrolling while updating route's scroll
    enteringElementInner.style.scrollBehavior = 'auto';

    requestAnimationFrame(() =>
      requestAnimationFrame(
        () => (enteringElementInner.style.scrollBehavior = 'smooth')
      )
    );

    requestAnimationFrame(() =>
      enteringElementInner.scroll(getSavedScroll(location))
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
              <TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
            </CSSTransition>
          </TransitionGroup>
        </>
      )}
    />
  );
};

export default Layout;
