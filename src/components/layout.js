/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';

import Header from './header';
import routeTransitions from './RouteTransitions';
import './layout.scss';

const Layout = ({ children, location }) => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';

    return () => (document.documentElement.style.scrollBehavior = 'auto');
  }, []);

  const onExit = exitingElement => {
    exitingElement.setAttribute('aria-hidden', 'true');
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
              classNames="route-transition"
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
