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
            {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
              */}
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              onExit={onExit}
              timeout={3000}
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
