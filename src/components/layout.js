/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import { scrollHashIntoView } from './utils';

import Header from './header';
import './layout.scss';

import routeTransitionsStyles from '../components/RouteTransitions.scss';

const routeTransitionDuration = parseInt(
  routeTransitionsStyles.routeTransitionDuration
);

const Layout = ({ children, location }) => {
  function onExited() {
    const isNewRouteWithHash =
      window.location.hash &&
      window.location.action === 'PUSH' &&
      window.location.pathname !== location.pathname;

    if (isNewRouteWithHash) {
      scrollHashIntoView();
    }
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
